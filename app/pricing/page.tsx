import { Navbar } from "@/components/home/Navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050B08] text-[#DDE7E1] pt-28 pb-24 px-6">

        {/* HEADER */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C853] bg-[#00C853]/10 border border-[#00C853]/20 rounded-full px-4 py-1.5 mb-4">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#9FB3A8] text-lg">
            Start free. Upgrade when you&apos;re ready to go pro.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* FREE PLAN */}
          <div className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-white/20 transition-colors duration-300">
            <h2 className="text-lg font-semibold text-white mb-1">Free</h2>
            <p className="text-4xl font-bold text-white mb-1">0 <span className="text-xl font-normal text-[#9FB3A8]">ETB</span></p>
            <p className="text-sm text-[#9FB3A8] mb-8">Forever free</p>

            <ul className="space-y-3 text-[#9FB3A8] flex-1 mb-8">
              {["HTML & CSS Basics", "JavaScript Fundamentals", "Practice exercises", "Self-paced learning"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-[#00C853] text-base">✓</span> {f}
                </li>
              ))}
            </ul>

            <Link
              href="https://learn.techvision.edu.et/login?redirect-to=/lms/courses/#login"
              className="block text-center text-sm font-semibold text-[#DDE7E1] border border-white/15 py-2.5 rounded-xl hover:border-[#00C853]/40 hover:text-white transition-all duration-200"
            >
              Start Free
            </Link>
          </div>

          {/* ONLINE PLAN (BEST VALUE) */}
          <div className="relative flex flex-col rounded-2xl border border-[#00C853]/40 bg-gradient-to-b from-[#00C853]/10 to-transparent p-8 shadow-[0_0_40px_rgba(0,200,83,0.12)]">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest uppercase text-black bg-gradient-to-r from-[#00C853] to-[#B2FF59] px-4 py-1 rounded-full">
              Most Popular
            </span>

            <h2 className="text-lg font-semibold text-white mb-1">Online Bootcamp</h2>
            <p className="text-4xl font-bold text-white mb-1">3,500 <span className="text-xl font-normal text-[#9FB3A8]">ETB</span></p>
            <p className="text-sm text-[#9FB3A8] mb-8">per month · 12 weeks</p>

            <ul className="space-y-3 text-[#9FB3A8] flex-1 mb-8">
              {[
                "12 Weeks Live Training",
                "4 Classes / Week (2 hrs each)",
                "React + Next.js curriculum",
                "Real-world projects",
                "Instructor-led sessions",
                "Max 20 students per batch",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-[#00C853] text-base">✓</span> {f}
                </li>
              ))}
            </ul>

            <Link
              href="https://learn.techvision.edu.et/batch-application"
              className="block text-center text-sm font-bold text-black bg-gradient-to-r from-[#00C853] to-[#00A844] py-2.5 rounded-xl hover:shadow-[0_0_20px_rgba(0,200,83,0.4)] hover:scale-[1.02] transition-all duration-200"
            >
              Apply Now
            </Link>
          </div>

          {/* IN-PERSON PLAN */}
          <div className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-white/20 transition-colors duration-300">
            <h2 className="text-lg font-semibold text-white mb-1">In-Person</h2>
            <p className="text-4xl font-bold text-white mb-1">6,000 <span className="text-xl font-normal text-[#9FB3A8]">ETB</span></p>
            <p className="text-sm text-[#9FB3A8] mb-8">per month · 12 weeks</p>

            <ul className="space-y-3 text-[#9FB3A8] flex-1 mb-8">
              {[
                "Everything in Online",
                "Physical classroom sessions",
                "Direct in-person support",
                "Better peer networking",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-[#00C853] text-base">✓</span> {f}
                </li>
              ))}
            </ul>

            <Link
              href="https://learn.techvision.edu.et/batch-application"
              className="block text-center text-sm font-semibold text-[#DDE7E1] border border-white/15 py-2.5 rounded-xl hover:border-[#00C853]/40 hover:text-white transition-all duration-200"
            >
              Apply Now
            </Link>
          </div>

        </div>

        {/* COMPARISON TABLE */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Compare Plans
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-5 text-left font-semibold text-[#9FB3A8]">Feature</th>
                  <th className="p-5 text-center font-semibold text-[#9FB3A8]">Free</th>
                  <th className="p-5 text-center font-semibold text-[#00C853]">Online</th>
                  <th className="p-5 text-center font-semibold text-[#9FB3A8]">In-Person</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["HTML / CSS & JavaScript", "✓", "✓", "✓"],
                  ["Live Classes", "—", "✓", "✓"],
                  ["Projects", "Basic", "Advanced", "Advanced"],
                  ["Instructor Support", "—", "✓", "✓"],
                  ["Classroom Access", "—", "—", "✓"],
                ].map(([feature, free, online, inPerson]) => (
                  <tr key={feature} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 text-[#DDE7E1]">{feature}</td>
                    <td className="p-5 text-center text-[#9FB3A8]">{free}</td>
                    <td className="p-5 text-center text-[#00C853] font-medium">{online}</td>
                    <td className="p-5 text-center text-[#9FB3A8]">{inPerson}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-24 text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Become a Frontend Developer?
          </h2>
          <p className="text-[#9FB3A8] mb-8">
            Limited to 20 students per batch. Secure your spot now.
          </p>
          <Link
            href="https://learn.techvision.edu.et/batch-application"
            className="inline-block text-sm font-bold text-black bg-gradient-to-r from-[#00C853] to-[#00A844] px-8 py-3 rounded-xl hover:shadow-[0_0_30px_rgba(0,200,83,0.4)] hover:scale-105 transition-all duration-300"
          >
            Apply for Next Batch
          </Link>
        </div>

      </main>

      <Footer />
    </>
  )
}