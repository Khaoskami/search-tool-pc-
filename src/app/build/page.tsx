"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { BudgetTier } from "@/data/types";
import { useBuild } from "@/hooks/useBuild";
import BudgetSelector from "@/components/BudgetSelector";
import PreferenceForm from "@/components/PreferenceForm";
import PartsTable from "@/components/PartsTable";
import PriceSummary from "@/components/PriceSummary";
import BuyInOnePlace from "@/components/BuyInOnePlace";

function BuildPageContent() {
  const searchParams = useSearchParams();
  const initialTier = (searchParams.get("tier") as BudgetTier) || undefined;
  const { state, dispatch, getAlternativesForCategory } = useBuild(initialTier);

  const steps = [
    { num: 1, label: "Configure" },
    { num: 2, label: "Review Parts" },
    { num: 3, label: "Buy" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center gap-2">
            <button
              onClick={() => {
                if (s.num === 1) dispatch({ type: "GO_TO_STEP", step: 1 });
                if (s.num === 2 && state.build) dispatch({ type: "GO_TO_STEP", step: 2 });
                if (s.num === 3 && state.build) dispatch({ type: "GO_TO_STEP", step: 3 });
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                state.step === s.num
                  ? "bg-blue-600 text-white"
                  : state.step > s.num
                  ? "bg-blue-600/20 text-blue-400 cursor-pointer"
                  : "bg-zinc-800 text-zinc-500"
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-xs">
                {state.step > s.num ? "✓" : s.num}
              </span>
              <span className="hidden sm:inline">{s.label}</span>
            </button>
            {i < steps.length - 1 && (
              <div className={`w-8 h-0.5 ${state.step > s.num ? "bg-blue-500" : "bg-zinc-700"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Configure */}
      {state.step === 1 && (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Select Your Budget</h2>
            <p className="text-zinc-400 text-sm">Choose how much you want to spend on your build</p>
          </div>
          <BudgetSelector
            selected={state.preferences.tier}
            onSelect={(tier) => dispatch({ type: "SET_TIER", tier })}
          />
          <div className="border-t border-zinc-800 pt-8">
            <h2 className="text-2xl font-bold text-white mb-2">Set Your Preferences</h2>
            <p className="text-zinc-400 text-sm mb-6">Customize your build to match your needs</p>
            <PreferenceForm
              cpuBrand={state.preferences.cpuBrand}
              gpuBrand={state.preferences.gpuBrand}
              includePeripherals={state.preferences.includePeripherals}
              caseSize={state.preferences.caseSize}
              onCpuBrandChange={(brand) => dispatch({ type: "SET_CPU_BRAND", cpuBrand: brand })}
              onGpuBrandChange={(brand) => dispatch({ type: "SET_GPU_BRAND", gpuBrand: brand })}
              onPeripheralsChange={(include) => dispatch({ type: "SET_PERIPHERALS", include })}
              onCaseSizeChange={(size) => dispatch({ type: "SET_CASE_SIZE", caseSize: size })}
              onGenerate={() => dispatch({ type: "GENERATE_BUILD" })}
            />
          </div>
        </div>
      )}

      {/* Step 2: Review Parts */}
      {state.step === 2 && state.build && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Your Build</h2>
              <p className="text-sm text-zinc-400">
                {state.preferences.tier.charAt(0).toUpperCase() + state.preferences.tier.slice(1)} tier
                &bull; {state.preferences.cpuBrand.toUpperCase()} CPU
                &bull; {state.preferences.gpuBrand.toUpperCase()} GPU
              </p>
            </div>
            <button
              onClick={() => dispatch({ type: "GO_TO_STEP", step: 1 })}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Change preferences
            </button>
          </div>

          <PriceSummary total={state.build.totalEstimatedZAR} partCount={state.build.parts.length} />

          <PartsTable
            parts={state.build.parts}
            removedParts={state.removedParts}
            getAlternatives={getAlternativesForCategory}
            onSwap={(category, part) => dispatch({ type: "SWAP_PART", category, part })}
            onRemove={(category) => dispatch({ type: "REMOVE_PART", category })}
            onRestore={(category) => dispatch({ type: "RESTORE_PART", category })}
          />

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => dispatch({ type: "GO_TO_STEP", step: 1 })}
              className="flex-1 py-3 px-6 rounded-xl font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              Back to Config
            </button>
            <button
              onClick={() => dispatch({ type: "GO_TO_STEP", step: 3 })}
              className="flex-1 py-3 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              Ready to Buy
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Buy */}
      {state.step === 3 && state.build && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Time to Buy</h2>
              <p className="text-sm text-zinc-400">
                Find the best place to purchase your {state.build.parts.length} components
              </p>
            </div>
            <button
              onClick={() => dispatch({ type: "GO_TO_STEP", step: 2 })}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Back to parts
            </button>
          </div>

          <PriceSummary total={state.build.totalEstimatedZAR} partCount={state.build.parts.length} />

          <BuyInOnePlace parts={state.build.parts} />

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => dispatch({ type: "GO_TO_STEP", step: 2 })}
              className="flex-1 py-3 px-6 rounded-xl font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              Back to Parts
            </button>
            <button
              onClick={() => dispatch({ type: "RESET" })}
              className="flex-1 py-3 px-6 rounded-xl font-medium text-zinc-300 border border-zinc-700 hover:bg-zinc-800 transition-colors"
            >
              Start New Build
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BuildPage() {
  return (
    <Suspense fallback={
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-zinc-400">
        Loading builder...
      </div>
    }>
      <BuildPageContent />
    </Suspense>
  );
}
