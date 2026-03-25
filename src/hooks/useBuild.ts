"use client";

import { useReducer, useCallback, useEffect } from "react";
import { BuildPreferences, Build, Part, PartCategory, BudgetTier, CpuBrand, GpuBrand, CaseSize } from "@/data/types";
import { generateBuild, getAlternatives } from "@/lib/buildGenerator";

type Step = 1 | 2 | 3;

interface BuildState {
  step: Step;
  preferences: BuildPreferences;
  build: Build | null;
  swappedParts: Record<string, string>; // category -> partId overrides
}

type BuildAction =
  | { type: "SET_TIER"; tier: BudgetTier }
  | { type: "SET_CPU_BRAND"; cpuBrand: CpuBrand }
  | { type: "SET_GPU_BRAND"; gpuBrand: GpuBrand }
  | { type: "SET_PERIPHERALS"; include: boolean }
  | { type: "SET_CASE_SIZE"; caseSize: CaseSize }
  | { type: "GENERATE_BUILD" }
  | { type: "SWAP_PART"; category: PartCategory; part: Part }
  | { type: "GO_TO_STEP"; step: Step }
  | { type: "RESET" };

const defaultPreferences: BuildPreferences = {
  tier: "mid-range",
  cpuBrand: "amd",
  gpuBrand: "nvidia",
  includePeripherals: false,
  caseSize: "mid-tower",
};

function buildReducer(state: BuildState, action: BuildAction): BuildState {
  switch (action.type) {
    case "SET_TIER":
      return { ...state, preferences: { ...state.preferences, tier: action.tier } };
    case "SET_CPU_BRAND":
      return { ...state, preferences: { ...state.preferences, cpuBrand: action.cpuBrand } };
    case "SET_GPU_BRAND":
      return { ...state, preferences: { ...state.preferences, gpuBrand: action.gpuBrand } };
    case "SET_PERIPHERALS":
      return { ...state, preferences: { ...state.preferences, includePeripherals: action.include } };
    case "SET_CASE_SIZE":
      return { ...state, preferences: { ...state.preferences, caseSize: action.caseSize } };
    case "GENERATE_BUILD": {
      const build = generateBuild(state.preferences);
      return { ...state, build, step: 2, swappedParts: {} };
    }
    case "SWAP_PART": {
      if (!state.build) return state;
      const newParts = state.build.parts.map((p) =>
        p.category === action.category ? action.part : p
      );
      const totalEstimatedZAR = newParts.reduce((sum, p) => sum + p.estimatedPriceZAR, 0);
      return {
        ...state,
        build: { ...state.build, parts: newParts, totalEstimatedZAR },
        swappedParts: { ...state.swappedParts, [action.category]: action.part.id },
      };
    }
    case "GO_TO_STEP":
      return { ...state, step: action.step };
    case "RESET":
      return { step: 1, preferences: defaultPreferences, build: null, swappedParts: {} };
    default:
      return state;
  }
}

export function useBuild(initialTier?: BudgetTier) {
  const [state, dispatch] = useReducer(buildReducer, {
    step: 1,
    preferences: { ...defaultPreferences, tier: initialTier || defaultPreferences.tier },
    build: null,
    swappedParts: {},
  });

  // Try to restore from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sa-pcbuilder-state");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.preferences) {
          dispatch({ type: "SET_TIER", tier: parsed.preferences.tier });
          dispatch({ type: "SET_CPU_BRAND", cpuBrand: parsed.preferences.cpuBrand });
          dispatch({ type: "SET_GPU_BRAND", gpuBrand: parsed.preferences.gpuBrand });
          dispatch({ type: "SET_PERIPHERALS", include: parsed.preferences.includePeripherals });
          dispatch({ type: "SET_CASE_SIZE", caseSize: parsed.preferences.caseSize });
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("sa-pcbuilder-state", JSON.stringify({
        preferences: state.preferences,
      }));
    } catch {
      // ignore
    }
  }, [state.preferences]);

  const getAlternativesForCategory = useCallback(
    (category: PartCategory, currentId: string) => {
      return getAlternatives(
        category,
        state.preferences.tier,
        currentId,
        state.preferences.cpuBrand,
        state.preferences.gpuBrand,
        state.preferences.caseSize
      );
    },
    [state.preferences]
  );

  return { state, dispatch, getAlternativesForCategory };
}
