import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="px-6 py-20 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground">
            Start free. Upgrade when you're ready to go pro.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* FREE PLAN */}
          <div className="border rounded-2xl p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Free</h2>
            <p className="text-3xl font-bold mb-4">0 ETB</p>

            <ul className="space-y-2 text-muted-foreground flex-1">
              <li>✔ HTML & CSS Basics</li>
              <li>✔ JavaScript Fundamentals</li>
              <li>✔ Practice exercises</li>
              <li>✔ Self-paced learning</li>
            </ul>

            <Button className="mt-6 w-full">
              Start Free
            </Button>
          </div>

          {/* ONLINE PLAN (BEST VALUE) */}
          <div className="border-2 border-primary rounded-2xl p-6 flex flex-col relative shadow-lg">
            <span className="absolute top-3 right-3 text-xs bg-primary text-white px-2 py-1 rounded">
              MOST POPULAR
            </span>

            <h2 className="text-xl font-semibold mb-2">Online Bootcamp</h2>
            <p className="text-3xl font-bold mb-1">3,500 ETB</p>
            <p className="text-sm text-muted-foreground mb-4">per month</p>

            <ul className="space-y-2 text-muted-foreground flex-1">
              <li>✔ 12 Weeks Live Training</li>
              <li>✔ 4 Classes / Week</li>
              <li>✔ 2 Hours per session</li>
              <li>✔ React + Next.js</li>
              <li>✔ Real-world projects</li>
              <li>✔ Instructor-led</li>
              <li>✔ Max 20 students</li>
            </ul>

            <Button className="mt-6 w-full">
              Apply Now
            </Button>
          </div>

          {/* IN-PERSON PLAN */}
          <div className="border rounded-2xl p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">In-Person</h2>
            <p className="text-3xl font-bold mb-1">6,000 ETB</p>
            <p className="text-sm text-muted-foreground mb-4">per month</p>

            <ul className="space-y-2 text-muted-foreground flex-1">
              <li>✔ Everything in Online</li>
              <li>✔ Physical classroom</li>
              <li>✔ Direct support</li>
              <li>✔ Better networking</li>
            </ul>

            <Button variant="outline" className="mt-6 w-full">
              Apply Now
            </Button>
          </div>

        </div>

        {/* COMPARISON */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-10">
            Compare Plans
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead>
                <tr className="border-b bg-muted">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4">Free</th>
                  <th className="p-4">Online</th>
                  <th className="p-4">In-Person</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-4">HTML/CSS & JS</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">Live Classes</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">Projects</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Advanced</td>
                  <td className="text-center">Advanced</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">Instructor Support</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✔</td>
                  <td className="text-center">✔</td>
                </tr>

                <tr>
                  <td className="p-4">Classroom Access</td>
                  <td className="text-center">—</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✔</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Become a Frontend Developer?
          </h2>

          <p className="text-muted-foreground mb-6">
            Limited to 20 students per batch. Secure your spot now.
          </p>

          <Button size="lg">
            Apply for Next Batch
          </Button>
        </div>

      </main>

      <Footer />
    </>
  )
}