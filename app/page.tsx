import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Faq } from "@/components/home/Faq";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-[#060A08]">
        <Hero />
        <Features />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
