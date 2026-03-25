import { Part } from "./types";

export const partsCatalog: Part[] = [
  // ============================================================
  // BUDGET TIER (R8,000 – R12,000)
  // ============================================================

  // CPUs - Budget
  { id: "cpu-b-amd-1", category: "cpu", name: "AMD Ryzen 5 5500", searchQuery: "Ryzen 5 5500 processor", estimatedPriceZAR: 2199, tier: "budget", cpuBrand: "amd" },
  { id: "cpu-b-amd-2", category: "cpu", name: "AMD Ryzen 5 4500", searchQuery: "Ryzen 5 4500 processor", estimatedPriceZAR: 1799, tier: "budget", cpuBrand: "amd" },
  { id: "cpu-b-intel-1", category: "cpu", name: "Intel Core i3-12100F", searchQuery: "Intel i3-12100F processor", estimatedPriceZAR: 1999, tier: "budget", cpuBrand: "intel" },
  { id: "cpu-b-intel-2", category: "cpu", name: "Intel Core i3-10105F", searchQuery: "Intel i3-10105F processor", estimatedPriceZAR: 1599, tier: "budget", cpuBrand: "intel" },

  // GPUs - Budget
  { id: "gpu-b-nv-1", category: "gpu", name: "NVIDIA GeForce GTX 1660 Super", searchQuery: "GTX 1660 Super graphics card", estimatedPriceZAR: 4499, tier: "budget", gpuBrand: "nvidia" },
  { id: "gpu-b-nv-2", category: "gpu", name: "NVIDIA GeForce RTX 3050", searchQuery: "RTX 3050 graphics card", estimatedPriceZAR: 4999, tier: "budget", gpuBrand: "nvidia" },
  { id: "gpu-b-amd-1", category: "gpu", name: "AMD Radeon RX 6500 XT", searchQuery: "RX 6500 XT graphics card", estimatedPriceZAR: 3299, tier: "budget", gpuBrand: "amd" },
  { id: "gpu-b-amd-2", category: "gpu", name: "AMD Radeon RX 6600", searchQuery: "RX 6600 graphics card", estimatedPriceZAR: 4799, tier: "budget", gpuBrand: "amd" },

  // Motherboards - Budget
  { id: "mb-b-amd-1", category: "motherboard", name: "MSI B450M PRO-VDH MAX", searchQuery: "MSI B450M PRO-VDH MAX motherboard", estimatedPriceZAR: 1499, tier: "budget", cpuBrand: "amd", caseSizes: ["micro-atx", "mid-tower", "full-tower"] },
  { id: "mb-b-amd-2", category: "motherboard", name: "Gigabyte B550M DS3H", searchQuery: "Gigabyte B550M DS3H motherboard", estimatedPriceZAR: 1799, tier: "budget", cpuBrand: "amd", caseSizes: ["micro-atx", "mid-tower", "full-tower"] },
  { id: "mb-b-intel-1", category: "motherboard", name: "MSI PRO H610M-B", searchQuery: "MSI PRO H610M-B motherboard", estimatedPriceZAR: 1599, tier: "budget", cpuBrand: "intel", caseSizes: ["micro-atx", "mid-tower", "full-tower"] },
  { id: "mb-b-intel-2", category: "motherboard", name: "Gigabyte H610M S2H", searchQuery: "Gigabyte H610M S2H motherboard", estimatedPriceZAR: 1499, tier: "budget", cpuBrand: "intel", caseSizes: ["micro-atx", "mid-tower", "full-tower"] },

  // RAM - Budget
  { id: "ram-b-1", category: "ram", name: "16GB DDR4 3200MHz (2x8GB)", searchQuery: "16GB DDR4 3200MHz desktop ram kit", estimatedPriceZAR: 699, tier: "budget" },
  { id: "ram-b-2", category: "ram", name: "Corsair Vengeance 16GB DDR4 3200MHz", searchQuery: "Corsair Vengeance 16GB DDR4 3200", estimatedPriceZAR: 849, tier: "budget" },

  // Storage - Budget
  { id: "stor-b-1", category: "storage", name: "500GB NVMe SSD", searchQuery: "500GB NVMe M.2 SSD", estimatedPriceZAR: 599, tier: "budget" },
  { id: "stor-b-2", category: "storage", name: "Kingston NV2 500GB NVMe", searchQuery: "Kingston NV2 500GB NVMe SSD", estimatedPriceZAR: 549, tier: "budget" },

  // PSU - Budget
  { id: "psu-b-1", category: "psu", name: "500W 80+ Bronze PSU", searchQuery: "500W 80 Plus Bronze power supply", estimatedPriceZAR: 699, tier: "budget" },
  { id: "psu-b-2", category: "psu", name: "Cooler Master MWE 550W 80+ Bronze", searchQuery: "Cooler Master MWE 550W Bronze PSU", estimatedPriceZAR: 899, tier: "budget" },

  // Case - Budget
  { id: "case-b-mid-1", category: "case", name: "Cougar MX330-G Mid Tower", searchQuery: "Cougar MX330 mid tower case", estimatedPriceZAR: 699, tier: "budget", caseSizes: ["mid-tower"] },
  { id: "case-b-mid-2", category: "case", name: "Deepcool MATREXX 40 Mid Tower", searchQuery: "Deepcool MATREXX 40 mid tower case", estimatedPriceZAR: 599, tier: "budget", caseSizes: ["mid-tower"] },
  { id: "case-b-matx-1", category: "case", name: "Deepcool MATREXX 30 Micro-ATX", searchQuery: "Deepcool MATREXX 30 micro ATX case", estimatedPriceZAR: 499, tier: "budget", caseSizes: ["micro-atx"] },
  { id: "case-b-itx-1", category: "case", name: "Cooler Master Elite 130 Mini-ITX", searchQuery: "Cooler Master Elite 130 Mini ITX case", estimatedPriceZAR: 899, tier: "budget", caseSizes: ["mini-itx"] },
  { id: "case-b-full-1", category: "case", name: "Cougar MX340 Full Tower", searchQuery: "Cougar MX340 full tower case", estimatedPriceZAR: 899, tier: "budget", caseSizes: ["full-tower"] },

  // Cooler - Budget
  { id: "cool-b-1", category: "cooler", name: "AMD/Intel Stock Cooler", searchQuery: "AMD stock CPU cooler", estimatedPriceZAR: 0, tier: "budget" },
  { id: "cool-b-2", category: "cooler", name: "Deepcool GAMMAXX 200T", searchQuery: "Deepcool GAMMAXX 200T CPU cooler", estimatedPriceZAR: 249, tier: "budget" },

  // Peripherals - Budget
  { id: "mon-b-1", category: "monitor", name: "24\" 1080p 75Hz Monitor", searchQuery: "24 inch 1080p 75Hz monitor", estimatedPriceZAR: 2299, tier: "budget" },
  { id: "mon-b-2", category: "monitor", name: "AOC 24G2SE 24\" 1080p 165Hz", searchQuery: "AOC 24G2SE 165Hz monitor", estimatedPriceZAR: 2999, tier: "budget" },
  { id: "kb-b-1", category: "keyboard", name: "Redragon K552 Mechanical Keyboard", searchQuery: "Redragon K552 mechanical keyboard", estimatedPriceZAR: 699, tier: "budget" },
  { id: "mouse-b-1", category: "mouse", name: "Logitech G203 Gaming Mouse", searchQuery: "Logitech G203 gaming mouse", estimatedPriceZAR: 499, tier: "budget" },
  { id: "hs-b-1", category: "headset", name: "HyperX Cloud Stinger", searchQuery: "HyperX Cloud Stinger headset", estimatedPriceZAR: 699, tier: "budget" },

  // ============================================================
  // MID-RANGE TIER (R15,000 – R25,000)
  // ============================================================

  // CPUs - Mid-Range
  { id: "cpu-m-amd-1", category: "cpu", name: "AMD Ryzen 5 5600X", searchQuery: "Ryzen 5 5600X processor", estimatedPriceZAR: 3299, tier: "mid-range", cpuBrand: "amd" },
  { id: "cpu-m-amd-2", category: "cpu", name: "AMD Ryzen 5 7600", searchQuery: "Ryzen 5 7600 processor", estimatedPriceZAR: 4499, tier: "mid-range", cpuBrand: "amd" },
  { id: "cpu-m-intel-1", category: "cpu", name: "Intel Core i5-12400F", searchQuery: "Intel i5-12400F processor", estimatedPriceZAR: 3199, tier: "mid-range", cpuBrand: "intel" },
  { id: "cpu-m-intel-2", category: "cpu", name: "Intel Core i5-13400F", searchQuery: "Intel i5-13400F processor", estimatedPriceZAR: 4299, tier: "mid-range", cpuBrand: "intel" },

  // GPUs - Mid-Range
  { id: "gpu-m-nv-1", category: "gpu", name: "NVIDIA GeForce RTX 4060", searchQuery: "RTX 4060 graphics card", estimatedPriceZAR: 7499, tier: "mid-range", gpuBrand: "nvidia" },
  { id: "gpu-m-nv-2", category: "gpu", name: "NVIDIA GeForce RTX 3060 Ti", searchQuery: "RTX 3060 Ti graphics card", estimatedPriceZAR: 6999, tier: "mid-range", gpuBrand: "nvidia" },
  { id: "gpu-m-amd-1", category: "gpu", name: "AMD Radeon RX 7600", searchQuery: "RX 7600 graphics card", estimatedPriceZAR: 6499, tier: "mid-range", gpuBrand: "amd" },
  { id: "gpu-m-amd-2", category: "gpu", name: "AMD Radeon RX 6700 XT", searchQuery: "RX 6700 XT graphics card", estimatedPriceZAR: 5999, tier: "mid-range", gpuBrand: "amd" },

  // Motherboards - Mid-Range
  { id: "mb-m-amd-1", category: "motherboard", name: "MSI B550-A PRO", searchQuery: "MSI B550-A PRO motherboard", estimatedPriceZAR: 2499, tier: "mid-range", cpuBrand: "amd", caseSizes: ["mid-tower", "full-tower"] },
  { id: "mb-m-amd-2", category: "motherboard", name: "Gigabyte B650M DS3H", searchQuery: "Gigabyte B650M DS3H motherboard", estimatedPriceZAR: 3199, tier: "mid-range", cpuBrand: "amd", caseSizes: ["micro-atx", "mid-tower", "full-tower"] },
  { id: "mb-m-intel-1", category: "motherboard", name: "MSI PRO B660M-A", searchQuery: "MSI PRO B660M-A motherboard", estimatedPriceZAR: 2399, tier: "mid-range", cpuBrand: "intel", caseSizes: ["micro-atx", "mid-tower", "full-tower"] },
  { id: "mb-m-intel-2", category: "motherboard", name: "Gigabyte B760M DS3H", searchQuery: "Gigabyte B760M DS3H motherboard", estimatedPriceZAR: 2699, tier: "mid-range", cpuBrand: "intel", caseSizes: ["micro-atx", "mid-tower", "full-tower"] },

  // RAM - Mid-Range
  { id: "ram-m-1", category: "ram", name: "16GB DDR4 3600MHz (2x8GB)", searchQuery: "16GB DDR4 3600MHz desktop ram kit", estimatedPriceZAR: 999, tier: "mid-range" },
  { id: "ram-m-2", category: "ram", name: "32GB DDR4 3200MHz (2x16GB)", searchQuery: "32GB DDR4 3200MHz desktop ram kit", estimatedPriceZAR: 1499, tier: "mid-range" },
  { id: "ram-m-3", category: "ram", name: "16GB DDR5 5600MHz (2x8GB)", searchQuery: "16GB DDR5 5600MHz desktop ram kit", estimatedPriceZAR: 1299, tier: "mid-range" },

  // Storage - Mid-Range
  { id: "stor-m-1", category: "storage", name: "1TB NVMe SSD", searchQuery: "1TB NVMe M.2 SSD", estimatedPriceZAR: 999, tier: "mid-range" },
  { id: "stor-m-2", category: "storage", name: "Samsung 980 1TB NVMe", searchQuery: "Samsung 980 1TB NVMe SSD", estimatedPriceZAR: 1399, tier: "mid-range" },

  // PSU - Mid-Range
  { id: "psu-m-1", category: "psu", name: "650W 80+ Bronze PSU", searchQuery: "650W 80 Plus Bronze power supply", estimatedPriceZAR: 999, tier: "mid-range" },
  { id: "psu-m-2", category: "psu", name: "Corsair CV650 650W 80+ Bronze", searchQuery: "Corsair CV650 650W power supply", estimatedPriceZAR: 1199, tier: "mid-range" },

  // Case - Mid-Range
  { id: "case-m-mid-1", category: "case", name: "NZXT H5 Flow Mid Tower", searchQuery: "NZXT H5 Flow mid tower case", estimatedPriceZAR: 1599, tier: "mid-range", caseSizes: ["mid-tower"] },
  { id: "case-m-mid-2", category: "case", name: "Corsair 4000D Airflow Mid Tower", searchQuery: "Corsair 4000D Airflow case", estimatedPriceZAR: 1799, tier: "mid-range", caseSizes: ["mid-tower"] },
  { id: "case-m-matx-1", category: "case", name: "Cooler Master MasterBox Q300L", searchQuery: "Cooler Master MasterBox Q300L case", estimatedPriceZAR: 999, tier: "mid-range", caseSizes: ["micro-atx"] },
  { id: "case-m-itx-1", category: "case", name: "Cooler Master NR200 Mini-ITX", searchQuery: "Cooler Master NR200 Mini ITX case", estimatedPriceZAR: 1699, tier: "mid-range", caseSizes: ["mini-itx"] },
  { id: "case-m-full-1", category: "case", name: "Corsair 5000D Airflow Full Tower", searchQuery: "Corsair 5000D Airflow full tower case", estimatedPriceZAR: 2499, tier: "mid-range", caseSizes: ["full-tower"] },

  // Cooler - Mid-Range
  { id: "cool-m-1", category: "cooler", name: "Deepcool AK400", searchQuery: "Deepcool AK400 CPU cooler", estimatedPriceZAR: 499, tier: "mid-range" },
  { id: "cool-m-2", category: "cooler", name: "ID-COOLING SE-224-XT", searchQuery: "ID-COOLING SE-224-XT CPU cooler", estimatedPriceZAR: 449, tier: "mid-range" },

  // Peripherals - Mid-Range
  { id: "mon-m-1", category: "monitor", name: "27\" 1440p 165Hz Monitor", searchQuery: "27 inch 1440p 165Hz gaming monitor", estimatedPriceZAR: 4999, tier: "mid-range" },
  { id: "mon-m-2", category: "monitor", name: "MSI G27CQ4 27\" 1440p 170Hz", searchQuery: "MSI G27CQ4 170Hz monitor", estimatedPriceZAR: 5499, tier: "mid-range" },
  { id: "kb-m-1", category: "keyboard", name: "SteelSeries Apex 3 TKL", searchQuery: "SteelSeries Apex 3 TKL keyboard", estimatedPriceZAR: 999, tier: "mid-range" },
  { id: "mouse-m-1", category: "mouse", name: "Logitech G305 Wireless", searchQuery: "Logitech G305 wireless gaming mouse", estimatedPriceZAR: 999, tier: "mid-range" },
  { id: "hs-m-1", category: "headset", name: "HyperX Cloud II", searchQuery: "HyperX Cloud II headset", estimatedPriceZAR: 1299, tier: "mid-range" },

  // ============================================================
  // HIGH-END TIER (R30,000 – R45,000)
  // ============================================================

  // CPUs - High-End
  { id: "cpu-h-amd-1", category: "cpu", name: "AMD Ryzen 7 7700X", searchQuery: "Ryzen 7 7700X processor", estimatedPriceZAR: 6499, tier: "high-end", cpuBrand: "amd" },
  { id: "cpu-h-amd-2", category: "cpu", name: "AMD Ryzen 7 5800X3D", searchQuery: "Ryzen 7 5800X3D processor", estimatedPriceZAR: 5999, tier: "high-end", cpuBrand: "amd" },
  { id: "cpu-h-intel-1", category: "cpu", name: "Intel Core i7-13700F", searchQuery: "Intel i7-13700F processor", estimatedPriceZAR: 6999, tier: "high-end", cpuBrand: "intel" },
  { id: "cpu-h-intel-2", category: "cpu", name: "Intel Core i7-14700F", searchQuery: "Intel i7-14700F processor", estimatedPriceZAR: 7999, tier: "high-end", cpuBrand: "intel" },

  // GPUs - High-End
  { id: "gpu-h-nv-1", category: "gpu", name: "NVIDIA GeForce RTX 4070", searchQuery: "RTX 4070 graphics card", estimatedPriceZAR: 12999, tier: "high-end", gpuBrand: "nvidia" },
  { id: "gpu-h-nv-2", category: "gpu", name: "NVIDIA GeForce RTX 4070 Super", searchQuery: "RTX 4070 Super graphics card", estimatedPriceZAR: 14499, tier: "high-end", gpuBrand: "nvidia" },
  { id: "gpu-h-amd-1", category: "gpu", name: "AMD Radeon RX 7800 XT", searchQuery: "RX 7800 XT graphics card", estimatedPriceZAR: 11499, tier: "high-end", gpuBrand: "amd" },
  { id: "gpu-h-amd-2", category: "gpu", name: "AMD Radeon RX 7700 XT", searchQuery: "RX 7700 XT graphics card", estimatedPriceZAR: 9999, tier: "high-end", gpuBrand: "amd" },

  // Motherboards - High-End
  { id: "mb-h-amd-1", category: "motherboard", name: "MSI MAG B650 TOMAHAWK WIFI", searchQuery: "MSI MAG B650 TOMAHAWK WIFI motherboard", estimatedPriceZAR: 4999, tier: "high-end", cpuBrand: "amd", caseSizes: ["mid-tower", "full-tower"] },
  { id: "mb-h-amd-2", category: "motherboard", name: "ASUS TUF GAMING B650-PLUS WIFI", searchQuery: "ASUS TUF GAMING B650-PLUS WIFI motherboard", estimatedPriceZAR: 4499, tier: "high-end", cpuBrand: "amd", caseSizes: ["mid-tower", "full-tower"] },
  { id: "mb-h-intel-1", category: "motherboard", name: "MSI MAG B760 TOMAHAWK WIFI", searchQuery: "MSI MAG B760 TOMAHAWK WIFI motherboard", estimatedPriceZAR: 4499, tier: "high-end", cpuBrand: "intel", caseSizes: ["mid-tower", "full-tower"] },
  { id: "mb-h-intel-2", category: "motherboard", name: "ASUS TUF GAMING B760-PLUS WIFI", searchQuery: "ASUS TUF GAMING B760-PLUS WIFI motherboard", estimatedPriceZAR: 4299, tier: "high-end", cpuBrand: "intel", caseSizes: ["mid-tower", "full-tower"] },

  // RAM - High-End
  { id: "ram-h-1", category: "ram", name: "32GB DDR5 5600MHz (2x16GB)", searchQuery: "32GB DDR5 5600MHz desktop ram kit", estimatedPriceZAR: 2499, tier: "high-end" },
  { id: "ram-h-2", category: "ram", name: "32GB DDR5 6000MHz (2x16GB)", searchQuery: "32GB DDR5 6000MHz desktop ram kit", estimatedPriceZAR: 2999, tier: "high-end" },

  // Storage - High-End
  { id: "stor-h-1", category: "storage", name: "1TB Gen4 NVMe SSD", searchQuery: "1TB PCIe Gen4 NVMe SSD", estimatedPriceZAR: 1499, tier: "high-end" },
  { id: "stor-h-2", category: "storage", name: "Samsung 990 EVO 1TB NVMe", searchQuery: "Samsung 990 EVO 1TB NVMe SSD", estimatedPriceZAR: 1999, tier: "high-end" },
  { id: "stor-h-3", category: "storage", name: "2TB NVMe SSD", searchQuery: "2TB NVMe M.2 SSD", estimatedPriceZAR: 2499, tier: "high-end" },

  // PSU - High-End
  { id: "psu-h-1", category: "psu", name: "750W 80+ Gold PSU", searchQuery: "750W 80 Plus Gold power supply", estimatedPriceZAR: 1699, tier: "high-end" },
  { id: "psu-h-2", category: "psu", name: "Corsair RM750 750W 80+ Gold", searchQuery: "Corsair RM750 power supply", estimatedPriceZAR: 2199, tier: "high-end" },

  // Case - High-End
  { id: "case-h-mid-1", category: "case", name: "Lian Li Lancool II Mesh Mid Tower", searchQuery: "Lian Li Lancool II Mesh case", estimatedPriceZAR: 2199, tier: "high-end", caseSizes: ["mid-tower"] },
  { id: "case-h-mid-2", category: "case", name: "Fractal Design North Mid Tower", searchQuery: "Fractal Design North mid tower case", estimatedPriceZAR: 2799, tier: "high-end", caseSizes: ["mid-tower"] },
  { id: "case-h-matx-1", category: "case", name: "Lian Li O11 Air Mini Micro-ATX", searchQuery: "Lian Li O11 Air Mini case", estimatedPriceZAR: 2299, tier: "high-end", caseSizes: ["micro-atx"] },
  { id: "case-h-itx-1", category: "case", name: "Lian Li A4-H2O Mini-ITX", searchQuery: "Lian Li A4 H2O Mini ITX case", estimatedPriceZAR: 2999, tier: "high-end", caseSizes: ["mini-itx"] },
  { id: "case-h-full-1", category: "case", name: "Corsair 7000D Airflow Full Tower", searchQuery: "Corsair 7000D Airflow full tower case", estimatedPriceZAR: 3999, tier: "high-end", caseSizes: ["full-tower"] },

  // Cooler - High-End
  { id: "cool-h-1", category: "cooler", name: "Deepcool AK620", searchQuery: "Deepcool AK620 CPU cooler", estimatedPriceZAR: 999, tier: "high-end" },
  { id: "cool-h-2", category: "cooler", name: "be quiet! Dark Rock 4", searchQuery: "be quiet Dark Rock 4 CPU cooler", estimatedPriceZAR: 1299, tier: "high-end" },
  { id: "cool-h-3", category: "cooler", name: "NZXT Kraken 240 AIO", searchQuery: "NZXT Kraken 240 AIO liquid cooler", estimatedPriceZAR: 2499, tier: "high-end" },

  // Peripherals - High-End
  { id: "mon-h-1", category: "monitor", name: "27\" 1440p 240Hz Monitor", searchQuery: "27 inch 1440p 240Hz gaming monitor", estimatedPriceZAR: 7999, tier: "high-end" },
  { id: "mon-h-2", category: "monitor", name: "Samsung Odyssey G5 27\" 1440p 165Hz", searchQuery: "Samsung Odyssey G5 27 1440p monitor", estimatedPriceZAR: 5999, tier: "high-end" },
  { id: "kb-h-1", category: "keyboard", name: "Corsair K65 Plus Wireless", searchQuery: "Corsair K65 Plus wireless mechanical keyboard", estimatedPriceZAR: 2499, tier: "high-end" },
  { id: "mouse-h-1", category: "mouse", name: "Logitech G Pro X Superlight", searchQuery: "Logitech G Pro X Superlight mouse", estimatedPriceZAR: 2299, tier: "high-end" },
  { id: "hs-h-1", category: "headset", name: "SteelSeries Arctis Nova 7", searchQuery: "SteelSeries Arctis Nova 7 headset", estimatedPriceZAR: 3499, tier: "high-end" },

  // ============================================================
  // PREMIUM TIER (R50,000+)
  // ============================================================

  // CPUs - Premium
  { id: "cpu-p-amd-1", category: "cpu", name: "AMD Ryzen 9 7900X", searchQuery: "Ryzen 9 7900X processor", estimatedPriceZAR: 9999, tier: "premium", cpuBrand: "amd" },
  { id: "cpu-p-amd-2", category: "cpu", name: "AMD Ryzen 9 7950X", searchQuery: "Ryzen 9 7950X processor", estimatedPriceZAR: 13999, tier: "premium", cpuBrand: "amd" },
  { id: "cpu-p-intel-1", category: "cpu", name: "Intel Core i9-14900K", searchQuery: "Intel i9-14900K processor", estimatedPriceZAR: 11999, tier: "premium", cpuBrand: "intel" },
  { id: "cpu-p-intel-2", category: "cpu", name: "Intel Core i9-13900K", searchQuery: "Intel i9-13900K processor", estimatedPriceZAR: 10999, tier: "premium", cpuBrand: "intel" },

  // GPUs - Premium
  { id: "gpu-p-nv-1", category: "gpu", name: "NVIDIA GeForce RTX 4080 Super", searchQuery: "RTX 4080 Super graphics card", estimatedPriceZAR: 24999, tier: "premium", gpuBrand: "nvidia" },
  { id: "gpu-p-nv-2", category: "gpu", name: "NVIDIA GeForce RTX 4090", searchQuery: "RTX 4090 graphics card", estimatedPriceZAR: 39999, tier: "premium", gpuBrand: "nvidia" },
  { id: "gpu-p-amd-1", category: "gpu", name: "AMD Radeon RX 7900 XTX", searchQuery: "RX 7900 XTX graphics card", estimatedPriceZAR: 22999, tier: "premium", gpuBrand: "amd" },
  { id: "gpu-p-amd-2", category: "gpu", name: "AMD Radeon RX 7900 XT", searchQuery: "RX 7900 XT graphics card", estimatedPriceZAR: 18999, tier: "premium", gpuBrand: "amd" },

  // Motherboards - Premium
  { id: "mb-p-amd-1", category: "motherboard", name: "MSI MEG X670E ACE", searchQuery: "MSI MEG X670E ACE motherboard", estimatedPriceZAR: 9999, tier: "premium", cpuBrand: "amd", caseSizes: ["mid-tower", "full-tower"] },
  { id: "mb-p-amd-2", category: "motherboard", name: "ASUS ROG STRIX X670E-E GAMING WIFI", searchQuery: "ASUS ROG STRIX X670E-E GAMING WIFI motherboard", estimatedPriceZAR: 8499, tier: "premium", cpuBrand: "amd", caseSizes: ["mid-tower", "full-tower"] },
  { id: "mb-p-intel-1", category: "motherboard", name: "MSI MEG Z790 ACE", searchQuery: "MSI MEG Z790 ACE motherboard", estimatedPriceZAR: 9499, tier: "premium", cpuBrand: "intel", caseSizes: ["mid-tower", "full-tower"] },
  { id: "mb-p-intel-2", category: "motherboard", name: "ASUS ROG STRIX Z790-E GAMING WIFI", searchQuery: "ASUS ROG STRIX Z790-E GAMING WIFI motherboard", estimatedPriceZAR: 7999, tier: "premium", cpuBrand: "intel", caseSizes: ["mid-tower", "full-tower"] },

  // RAM - Premium
  { id: "ram-p-1", category: "ram", name: "32GB DDR5 6400MHz (2x16GB)", searchQuery: "32GB DDR5 6400MHz desktop ram kit", estimatedPriceZAR: 3499, tier: "premium" },
  { id: "ram-p-2", category: "ram", name: "64GB DDR5 5600MHz (2x32GB)", searchQuery: "64GB DDR5 5600MHz desktop ram kit", estimatedPriceZAR: 4999, tier: "premium" },

  // Storage - Premium
  { id: "stor-p-1", category: "storage", name: "2TB Gen4 NVMe SSD", searchQuery: "2TB PCIe Gen4 NVMe SSD", estimatedPriceZAR: 2999, tier: "premium" },
  { id: "stor-p-2", category: "storage", name: "Samsung 990 Pro 2TB NVMe", searchQuery: "Samsung 990 Pro 2TB NVMe SSD", estimatedPriceZAR: 3999, tier: "premium" },

  // PSU - Premium
  { id: "psu-p-1", category: "psu", name: "850W 80+ Gold Modular PSU", searchQuery: "850W 80 Plus Gold modular power supply", estimatedPriceZAR: 2499, tier: "premium" },
  { id: "psu-p-2", category: "psu", name: "Corsair RM1000e 1000W 80+ Gold", searchQuery: "Corsair RM1000e 1000W power supply", estimatedPriceZAR: 3499, tier: "premium" },

  // Case - Premium
  { id: "case-p-mid-1", category: "case", name: "Lian Li O11 Dynamic EVO Mid Tower", searchQuery: "Lian Li O11 Dynamic EVO case", estimatedPriceZAR: 3499, tier: "premium", caseSizes: ["mid-tower"] },
  { id: "case-p-mid-2", category: "case", name: "HYTE Y60 Mid Tower", searchQuery: "HYTE Y60 mid tower case", estimatedPriceZAR: 3999, tier: "premium", caseSizes: ["mid-tower"] },
  { id: "case-p-matx-1", category: "case", name: "Lian Li O11 Dynamic Mini", searchQuery: "Lian Li O11 Dynamic Mini case", estimatedPriceZAR: 2999, tier: "premium", caseSizes: ["micro-atx"] },
  { id: "case-p-itx-1", category: "case", name: "NCASE M1 Mini-ITX", searchQuery: "NCASE M1 Mini ITX case", estimatedPriceZAR: 3999, tier: "premium", caseSizes: ["mini-itx"] },
  { id: "case-p-full-1", category: "case", name: "Corsair 9000D Airflow Full Tower", searchQuery: "Corsair 9000D full tower case", estimatedPriceZAR: 5999, tier: "premium", caseSizes: ["full-tower"] },

  // Cooler - Premium
  { id: "cool-p-1", category: "cooler", name: "NZXT Kraken 360 AIO", searchQuery: "NZXT Kraken 360 AIO liquid cooler", estimatedPriceZAR: 3999, tier: "premium" },
  { id: "cool-p-2", category: "cooler", name: "Corsair iCUE H150i Elite 360mm AIO", searchQuery: "Corsair iCUE H150i Elite 360mm AIO", estimatedPriceZAR: 4499, tier: "premium" },
  { id: "cool-p-3", category: "cooler", name: "Noctua NH-D15", searchQuery: "Noctua NH-D15 CPU cooler", estimatedPriceZAR: 2499, tier: "premium" },

  // Peripherals - Premium
  { id: "mon-p-1", category: "monitor", name: "32\" 4K 144Hz Monitor", searchQuery: "32 inch 4K 144Hz gaming monitor", estimatedPriceZAR: 12999, tier: "premium" },
  { id: "mon-p-2", category: "monitor", name: "Samsung Odyssey Neo G8 32\" 4K 240Hz", searchQuery: "Samsung Odyssey Neo G8 32 4K monitor", estimatedPriceZAR: 19999, tier: "premium" },
  { id: "kb-p-1", category: "keyboard", name: "Razer Huntsman V3 Pro", searchQuery: "Razer Huntsman V3 Pro keyboard", estimatedPriceZAR: 4999, tier: "premium" },
  { id: "mouse-p-1", category: "mouse", name: "Razer DeathAdder V3 Pro", searchQuery: "Razer DeathAdder V3 Pro wireless mouse", estimatedPriceZAR: 2999, tier: "premium" },
  { id: "hs-p-1", category: "headset", name: "SteelSeries Arctis Nova Pro Wireless", searchQuery: "SteelSeries Arctis Nova Pro Wireless headset", estimatedPriceZAR: 7999, tier: "premium" },
];
