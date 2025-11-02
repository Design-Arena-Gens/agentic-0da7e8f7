import { serviceCategories } from "@/lib/data";

export default function ServiceHighlights() {
  return (
    <section id="platform" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="tag">Care portfolios</span>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Specialized transport playbooks for every line of service
        </h2>
        <p className="mt-4 text-base text-slate-200">
          Each ride is dynamically staffed with the right licensure, medical supplies, and routing
          protocols. Integration with payers and EMRs guarantees compliant documentation from dispatch
          to reimbursement.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {serviceCategories.map((service) => (
          <article
            key={service.id}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.08] p-6 shadow-card backdrop-blur transition hover:border-primary-300/30 hover:shadow-primary-500/20"
          >
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.color}`}
              aria-hidden
            />
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm text-slate-200">{service.description}</p>
            <dl className="mt-6 space-y-2 text-sm text-slate-200">
              <div className="flex justify-between">
                <dt className="font-medium text-white">Average response</dt>
                <dd>{service.avgResponse}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-white">Metro coverage</dt>
                <dd>{service.coverage}%</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
