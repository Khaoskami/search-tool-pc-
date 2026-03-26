import { PartCategory } from "@/data/types";

interface CategoryIconProps {
  category: PartCategory;
  className?: string;
}

export default function CategoryIcon({ category, className = "w-5 h-5" }: CategoryIconProps) {
  const icons: Record<PartCategory, JSX.Element> = {
    cpu: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <rect x="9" y="9" width="6" height="6" rx="0.5" fill="currentColor" opacity="0.3" />
        <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" strokeLinecap="round" />
      </svg>
    ),
    gpu: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="1" y="5" width="22" height="14" rx="2" />
        <circle cx="7" cy="12" r="3" />
        <circle cx="16" cy="12" r="3" />
        <path d="M1 9h22" opacity="0.3" />
      </svg>
    ),
    motherboard: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="20" rx="1" />
        <rect x="5" y="5" width="6" height="6" rx="0.5" />
        <rect x="14" y="5" width="5" height="3" rx="0.5" fill="currentColor" opacity="0.3" />
        <rect x="14" y="11" width="5" height="3" rx="0.5" fill="currentColor" opacity="0.3" />
        <path d="M5 15h14M5 18h14" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    ram: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="6" width="20" height="12" rx="1" />
        <rect x="5" y="9" width="3" height="6" rx="0.5" fill="currentColor" opacity="0.3" />
        <rect x="10" y="9" width="3" height="6" rx="0.5" fill="currentColor" opacity="0.3" />
        <rect x="15" y="9" width="3" height="6" rx="0.5" fill="currentColor" opacity="0.3" />
        <path d="M11 18v2M13 18v2M7 18v2M17 18v2" strokeLinecap="round" />
      </svg>
    ),
    storage: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 15h18" />
        <circle cx="7" cy="19" r="0.5" fill="currentColor" />
        <rect x="6" y="7" width="12" height="5" rx="1" fill="currentColor" opacity="0.15" />
      </svg>
    ),
    psu: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 8v8M8 12h8" strokeLinecap="round" opacity="0.5" />
        <path d="M10 2l2 2 2-2" strokeLinecap="round" />
      </svg>
    ),
    case: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="1" width="16" height="22" rx="2" />
        <circle cx="12" cy="6" r="2" />
        <rect x="7" y="11" width="10" height="5" rx="1" fill="currentColor" opacity="0.15" />
        <line x1="12" y1="20" x2="12" y2="20" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
    cooler: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M5.6 18.4l2.2-2.2M16.2 7.8l2.2-2.2" strokeLinecap="round" />
      </svg>
    ),
    monitor: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
        <rect x="4" y="5" width="16" height="10" rx="1" fill="currentColor" opacity="0.1" />
      </svg>
    ),
    keyboard: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="1" y="7" width="22" height="10" rx="2" />
        <path d="M5 11h2M9 11h2M13 11h2M17 11h2M7 14h10" strokeLinecap="round" strokeWidth="1" />
      </svg>
    ),
    mouse: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="6" y="2" width="12" height="20" rx="6" />
        <path d="M12 2v7" />
        <path d="M6 9h12" />
      </svg>
    ),
    headset: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 18V12a9 9 0 0118 0v6" />
        <rect x="1" y="14" width="4" height="6" rx="1" />
        <rect x="19" y="14" width="4" height="6" rx="1" />
        <path d="M5 20a2 2 0 002 2h2" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[category] || null;
}
