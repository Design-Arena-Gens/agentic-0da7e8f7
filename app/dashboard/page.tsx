import Link from "next/link";
import InsightsDashboard from "@/components/InsightsDashboard";

export const metadata = {
  title: "CareRide Dashboard | Command Center"
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/70 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary-500/20 text-sm font-semibold text-primary-200">
              CR
            </span>
            <span className="text-base font-semibold tracking-tight">CareRide Command Center</span>
          </Link>
          <div className="text-xs uppercase tracking-wide text-slate-400">
            Night shift · 02:14 AM ET
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6">
        <InsightsDashboard />
      </main>
    </div>
  );
}
