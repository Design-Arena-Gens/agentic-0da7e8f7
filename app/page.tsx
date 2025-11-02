import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceHighlights from "@/components/ServiceHighlights";
import ProviderRoster from "@/components/ProviderRoster";
import RideTimeline from "@/components/RideTimeline";
import BookingForm from "@/components/BookingForm";
import OperationsShowcase from "@/components/OperationsShowcase";
import NetworkCoverage from "@/components/NetworkCoverage";
import Testimonials from "@/components/Testimonials";
import InsightsDashboard from "@/components/InsightsDashboard";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServiceHighlights />
        <ProviderRoster />
        <RideTimeline />
        <BookingForm />
        <OperationsShowcase />
        <NetworkCoverage />
        <Testimonials />
        <InsightsDashboard />
      </main>
      <Footer />
    </div>
  );
}
