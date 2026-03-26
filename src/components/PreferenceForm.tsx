"use client";

import { CpuBrand, GpuBrand, CaseSize } from "@/data/types";

interface PreferenceFormProps {
  cpuBrand: CpuBrand;
  gpuBrand: GpuBrand;
  includePeripherals: boolean;
  caseSize: CaseSize;
  onCpuBrandChange: (brand: CpuBrand) => void;
  onGpuBrandChange: (brand: GpuBrand) => void;
  onPeripheralsChange: (include: boolean) => void;
  onCaseSizeChange: (size: CaseSize) => void;
  onGenerate: () => void;
}

function BrandCard({ label, selected, onClick, color, icon }: {
  label: string; selected: boolean; onClick: () => void; color: string; icon: React.ReactNode;
}) {
  return (
    <button onClick={onClick}
      className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all border ${
        selected
          ? `${color} border-current/30 shadow-lg`
          : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function OptionCard({ label, selected, onClick }: {
  label: string; selected: boolean; onClick: () => void;
}) {
  return (
    <button onClick={onClick}
      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
        selected
          ? "bg-blue-600/10 text-blue-400 border-blue-500/30 shadow-lg shadow-blue-500/10"
          : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600"
      }`}
    >
      {label}
    </button>
  );
}

export default function PreferenceForm({
  cpuBrand, gpuBrand, includePeripherals, caseSize,
  onCpuBrandChange, onGpuBrandChange, onPeripheralsChange, onCaseSizeChange, onGenerate,
}: PreferenceFormProps) {
  return (
    <div className="space-y-7">
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">CPU Preference</label>
        <div className="flex gap-3 flex-wrap">
          <BrandCard label="AMD" selected={cpuBrand === "amd"} onClick={() => onCpuBrandChange("amd")}
            color="bg-red-600/10 text-red-400"
            icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.324 9.137l1.559 3.505h-3.118l1.559-3.505m-.001-1.931L14.049 16.2h2.142l.835-1.958h2.609l.842 1.958h2.191L18.323 7.206zM7.392 16.2h1.946V8.673L7.392 16.2zm-4.68 0h1.95V9.98l2.646 6.22h1.4l2.646-6.324V16.2h1.947V7.207H10.82L8.587 12.79 6.346 7.207H2.712V16.2z"/></svg>}
          />
          <BrandCard label="Intel" selected={cpuBrand === "intel"} onClick={() => onCpuBrandChange("intel")}
            color="bg-blue-600/10 text-blue-400"
            icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity="0.2"/><text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">i</text></svg>}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">GPU Preference</label>
        <div className="flex gap-3 flex-wrap">
          <BrandCard label="NVIDIA" selected={gpuBrand === "nvidia"} onClick={() => onGpuBrandChange("nvidia")}
            color="bg-green-600/10 text-green-400"
            icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8.948 8.798v-1.43c.186-.012.37-.018.556-.018 3.312 0 5.382 2.054 5.382 4.84 0 2.818-2.07 4.872-5.414 4.872-.188 0-.372-.006-.556-.018V8.798h.032zm0-3.588v1.164A7.8 7.8 0 019.504 6.3c4.076 0 7.168 2.784 7.168 6.89 0 4.074-3.092 6.858-7.2 6.858-.188 0-.374-.006-.556-.018v1.164c.186.006.37.012.556.012 4.896 0 9.168-3.396 9.168-8.016S14.4 5.174 9.504 5.174c-.188 0-.372.012-.556.036z"/></svg>}
          />
          <BrandCard label="AMD Radeon" selected={gpuBrand === "amd"} onClick={() => onGpuBrandChange("amd")}
            color="bg-red-600/10 text-red-400"
            icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.324 9.137l1.559 3.505h-3.118l1.559-3.505m-.001-1.931L14.049 16.2h2.142l.835-1.958h2.609l.842 1.958h2.191L18.323 7.206z"/></svg>}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">Case Size</label>
        <div className="flex flex-wrap gap-2.5">
          {(["mini-itx", "micro-atx", "mid-tower", "full-tower"] as CaseSize[]).map((size) => (
            <OptionCard key={size}
              label={size.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("-")}
              selected={caseSize === size} onClick={() => onCaseSizeChange(size)}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">Include Peripherals?</label>
        <div className="flex gap-3">
          <OptionCard label="No, just the PC" selected={!includePeripherals} onClick={() => onPeripheralsChange(false)} />
          <OptionCard label="Yes, add peripherals" selected={includePeripherals} onClick={() => onPeripheralsChange(true)} />
        </div>
        <p className="text-xs text-zinc-600 mt-2">Monitor, keyboard, mouse & headset</p>
      </div>

      <button onClick={onGenerate}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3.5 px-6 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 mt-2"
      >
        <span className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Generate My Build
        </span>
      </button>
    </div>
  );
}
