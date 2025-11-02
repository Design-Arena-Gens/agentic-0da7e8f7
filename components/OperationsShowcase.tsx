import { MapIcon, ShieldCheckIcon, SignalIcon } from "@heroicons/react/24/outline";

const fleet = [
  { label: "Clinical sedans", count: 620 },
  { label: "Wheelchair vans", count: 420 },
  { label: "Critical care units", count: 110 },
  { label: "Telehealth pods", count: 52 }
];

const mapDots = [
  { id: "nyc", top: "28%", left: "64%", status: "active" },
  { id: "la", top: "48%", left: "12%", status: "standby" },
  { id: "chi", top: "22%", left: "53%", status: "active" },
  { id: "mia", top: "68%", left: "70%", status: "dispatch" }
];

export default function OperationsShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 rounded-3xl border border-white/10 bg-slate-950/60 p-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="tag">Command center</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            National dispatch orchestrated from our 24/7 clinical command hub
          </h2>
          <p className="mt-4 text-base text-slate-200">
            Each ride is monitored by registered nurses in our command center. They synchronize
            wearable data, vehicle telemetry, and provider schedules to maintain SLA compliance across
            every market.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/8 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <MapIcon className="h-5 w-5 text-primary-300" />
                <span>Dynamic zone balancing with surge coverage</span>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Dispatch AI predicts demand four hours ahead, repositioning providers before spikes occur.
              </p>
            </div>
            <div className="rounded-3xl border border-white/8 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <ShieldCheckIcon className="h-5 w-5 text-primary-300" />
                <span>HIPAA audit trails baked into every hand-off</span>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Encrypted ride reports connect to clinical documentation, ensuring reimbursement
                readiness.
              </p>
            </div>
            <div className="rounded-3xl border border-white/8 bg-white/5 p-4 md:col-span-2">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <SignalIcon className="h-5 w-5 text-primary-300" />
                <span>99.98% uptime across APIs feeding EMRs, payers, and analytics</span>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Built on FHIR-compliant infrastructure with single sign-on for care teams and
                dispatchers.
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-200 sm:grid-cols-4">
            {fleet.map((vehicle) => (
              <div key={vehicle.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xl font-semibold text-white">{vehicle.count}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{vehicle.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary-500/20 via-slate-900 to-slate-950 p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_55%)]" />
          <div className="relative h-full w-full rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
              <span>Live fleet view</span>
              <span>Secure | SOC 2 Type II</span>
            </div>
            <div className="mt-4 h-64 w-full rounded-2xl border border-white/5 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-4">
              <div className="relative h-full w-full rounded-xl border border-white/5 bg-slate-950/80">
                {mapDots.map((dot) => (
                  <span
                    key={dot.id}
                    className={`absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                      dot.status === "active"
                        ? "bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]"
                        : dot.status === "dispatch"
                        ? "bg-primary-400 shadow-[0_0_18px_rgba(59,130,246,0.8)]"
                        : "bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.8)]"
                    }`}
                    style={{ top: dot.top, left: dot.left }}
                  />
                ))}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 600 320" className="h-full w-full fill-none stroke-slate-500/60">
                    <path d="M20 220 C120 260 400 280 560 210" strokeWidth="0.6" />
                    <path d="M30 180 C180 120 380 160 540 110" strokeWidth="0.4" />
                    <path d="M40 70 C260 60 420 40 560 80" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-200">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                <p className="text-lg font-semibold text-white">342</p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-slate-400">Rides active</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                <p className="text-lg font-semibold text-white">24</p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-slate-400">ICU units</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                <p className="text-lg font-semibold text-white">97%</p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-slate-400">On-time SLA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
