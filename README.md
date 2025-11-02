# CareRide — Uber for Healthcare

CareRide is a production-ready Next.js application that coordinates on-demand, clinician-staffed medical transportation. The experience blends patient booking, provider credentialing, network intelligence, and command-center insights to emulate an "Uber for healthcare" offering that can be deployed to Vercel in minutes.

## 🚀 Tech Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS for rapid, responsive styling
- Framer Motion for subtle landing-page animations
- React Hook Form + Zod for HIPAA-conscious form validation
- SWR + API route stubs for future real-time integrations

## ✨ Core Experiences
- **Marketing funnel** (`app/page.tsx`) highlights service lines, network coverage, testimonials, and value-based outcomes.
- **Clinician roster** (`components/ProviderRoster.tsx`) surfaces credentialed drivers with real-time availability.
- **Ride timeline** (`components/RideTimeline.tsx`) illustrates dispatch-to-handoff workflows for patients and families.
- **Booking flow** (`components/BookingForm.tsx`) captures trip details with acuity settings, accompaniment preferences, and notes, posting to `/api/request` for confirmation IDs.
- **Command center analytics** (`components/InsightsDashboard.tsx`) showcases reimbursement impact and care-path telemetry.
- **Operational showcase & network coverage** components translate dispatch intelligence, fleet mix, and market capacity.

## 🧩 Project Structure
```
app/
  api/request/route.ts     # Simulated booking endpoint
  layout.tsx               # Root layout + providers
  page.tsx                 # Marketing experience
  dashboard/page.tsx       # Internal command-center view
components/                # Reusable UI building blocks
lib/                       # Static data + utilities
public/                    # Static assets (placeholder)
```

## 🛠️ Local Development
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## ✅ Quality Gates
- `npm run lint` — ESLint (Next.js core web vitals)
- `npm run typecheck` — TypeScript strictness
- `npm run build` — Production build verification

## 🌐 Deployment
The project includes a `.vercel` link definition. Deploy with:
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN
```

## 📄 License
MIT — customize and extend to fit your organization’s compliance, integrations, and branding needs.
