import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="partner" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="tag">Customer outcomes</span>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Payers and providers rely on CareRide to reduce leakage and boost reimbursements
        </h2>
        <p className="mt-4 text-base text-slate-200">
          When patients receive timely rides staffed with the right clinical skills, value-based care
          metrics soar. CareRide&apos;s command center integrates with Epic, Cerner, athenahealth, and
          every major RCM platform.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-slate-200 shadow-card">
            <p className="text-base italic leading-relaxed text-slate-100">“{testimonial.quote}”</p>
            <div className="mt-6">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">{testimonial.role}</p>
              <p className="mt-1 text-xs font-medium text-primary-200">{testimonial.organization}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
