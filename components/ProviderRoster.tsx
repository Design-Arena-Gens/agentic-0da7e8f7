import Image from "next/image";
import { CheckBadgeIcon, ClockIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import type { CareProvider } from "@/lib/data";
import { highlightedProviders } from "@/lib/data";

const statusBadges: Record<CareProvider["status"], { label: string; color: string }> = {
  available: { label: "Available now", color: "bg-emerald-500/15 text-emerald-300 border border-emerald-200/30" },
  "en route": { label: "On assignment", color: "bg-primary-500/15 text-primary-200 border border-primary-100/30" },
  busy: { label: "Completing ride", color: "bg-amber-500/15 text-amber-200 border border-amber-100/30" }
};

export default function ProviderRoster() {
  return (
    <section id="clinicians" className="relative overflow-hidden border-y border-white/5 bg-slate-950/70 py-16">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="tag">Clinical driver network</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Credentialed professionals dispatched with medical-grade vehicles
          </h2>
          <p className="mt-4 text-base text-slate-200">
            Every CareRide operator is a licensed clinician with hospital-grade training. Quality
            badges sync with state registries, pharmacy boards, and CareRide&apos;s internal QA scoring.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlightedProviders.map((provider) => {
            const status = statusBadges[provider.status];
            return (
              <article key={provider.id} className="glass relative overflow-hidden rounded-3xl p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
                    <Image
                      src={provider.avatar}
                      alt={provider.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-slate-300">
                      <StarIcon className="h-4 w-4 text-amber-300" />
                      <span>{provider.rating.toFixed(1)}</span>
                      <span className="text-slate-500">/ 5</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                  {provider.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full bg-white/5 px-3 py-1 font-medium text-slate-200"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <dl className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-200">
                  <div className="flex items-center gap-2 rounded-2xl bg-white/5 p-3">
                    <ClockIcon className="h-5 w-5 text-primary-300" />
                    <div>
                      <dt className="text-xs text-slate-400">Response time</dt>
                      <dd className="font-semibold text-white">{provider.responseTime}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl bg-white/5 p-3">
                    <MapPinIcon className="h-5 w-5 text-primary-300" />
                    <div>
                      <dt className="text-xs text-slate-400">Distance</dt>
                      <dd className="font-semibold text-white">{provider.distance} mi</dd>
                    </div>
                  </div>
                </dl>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {provider.certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-2">
                      <CheckBadgeIcon className="h-5 w-5 text-primary-300" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
                <span className={`mt-6 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${status.color}`}>
                  {status.label}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
