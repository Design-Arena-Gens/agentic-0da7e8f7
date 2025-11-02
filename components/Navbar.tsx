'use client';

import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/lib/utils";

const navigation = [
  { name: "Platform", href: "#platform" },
  { name: "Clinicians", href: "#clinicians" },
  { name: "Patients", href: "#patients" },
  { name: "Network", href: "#network" },
  { name: "Insights", href: "#insights" }
];

const ctaButtons = [
  { label: "Book transport", href: "#book", primary: true },
  { label: "Partner with us", href: "#partner", primary: false }
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      {({ open }) => (
        <>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500/20 text-lg font-semibold text-primary-200 shadow-inner">
                CR
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                CareRide
              </span>
            </Link>
            <div className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-slate-200 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden items-center gap-3 lg:flex">
              {ctaButtons.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={classNames(
                    "rounded-full px-4 py-2 text-sm font-semibold transition",
                    cta.primary
                      ? "bg-primary-500 text-white hover:bg-primary-400 shadow-lg shadow-primary-500/20"
                      : "border border-white/10 text-slate-200 hover:border-white/40"
                  )}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
            <div className="lg:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-400">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel className="border-t border-white/5 bg-slate-950/95 lg:hidden">
            <div className="space-y-1 px-6 pb-6 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-slate-200 hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                {ctaButtons.map((cta) => (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={classNames(
                      "rounded-full px-4 py-2 text-sm font-semibold text-center transition",
                      cta.primary
                        ? "bg-primary-500 text-white hover:bg-primary-400 shadow-lg shadow-primary-500/20"
                        : "border border-white/10 text-slate-200 hover:border-white/40"
                    )}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
