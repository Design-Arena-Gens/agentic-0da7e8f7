export type MedicalServiceCategory = {
  id: string;
  title: string;
  description: string;
  avgResponse: string;
  coverage: number;
  color: string;
};

export type CareProvider = {
  id: string;
  name: string;
  rating: number;
  specialties: string[];
  distance: number;
  responseTime: string;
  certifications: string[];
  status: "available" | "en route" | "busy";
  avatar: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
};

export type RideTimelineEvent = {
  id: string;
  status: string;
  time: string;
  description: string;
};

export const serviceCategories: MedicalServiceCategory[] = [
  {
    id: "urgent-care",
    title: "Urgent Care Transportation",
    description:
      "Nurse-assisted rides for urgent but non-emergency visits, lab work, and follow-up appointments.",
    avgResponse: "12 min",
    coverage: 94,
    color: "from-primary-400 to-primary-600"
  },
  {
    id: "telehealth",
    title: "Virtual Care Companion",
    description:
      "On-demand telehealth consults, medication pickup, and at-home monitoring device delivery.",
    avgResponse: "7 min",
    coverage: 89,
    color: "from-accent-400 to-accent-600"
  },
  {
    id: "post-operative",
    title: "Post-Operative Transit",
    description:
      "Licensed EMT drivers with medical-grade vehicles for post-op checkups and rehabilitation sessions.",
    avgResponse: "18 min",
    coverage: 81,
    color: "from-emerald-400 to-emerald-600"
  }
];

export const highlightedProviders: CareProvider[] = [
  {
    id: "claire-weaver",
    name: "Claire Weaver, RN",
    rating: 4.9,
    specialties: ["Cardiology follow-ups", "Elderly care"],
    distance: 2.1,
    responseTime: "9 min avg.",
    certifications: ["Registered Nurse", "BLS & ACLS", "Telehealth Specialist"],
    status: "available",
    avatar: "https://i.pravatar.cc/120?img=12"
  },
  {
    id: "miguel-santos",
    name: "Miguel Santos, EMT-P",
    rating: 4.8,
    specialties: ["Critical care transport", "Respiratory support"],
    distance: 4.5,
    responseTime: "11 min avg.",
    certifications: ["Paramedic", "Critical Care Transport", "Ventilator Management"],
    status: "en route",
    avatar: "https://i.pravatar.cc/120?img=14"
  },
  {
    id: "dr-singh",
    name: "Dr. Priya Singh",
    rating: 5,
    specialties: ["Telehealth diagnosis", "Pediatrics"],
    distance: 0.0,
    responseTime: "instant",
    certifications: ["Board-certified Pediatrician", "Telemedicine"],
    status: "available",
    avatar: "https://i.pravatar.cc/120?img=47"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "cleveland-clinic",
    quote:
      "CareRide reduced missed follow-up visits by 63%. The real-time GPS tracking and clinical-grade vehicle options are a game changer for our remote-first care programs.",
    name: "Dr. Leah Parker",
    role: "Chief Innovation Officer",
    organization: "Cleveland Clinic"
  },
  {
    id: "family-care",
    quote:
      "Our high-risk pregnancy patients now receive checkups exactly when needed. The driver nurses are trained on fetal monitoring protocols, which keeps everyone confident.",
    name: "Alicia Johnson",
    role: "Director of Maternal Care",
    organization: "United Family Care Network"
  },
  {
    id: "vet-affairs",
    quote:
      "The VA needed HIPAA-secure patient transit with medical oversight. CareRide layered our EMR data with their dispatch AI and built the workflow in three weeks.",
    name: "Col. Marcus Chen",
    role: "Regional Telehealth Lead",
    organization: "US Department of Veterans Affairs"
  }
];

export const rideTimeline: RideTimelineEvent[] = [
  {
    id: "triage",
    status: "AI triage & matching",
    time: "00:00",
    description:
      "Patient symptoms parsed, risk scored, and best-fit clinical driver surfaced within 4 seconds."
  },
  {
    id: "dispatch",
    status: "Dispatch confirmation",
    time: "00:03",
    description:
      "Assigned nurse acknowledges, vehicle telemetry checks initiated, family notified via SMS."
  },
  {
    id: "pickup",
    status: "Pickup & monitoring",
    time: "00:14",
    description:
      "Vitals captured with connected wearables. Data sync'd to provider dashboard in real time."
  },
  {
    id: "handoff",
    status: "Clinical hand-off",
    time: "00:32",
    description:
      "Arrival at destination with voice-notes, vitals, and ride audit trail delivered to receiving clinic."
  }
];
