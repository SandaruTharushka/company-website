// =====================================================
//  CLOUD CRAFTERS SOFTWARE - GLOBAL CONFIG
//  Edit this file to update company info, downloads,
//  social links, and product data across the website.
// =====================================================

export const COMPANY = {
  name: "Cloud Crafters Software",
  shortName: "Cloud Crafters",
  tagline: "Crafting Software. Empowering Business.",
  description:
    "Cloud Crafters Software builds premium Windows tools and POS systems for modern businesses — fast, reliable, and beautifully designed.",
  founder: "Sandaru Tharushaka",
  foundedYear: 2024,
  email: "cloudecrafters@outlook.com",
  emailSupport: "sandarutharushaka044@gmail.com",
  phone: "+94 78 814 0255",
  whatsapp: "+94 78 814 0255",
  github: "https://github.com/cloudcrafters",
  website: "https://cloudcrafters.github.io",
  address: "Sri Lanka",
} as const;

export const BRAND = {
  primary: "#2563EB",
  secondary: "#0F172A",
  accent: "#22C55E",
} as const;

export const DOWNLOADS = {
  // Set to a GitHub release tag (e.g. "v1.4.0") — links are built from it.
  // Replace OWNER/REPO with your GitHub username/repository.
  githubOwner: "cloudcrafters",
  githubRepo: "barcode-printer-manager",
  githubPosRepo: "autoserv-pos",
  releaseTag: "latest",

  // Optional: direct installer URLs. If empty, the GitHub release URL is used.
  barcodeInstaller:
    "https://github.com/SandaruTharushka/CC-PRINTER/releases/download/CC_PRINTER/Barcode.Label.Generator.Setup.1.0.0.exe",
  posInstaller:
    "https://github.com/SandaruTharushka/Garage-Management-System-relees-update-version-3.1.0/releases/download/4.0.0/GarageManagementSystem.exe",

  barcodeVersion: "v1.4.0",
  barcodeSize: "12.4 MB",
  barcodeReleased: "2026-01-12",
  posVersion: "v4.0.0",
  posSize: "48.7 MB",
  posReleased: "2026-02-04",
} as const;

export const STATS = [
  { label: "Downloads", value: 125000, suffix: "+" },
  { label: "Happy Customers", value: 8400, suffix: "+" },
  { label: "Supported Printers", value: 60, suffix: "+" },
  { label: "Countries", value: 42, suffix: "" },
];

export const PRINTERS = [
  "Zebra",
  "Xprinter",
  "TSC",
  "Brother",
  "Citizen",
  "Argox",
  "Gprinter",
  "Godex",
  "Honeywell",
  "Bixolon",
];

export const WHY_CHOOSE = [
  { title: "Lightning Fast", desc: "Built with native Windows performance in mind." },
  { title: "Rock Solid", desc: "Tested in thousands of real-world shops and warehouses." },
  { title: "Premium Look", desc: "A modern, glassy interface you'll actually enjoy using." },
  { title: "Easy Setup", desc: "Install, plug in your printer, and you're ready to print." },
  { title: "Free Updates", desc: "New features and printer support added regularly." },
  { title: "Lifetime Support", desc: "We're here for you — before AND after the sale." },
];

