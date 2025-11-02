'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const bookingSchema = z.object({
  passengerName: z.string().min(2, "Full name required"),
  passengerPhone: z.string().min(8, "Phone number required"),
  pickupAddress: z.string().min(4, "Pickup location required"),
  dropoffAddress: z.string().min(4, "Destination required"),
  acuity: z.string(),
  accompaniment: z.string(),
  visitType: z.string(),
  notes: z.string().optional()
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const accompanimentOptions = [
  "Clinician accompanies patient",
  "Family member rides along",
  "Virtual-only monitoring"
];

const visitTypeOptions = [
  "Specialist consultation",
  "Dialysis",
  "Chemotherapy",
  "Post-operative follow-up",
  "Radiology",
  "Primary care"
];

const acuityLevels = [
  { label: "Routine", description: "Vitals stable, standard wheelchair or sedan support" },
  { label: "Elevated", description: "Requires EMT driver, advanced monitoring equipment" },
  { label: "Critical", description: "ICU on-wheels, ventilator transport readiness" }
];

export default function BookingForm() {
  const [confirmationId, setConfirmationId] = useState<string | null>(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      visitType: visitTypeOptions[0],
      accompaniment: accompanimentOptions[0],
      acuity: acuityLevels[0].label
    }
  });

  const onSubmit = async (values: BookingFormValues) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      const data = await response.json();
      setConfirmationId(data.confirmationId);
      reset();
    } catch (error) {
      console.error(error);
      setConfirmationId(null);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="book" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="tag">Dispatch a clinician ride</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Book HIPAA-secure medical transport in under 60 seconds
          </h2>
          <p className="mt-4 text-base text-slate-200">
            Our dispatch AI matches the patient with the right clinical driver, equipment, and
            vehicle in real time. Every booking triggers pre-visit triage, insurance verification, and
            an arrival ETA you can share with care teams.
          </p>
          <ul className="mt-6 space-y-4 text-sm text-slate-200">
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-primary-300" />
              <span>EMR-integrated consent and vitals sharing across provider networks</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-primary-300" />
              <span>AI verifies licensure, background checks, and equipment readiness for every ride</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-primary-300" />
              <span>Track multi-leg journeys with automated family notifications and geo-fencing</span>
            </li>
          </ul>
          {confirmationId && (
            <div className="mt-6 rounded-2xl border border-primary-400/30 bg-primary-500/10 px-4 py-3 text-sm text-primary-100">
              Confirmation ID {confirmationId}. Dispatch coordinator will call within 2 minutes.
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                Passenger name
                <input
                  {...register("passengerName")}
                  placeholder="Taylor Johnson"
                  className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary-400 focus:outline-none"
                />
                {errors.passengerName && (
                  <span className="text-xs text-rose-300">{errors.passengerName.message}</span>
                )}
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                Contact number
                <input
                  {...register("passengerPhone")}
                  placeholder="(555) 214-1094"
                  className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary-400 focus:outline-none"
                />
                {errors.passengerPhone && (
                  <span className="text-xs text-rose-300">{errors.passengerPhone.message}</span>
                )}
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Pickup address
              <input
                {...register("pickupAddress")}
                placeholder="451 Grand Ave, Suite 206, Brooklyn NY"
                className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary-400 focus:outline-none"
              />
              {errors.pickupAddress && (
                <span className="text-xs text-rose-300">{errors.pickupAddress.message}</span>
              )}
            </label>

            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Dropoff / Facility
              <input
                {...register("dropoffAddress")}
                placeholder="Weill Cornell Imaging Center"
                className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary-400 focus:outline-none"
              />
              {errors.dropoffAddress && (
                <span className="text-xs text-rose-300">{errors.dropoffAddress.message}</span>
              )}
            </label>

            <fieldset className="rounded-2xl border border-white/10 p-4">
              <legend className="px-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Acuity level
              </legend>
              <div className="grid gap-4 sm:grid-cols-3">
                {acuityLevels.map((option) => (
                  <label key={option.label} className="flex cursor-pointer flex-col gap-2 rounded-xl border border-white/5 bg-white/5 p-3 text-xs text-slate-200 hover:border-primary-300/40">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        value={option.label}
                        {...register("acuity")}
                        className="h-4 w-4 border-white/50 bg-slate-900 text-primary-400 focus:ring-primary-400"
                      />
                      <span className="font-semibold text-white">{option.label}</span>
                    </div>
                    <p>{option.description}</p>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Visit type
              <select
                {...register("visitType")}
                className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white focus:border-primary-400 focus:outline-none"
              >
                {visitTypeOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Accompaniment preference
              <select
                {...register("accompaniment")}
                className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white focus:border-primary-400 focus:outline-none"
              >
                {accompanimentOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Notes for the clinician (optional)
              <textarea
                {...register("notes")}
                rows={4}
                placeholder="Patient uses home oxygen; bring updated portable canister."
                className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary-400 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Dispatch ride"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
