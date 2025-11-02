import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    items: [
      { label: "About CareRide", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Clinical leadership", href: "#" },
      { label: "Press kit", href: "#" }
    ]
  },
  {
    title: "Platform",
    items: [
      { label: "Dispatch AI", href: "#" },
      { label: "Compliance & security", href: "#" },
      { label: "EMR integrations", href: "#" },
      { label: "Payer partnerships", href: "#" }
    ]
  },
  {
    title: "Resources",
    items: [
      { label: "Case studies", href: "#" },
      { label: "Clinical protocols", href: "#" },
      { label: "Implementation guide", href: "#" },
      { label: "API docs", href: "#" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500/20 text-lg font-semibold text-primary-200 shadow-inner">
                CR
              </span>
              <span className="text-lg font-semibold tracking-tight">CareRide</span>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Orchestrating clinician-powered rides, telehealth, and care coordination so patients never
              miss the moments that matter.
            </p>
            <div className="mt-6 rounded-3xl border border-primary-400/20 bg-primary-500/10 px-4 py-3 text-xs text-primary-100">
              <p className="uppercase tracking-wide">Care coordination hotline</p>
              <p className="mt-1 text-lg font-semibold text-white">1-800-CARE-RIDE</p>
            </div>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CareRide Technologies. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              HIPAA compliance
            </Link>
            <Link href="#" className="hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