export const PRODUCTS = [
  {
    id: "barcode",
    name: "FREE Barcode Printer Manager",
    badge: "FREE FOREVER",
    price: "FREE",
    color: "from-blue-500 to-indigo-600",
    description:
      "Professional barcode and label printing software for Windows. Works with all major thermal printers.",
    features: [
      "1D & 2D Barcode Printing",
      "QR Code Generator",
      "Custom Label Templates",
      "Thermal & USB Printer Support",
      "Live Print Preview",
      "Bulk / Batch Printing",
      "Excel / CSV Import",
      "Free Lifetime Updates",
    ],
    cta: "Download FREE",
    ctaLink: "https://github.com/SandaruTharushka/CC-PRINTER/releases/download/CC_PRINTER/Barcode.Label.Generator.Setup.1.0.0.exe",
  },
  {
    id: "pos",
    name: "Garage Management System PRO",
    badge: "20% OFF THIS MONTH",
    limitedTimeBadge: "LIMITED TIME OFFER",
    originalPrice: "LKR 75,000",
    discount: "20%",
    offerPrice: "LKR 60,000",
    color: "from-emerald-500 to-teal-600",
    description:
      "Complete POS + garage management suite. Billing, inventory, IMEI tracking, service jobs, and powerful reports.",
    features: [
      "Vehicle Service Management",
      "Customer Management",
      "Job Cards",
      "Inventory & Stock",
      "Parts Management",
      "Supplier Management",
      "Expenses & Income",
      "Reports & Analytics",
      "Multi-user Access",
    ],
    cta: "Buy Now",
    ctaLink: "/contact",
    cta2: "Download Trial",
    cta2Link: "https://github.com/SandaruTharushka/Garage-Management-System-relees-update-version-3.1.0/releases/download/4.0.0/GarageManagementSystem.exe",
  },
  {
    id: "retail",
    name: "Phone Repair Management System",
    badge: "20% OFF THIS MONTH",
    limitedTimeBadge: "LIMITED TIME OFFER",
    originalPrice: "LKR 75,000",
    discount: "20%",
    offerPrice: "LKR 60,000",
    color: "from-orange-500 to-pink-600",
    description:
      "A dedicated POS and repair tracking system for mobile and phone repair shops. Manage repair status, IMEI tracking, and technician workflows.",
    features: [
      "Phone Repair Jobs",
      "IMEI Tracking",
      "Device Check-in / Check-out",
      "Repair Status Tracking",
      "Customer Management",
      "Technician Management",
      "Parts Inventory",
      "Repair History",
      "Reports & Analytics",
    ],
    cta: "Buy Now",
    ctaLink: "/contact",
    cta2: "Download Trial",
    cta2Link: "", // Not connected link as requested
  },
];

export const TESTIMONIALS = [
  {
    name: "Ruwan Perera",
    role: "Owner, AutoCare Motors",
    avatar: "RP",
    quote:
      "AutoServ POS completely transformed our garage. The IMEI tracking and service job board alone saved us hours every week.",
  },
  {
    name: "Dilani Fernando",
    role: "Manager, Prime Electronics",
    avatar: "DF",
    quote:
      "The Barcode Printer Manager is honestly the cleanest free tool I've used. Our Xprinter just works — no driver headaches.",
  },
  {
    name: "Mohamed Rizan",
    role: "Wholesale Distributor",
    avatar: "MR",
    quote:
      "Finally a POS that actually fits how we sell. Inventory, suppliers, expenses — all in one place. Highly recommended.",
  },
  {
    name: "Sahan Jayawardena",
    role: "IT Admin, NSB Group",
    avatar: "SJ",
    quote:
      "Cloud Crafters support is unreal. They replied within an hour and pushed a custom fix the same day.",
  },
];

export const FAQS = [
  {
    q: "Is the Barcode Printer Manager really 100% free?",
    a: "Yes. No watermarks, no feature limits, no hidden fees. We earn from our paid POS system, and the free tool is our way of giving back to the community.",
  },
  {
    q: "Which printers are supported?",
    a: "We support most thermal, label, and USB barcode printers including Zebra, Xprinter, TSC, Brother, Citizen, Argox, Gprinter, Godex, Honeywell and Bixolon.",
  },
  {
    q: "How does the 7-day POS trial work?",
    a: "Download and install AutoServ POS PRO, and you'll get full access to every feature for 7 days. No credit card required. After the trial you can purchase a license key.",
  },
  {
    q: "Do I need an internet connection?",
    a: "No. Both products work fully offline. An internet connection is only required for software updates and cloud backups (optional).",
  },
  {
    q: "Can I use it on multiple computers?",
    a: "Yes. A single POS license covers up to 3 computers. Additional seats can be added at a discounted price.",
  },
  {
    q: "Do you offer custom development?",
    a: "Absolutely. We build custom POS workflows, integrations, and reports for businesses in Sri Lanka and abroad. Get in touch via the contact page.",
  },
];

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Features", href: "/features" },
  { label: "Screenshots", href: "/screenshots" },
  { label: "Download", href: "/download" },
  { label: "POS Trial", href: "/pos" },
  { label: "Contact", href: "/contact" },
];

// Helper: build a GitHub release download URL for an asset
export const githubReleaseAssetUrl = (owner: string, repo: string, tag: string, asset: string) =>
  `https://github.com/${owner}/${repo}/releases/${tag === "latest" ? "latest" : `tag/${tag}`}/download/${asset}`;
