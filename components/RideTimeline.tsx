import { rideTimeline } from "@/lib/data";

export default function RideTimeline() {
  return (
    <section id="patients" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <span className="tag">Patient experience</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            From symptom intake to clinical hand-off in under 35 minutes
          </h2>
          <p className="mt-4 text-base text-slate-200">
            CareRide orchestrates triage, transportation, and data syncing with one unified timeline.
            Families can track every milestone and share ride telemetry with primary care teams in
            real time.
          </p>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <p className="font-semibold text-white">Livestreamed vitals</p>
            <p className="mt-2">
              Connected wearables stream vitals to the receiving clinic, showing oxygen saturation,
              blood pressure, and glucose levels. AI alerts clinicians if readings drift outside a safe
              range during transit.
            </p>
          </div>
        </div>
        <ol className="relative space-y-6">
          <div className="absolute left-[11px] top-2 bottom-4 w-[2px] bg-gradient-to-b from-primary-300 via-primary-500 to-primary-800" />
          {rideTimeline.map((event) => (
            <li key={event.id} className="relative flex gap-4 rounded-3xl border border-white/8 bg-white/5 p-5">
              <div className="relative">
                <span className="absolute left-[3px] top-[3px] h-2.5 w-2.5 rounded-full bg-primary-200" />
                <span className="absolute inset-0 h-8 w-8 rounded-full bg-primary-400/20 blur-xl" />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/40 text-xs font-semibold text-white">
                  {event.time}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-white uppercase tracking-wide">
                  {event.status}
                </p>
                <p className="mt-2 text-sm text-slate-200">{event.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
