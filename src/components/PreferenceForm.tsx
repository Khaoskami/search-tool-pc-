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

function RadioOption({ label, value, selected, onChange, color }: {
  label: string; value: string; selected: boolean; onChange: () => void; color?: string;
}) {
  return (
    <button
      onClick={onChange}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        selected
          ? `${color || "bg-blue-600"} text-white`
          : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
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
    <div className="space-y-6">
      {/* CPU Brand */}
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">CPU Preference</label>
        <div className="flex gap-3">
          <RadioOption label="AMD" value="amd" selected={cpuBrand === "amd"} onChange={() => onCpuBrandChange("amd")} color="bg-red-600" />
          <RadioOption label="Intel" value="intel" selected={cpuBrand === "intel"} onChange={() => onCpuBrandChange("intel")} color="bg-blue-600" />
        </div>
      </div>

      {/* GPU Brand */}
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">GPU Preference</label>
        <div className="flex gap-3">
          <RadioOption label="NVIDIA" value="nvidia" selected={gpuBrand === "nvidia"} onChange={() => onGpuBrandChange("nvidia")} color="bg-green-700" />
          <RadioOption label="AMD" value="amd" selected={gpuBrand === "amd"} onChange={() => onGpuBrandChange("amd")} color="bg-red-600" />
        </div>
      </div>

      {/* Case Size */}
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">Case Size</label>
        <div className="flex flex-wrap gap-3">
          {(["mini-itx", "micro-atx", "mid-tower", "full-tower"] as CaseSize[]).map((size) => (
            <RadioOption
              key={size}
              label={size.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("-")}
              value={size}
              selected={caseSize === size}
              onChange={() => onCaseSizeChange(size)}
            />
          ))}
        </div>
      </div>

      {/* Peripherals */}
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">Include Peripherals?</label>
        <div className="flex gap-3">
          <RadioOption label="No, just the PC" value="false" selected={!includePeripherals} onChange={() => onPeripheralsChange(false)} />
          <RadioOption label="Yes, add peripherals" value="true" selected={includePeripherals} onChange={() => onPeripheralsChange(true)} />
        </div>
        <p className="text-xs text-zinc-500 mt-2">Monitor, keyboard, mouse & headset</p>
      </div>

      {/* Generate Button */}
      <button
        onClick={onGenerate}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-xl font-semibold text-lg transition-colors mt-4"
      >
        Generate My Build
      </button>
    </div>
  );
}
