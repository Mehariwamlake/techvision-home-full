import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen  text-[#DDE7E1] pt-28 pb-24 px-6 font-hanken">
        {/* HEADER */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00CD74]   px-4 py-1.5 mb-4 font-jetbrains">
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
          <div className="relative group w-full h-full">
            <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] border border-white  pointer-events-none z-0 transition-transform duration-300 group-hover:translate-x-[10px] group-hover:translate-y-[10px]" />
            <div className="relative flex flex-col h-full  border border-white bg-[#0A0F0D]  p-8 hover:border-white/20 transition-colors duration-300">
              <h2 className="text-lg font-semibold text-white mb-1">Free</h2>
              <p className="text-4xl font-bold text-white mb-1">
                0{" "}
                <span className="text-xl font-normal text-[#9FB3A8]">ETB</span>
              </p>
              <p className="text-sm text-[#9FB3A8] mb-8">Forever free</p>

              <ul className="space-y-3 text-[#9FB3A8] flex-1 mb-8">
                {[
                  "HTML & CSS Basics",
                  "JavaScript Fundamentals",
                  "Practice exercises",
                  "Self-paced learning",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-[#00C853] text-base">✓</span> {f}
                  </li>
                ))}
              </ul>

              <Link
                href="https://learn.techvision.edu.et/login?redirect-to=/lms/courses/#login"
                className="block text-center text-sm font-semibold text-[#DDE7E1] border border-white/15 py-2.5  font-jetbrains hover:border-[#00C853]/40 hover:text-white transition-all duration-200"
              >
                START FREE
              </Link>
            </div>
          </div>

          <div className="relative group w-full">
            <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] border border-white  pointer-events-none z-0 transition-transform duration-300 group-hover:translate-x-[10px] group-hover:translate-y-[10px]" />
            <div className="relative flex flex-col  border border-white bg-[#0A0F0D] to-transparent z-10 p-8 hover:border-white/20 transition-colors duration-300 ">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest uppercase text-black bg-[#00CD74] px-4 py-1 ">
                Most Popular
              </span>

              <h2 className="text-lg font-semibold text-white mb-1">
                Online Bootcamp
              </h2>
              <p className="text-4xl font-bold text-white mb-1">
                3,500{" "}
                <span className="text-xl font-normal text-[#9FB3A8]">ETB</span>
              </p>
              <p className="text-sm text-[#9FB3A8] mb-8">
                per month · 12 weeks
              </p>

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
                className="block text-center text-sm font-bold text-black bg-[#00CD74] py-2.5 font-jetbrains  hover:scale-[1.02] transition-all duration-200"
              >
                APPLY NOW
              </Link>
            </div>
          </div>

          <div className="relative group w-full h-full">
            <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] border border-white  pointer-events-none z-0 transition-transform duration-300 group-hover:translate-x-[10px] group-hover:translate-y-[10px]" />
            <div className="relative z-10 flex flex-col h-full  border border-white bg-[#0A0F0D] p-8 hover:border-white/20 transition-colors duration-300">
              <h2 className="text-lg font-semibold text-white mb-1">
                In-Person
              </h2>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-white">6,000</span>
                <span className="text-sm font-medium text-[#9FB3A8]">
                  ETB /month
                </span>
              </div>

              <p className="text-xs text-[#5C7266] mb-8">12 weeks duration</p>
              <ul className="space-y-4 text-[#9FB3A8] flex-1 mb-12 text-sm">
                {[
                  "Everything in Online",
                  "Physical classroom sessions",
                  "Direct in-person support",
                  "Better peer networking",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="text-[#00C853] text-sm">✓</span> {f}
                  </li>
                ))}
              </ul>

              <Link
                href="https://techvision.edu.et"
                className="block text-center text-xs font-semibold tracking-widest text-[#00CD74] border border-[#00C853]/20  py-3 font-jetbrains uppercase  hover:bg-[#00C853]/10 hover:border-[#00C853]/40 transition-all duration-200"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Compare Plans
          </h2>
          <div className="relative group w-full">
            {/* 2. Absolute background box offset layout */}
            <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] border border-white pointer-events-none rounded-2xl z-0 transition-transform duration-300 group-hover:translate-x-[10px] group-hover:translate-y-[10px]" />

            {/* 3. FIXED: Wrapped table element in a relative layout container with matching corners */}
            <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-white bg-[#0A0F0D]">
              {/* Table horizontal scrolling container block */}
              <div className="w-full overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-[#0A0F0D]">
                      <th className="p-5 text-left font-semibold text-[#9FB3A8]">
                        Feature
                      </th>
                      <th className="p-5 text-center font-semibold text-[#9FB3A8]">
                        Free
                      </th>
                      <th className="p-5 text-center font-semibold text-[#00C853]">
                        Online
                      </th>
                      <th className="p-5 text-center font-semibold text-[#9FB3A8]">
                        In-Person
                      </th>
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
                      <tr
                        key={feature}
                        className="hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="p-5 text-[#DDE7E1]">{feature}</td>
                        <td className="p-5 text-center text-[#9FB3A8]">
                          {free}
                        </td>
                        <td className="p-5 text-center text-[#00CD74] font-medium">
                          {online}
                        </td>
                        <td className="p-5 text-center text-[#9FB3A8]">
                          {inPerson}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}

        <div className="mt-24 text-center max-w-xl mx-auto ">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Become a Frontend Developer?
          </h2>
          <p className="text-[#9FB3A8] mb-8">
            Limited to 20 students per batch. Secure your spot now.
          </p>
          <Link
            href="https://learn.techvision.edu.et/batch-application"
            className="inline-block text-sm font-bold text-black bg-[#00CD74] px-8 py-3  hover:scale-105 transition-all duration-300 font-jetbrains"
          >
            APPLY FOR NEXT BATCH
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
