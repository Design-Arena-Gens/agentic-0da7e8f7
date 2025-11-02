import { classNames } from "@/lib/utils";

const metros = [
  { region: "New York City", coverage: 98, avgEta: "11m" },
  { region: "Los Angeles", coverage: 94, avgEta: "13m" },
  { region: "Chicago", coverage: 92, avgEta: "12m" },
  { region: "Houston", coverage: 88, avgEta: "15m" },
  { region: "Miami", coverage: 86, avgEta: "14m" },
  { region: "Phoenix", coverage: 84, avgEta: "16m" }
];

const heatMap = Array.from({ length: 60 }, (_, idx) => idx);

export default function NetworkCoverage() {
  return (
    <section id="network" className="relative overflow-hidden border-y border-white/10 py-16">
      <div className="absolute -right-32 top-16 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="tag">Nationwide network</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            47 states, 180+ health systems, and 13M covered lives
          </h2>
          <p className="mt-4 text-base text-slate-200">
            CareRide operates a compliance-first marketplace of clinicians, vehicles, and dispatchers.
            Every market includes multiple backup providers, health system partnerships, and live
            quality scores to guarantee SLA coverage even during surges.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-slate-200">
            {[
              { label: "Average SLA adherence", value: "97.2%" },
              { label: "Multi-leg procedures scheduled", value: "48k" },
              { label: "CO2 saved vs. ambulance", value: "31%" }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="text-xl font-semibold text-white">{item.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-6">
          <div className="grid grid-cols-12 gap-1">
            {heatMap.map((cell) => (
              <div
                key={cell}
                className={classNames(
                  "aspect-square w-full rounded border border-white/5",
                  cell % 7 === 0
                    ? "bg-primary-500/70"
                    : cell % 5 === 0
                    ? "bg-primary-500/40"
                    : "bg-primary-500/15"
                )}
              />
            ))}
          </div>
          <table className="mt-6 w-full text-left text-sm text-slate-200">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-400">
                <th className="pb-2">Metro</th>
                <th className="pb-2">Coverage SLA</th>
                <th className="pb-2 text-right">Median ETA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {metros.map((metro) => (
                <tr key={metro.region}>
                  <td className="py-3 font-semibold text-white">{metro.region}</td>
                  <td className="py-3">{metro.coverage}%</td>
                  <td className="py-3 text-right">{metro.avgEta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
