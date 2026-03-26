"use client";

import { CompatibilityIssue } from "@/data/types";

interface CompatibilityCheckerProps {
  issues: CompatibilityIssue[];
}

const severityConfig = {
  error: {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    text: "text-red-400",
    label: "Error",
  },
  warning: {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
    label: "Warning",
  },
  info: {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    label: "OK",
  },
};

export default function CompatibilityChecker({ issues }: CompatibilityCheckerProps) {
  const hasErrors = issues.some((i) => i.severity === "error");
  const hasWarnings = issues.some((i) => i.severity === "warning");
  const allGood = !hasErrors && !hasWarnings;

  return (
    <div className={`rounded-xl border p-4 ${
      hasErrors ? "border-red-500/30 bg-red-500/5" :
      hasWarnings ? "border-yellow-500/30 bg-yellow-500/5" :
      "border-green-500/30 bg-green-500/5"
    }`}>
      <div className="flex items-center gap-2 mb-3">
        <svg className={`w-5 h-5 ${hasErrors ? "text-red-400" : hasWarnings ? "text-yellow-400" : "text-green-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <h3 className={`text-sm font-bold uppercase tracking-wider ${
          hasErrors ? "text-red-400" : hasWarnings ? "text-yellow-400" : "text-green-400"
        }`}>
          Compatibility {allGood ? "✓ All Clear" : hasErrors ? "Issues Found" : "Warnings"}
        </h3>
      </div>
      <div className="space-y-2">
        {issues.map((issue, idx) => {
          const config = severityConfig[issue.severity];
          return (
            <div
              key={idx}
              className={`flex items-start gap-2.5 px-3 py-2 rounded-lg ${config.bg} border ${config.border}`}
            >
              <span className={`${config.text} shrink-0 mt-0.5`}>{config.icon}</span>
              <div className="min-w-0">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${config.text}`}>
                  {config.label}
                </span>
                <p className="text-sm text-zinc-300 mt-0.5">{issue.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
