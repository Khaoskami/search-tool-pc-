import { Part, CompatibilityIssue, CaseSize } from "@/data/types";

export function checkCompatibility(parts: Part[], caseSize: CaseSize): CompatibilityIssue[] {
  const issues: CompatibilityIssue[] = [];
  const partMap: Record<string, Part> = {};
  for (const p of parts) partMap[p.category] = p;

  const cpu = partMap["cpu"];
  const motherboard = partMap["motherboard"];
  const gpu = partMap["gpu"];
  const ram = partMap["ram"];
  const psu = partMap["psu"];
  const pcCase = partMap["case"];
  const cooler = partMap["cooler"];

  // CPU + Motherboard socket compatibility
  if (cpu && motherboard) {
    if (cpu.cpuBrand && motherboard.cpuBrand && cpu.cpuBrand !== motherboard.cpuBrand) {
      issues.push({
        severity: "error",
        message: `CPU (${cpu.cpuBrand.toUpperCase()}) is not compatible with motherboard (${motherboard.cpuBrand.toUpperCase()} socket). They must use the same platform.`,
        parts: [cpu.id, motherboard.id],
      });
    }
  }

  // Motherboard + Case form factor
  if (motherboard && pcCase) {
    if (motherboard.caseSizes && pcCase.caseSizes) {
      const moboFits = motherboard.caseSizes.some((s) => pcCase.caseSizes!.includes(s));
      if (!moboFits) {
        issues.push({
          severity: "error",
          message: `Motherboard form factor doesn't fit the selected case (${caseSize}). Check form factor compatibility.`,
          parts: [motherboard.id, pcCase.id],
        });
      }
    }
  }

  // PSU wattage warnings based on GPU tier
  if (psu && gpu) {
    const psuWatts = parseInt(psu.name.match(/(\d+)W/)?.[1] || "0");
    const isHighEnd = gpu.name.match(/4070|4080|4090|7800|7900|3070|3080|3090/);
    const isMidRange = gpu.name.match(/4060|3060|7600|6700|6600/);

    if (isHighEnd && psuWatts < 700) {
      issues.push({
        severity: "warning",
        message: `PSU (${psuWatts}W) may be insufficient for ${gpu.name}. Consider 750W+ for high-end GPUs.`,
        parts: [psu.id, gpu.id],
      });
    } else if (isMidRange && psuWatts < 500) {
      issues.push({
        severity: "warning",
        message: `PSU (${psuWatts}W) may be tight for ${gpu.name}. Consider 550W+ for mid-range GPUs.`,
        parts: [psu.id, gpu.id],
      });
    }
  }

  // DDR4 vs DDR5 with motherboard generation
  if (ram && motherboard) {
    const isDDR5Ram = ram.name.toLowerCase().includes("ddr5");
    const isDDR4Ram = ram.name.toLowerCase().includes("ddr4");
    const isNewPlatform = motherboard.name.match(/B650|B660|B760|X670|Z690|Z790|B550/i);
    const isOldPlatform = motherboard.name.match(/B450|H610|H510|B460/i);

    if (isDDR5Ram && isOldPlatform) {
      issues.push({
        severity: "error",
        message: `DDR5 RAM is not compatible with ${motherboard.name}. This motherboard only supports DDR4.`,
        parts: [ram.id, motherboard.id],
      });
    }
    if (isDDR4Ram && motherboard.name.match(/X670|B650M.*DDR5/i)) {
      issues.push({
        severity: "warning",
        message: `Check if ${motherboard.name} supports DDR4. Some AM5 boards are DDR5 only.`,
        parts: [ram.id, motherboard.id],
      });
    }
  }

  // Cooler compatibility note
  if (cooler && cpu) {
    if (cooler.estimatedPriceZAR === 0) {
      const isHighTDP = cpu.name.match(/7700|7900|7950|i7-13|i7-14|i9/);
      if (isHighTDP) {
        issues.push({
          severity: "warning",
          message: `Stock cooler may not be sufficient for ${cpu.name}. Consider an aftermarket cooler for better thermals.`,
          parts: [cooler.id, cpu.id],
        });
      }
    }
  }

  // Case size warning for large GPUs
  if (pcCase && gpu) {
    const isLargeGPU = gpu.name.match(/4080|4090|7900/);
    if (isLargeGPU && caseSize === "mini-itx") {
      issues.push({
        severity: "warning",
        message: `${gpu.name} is a large GPU that may not fit in a Mini-ITX case. Verify GPU length clearance.`,
        parts: [pcCase.id, gpu.id],
      });
    }
  }

  // All good
  if (issues.length === 0) {
    issues.push({
      severity: "info",
      message: "All components appear compatible! No issues detected.",
      parts: [],
    });
  }

  return issues;
}
