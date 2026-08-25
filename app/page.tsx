import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Stats } from "@/components/home/Stats";
import { Features } from "@/components/home/Features";
import { Roadmap } from "@/components/home/Roadmap";
import { TechStack } from "@/components/home/TechStack";
import { CourseOfferings } from "@/components/home/CourseOfferings";
import { PricingComparison } from "@/components/home/PricingComparison";
import { Projects } from "@/components/home/Projects";
import { Instructor } from "@/components/home/Instructor";
import { Testimonials } from "@/components/home/Testimonials";
import { UrgencyBanner } from "@/components/home/UrgencyBanner";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-[#060A08]">
        <Hero />
        <TrustBar />
        <Stats />
        <Features />
        <Roadmap />
        <TechStack />
        <CourseOfferings />
        <PricingComparison />
        <Projects />
        <Instructor />
        <Testimonials />
        <UrgencyBanner />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
