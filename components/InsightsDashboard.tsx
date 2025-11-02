import { formatCurrency } from "@/lib/utils";

const quarterlyMetrics = [
  { label: "Readmission reductions", value: "32%", change: "+8.4%", positive: true },
  { label: "Value-based reimbursements", value: formatCurrency(12_400_000), change: "+$1.4M", positive: true },
  { label: "Ride-to-care gap", value: "4.7%", change: "-2.1%", positive: true },
  { label: "Average LOS reduction", value: "1.6 days", change: "-0.4", positive: true }
];

const carePaths = [
  {
    id: "cardio",
    title: "Cardiology discharge",
    progression: 86,
    patients: 420,
    savings: formatCurrency(1_200_000)
  },
  {
    id: "oncology",
    title: "Oncology infusion",
    progression: 91,
    patients: 612,
    savings: formatCurrency(1_960_000)
  },
  {
    id: "renal",
    title: "Renal dialysis",
    progression: 78,
    patients: 344,
    savings: formatCurrency(620_000)
  }
];

export default function InsightsDashboard() {
  return (
    <section id="insights" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="tag">Command center analytics</span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Real-time reimbursement and clinical performance telemetry
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-200">
              Operational leaders customize dashboards across payer lines, service areas, and acuity
              bands. Data ingestion from EMRs, payers, and IoT devices unlocks predictive staffing and
              proactive patient outreach.
            </p>
          </div>
          <div className="rounded-3xl border border-primary-300/20 bg-primary-400/10 px-6 py-4 text-sm text-primary-100">
            <p className="text-xs uppercase tracking-wide">Value-based bonus unlocked</p>
            <p className="text-2xl font-semibold">{formatCurrency(3_200_000)}</p>
            <p className="mt-1 text-xs text-primary-200/80">Quarter-to-date vs. baseline contracts</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {quarterlyMetrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-white/8 bg-slate-950/60 p-5">
                <p className="text-xs uppercase tracking-wide text-slate-400">{metric.label}</p>
                <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
                <p
                  className={`mt-2 text-xs font-semibold uppercase tracking-wide ${
                    metric.positive ? "text-emerald-300" : "text-rose-300"
                  }`}
                >
                  {metric.change} vs. last quarter
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/8 bg-slate-950/60 p-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">Care path velocity</p>
            <div className="mt-3 space-y-4">
              {carePaths.map((path) => (
                <div key={path.id} className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">{path.title}</p>
                    <p>{path.progression}%</p>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-primary-400 to-primary-600"
                      style={{ width: `${path.progression}%` }}
                    />
                  </div>
                  <dl className="mt-3 flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
                    <div>
                      <dt>Patients</dt>
                      <dd className="text-slate-200">{path.patients}</dd>
                    </div>
                    <div className="text-right">
                      <dt>Savings</dt>
                      <dd className="text-primary-200">{path.savings}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
