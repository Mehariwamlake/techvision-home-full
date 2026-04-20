import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/ui/footer"

export default function Home() {
  return (
    <>
     <Navbar />
    
    <main className="flex flex-col">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-background to-muted">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          Learn Frontend Development & Build Real Projects
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Start free with HTML, CSS, and JavaScript. Upgrade to our live bootcamp
          to become job-ready with React & Next.js.
        </p>

        <div className="flex gap-4 mt-8">
          <Button size="lg">Start Free Learning</Button>
          <Button variant="outline" size="lg">Join Bootcamp</Button>
        </div>
      </section>

      {/* FREE VS PAID */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Start Free. Go Pro When Ready.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Free Courses</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✔ HTML & CSS Basics</li>
              <li>✔ JavaScript Fundamentals</li>
              <li>✔ Practice exercises</li>
            </ul>
            <Button className="mt-6 w-full">Start Free</Button>
          </div>

          <div className="p-6 border rounded-2xl bg-muted">
            <h3 className="text-xl font-semibold mb-4">
              Frontend Bootcamp (Paid)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✔ 12 Weeks Live Training</li>
              <li>✔ 4 Classes / Week (2 hrs each)</li>
              <li>✔ Max 20 Students</li>
              <li>✔ Real-world projects</li>
              <li>✔ Instructor-led sessions</li>
            </ul>
            <Button className="mt-6 w-full">Join Now</Button>
          </div>
        </div>
      </section>

      {/* BOOTCAMP DETAILS */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            12-Week Frontend Bootcamp
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designed for university students and self-taught developers who want
            to become job-ready. Learn React, Next.js, and build real-world apps.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">Online</h3>
              <p className="text-2xl font-bold">3,500 ETB / month</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">In-Person</h3>
              <p className="text-2xl font-bold">6,000 ETB / month</p>
            </div>
          </div>

          <Button size="lg" className="mt-10">
            Apply for Next Batch
          </Button>
        </div>
      </section>

      {/* WHY TECHVISION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why TechVision LMS?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">Real Projects</h3>
            <p className="text-muted-foreground">
              Build portfolio-ready applications, not just theory.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Instructor-Led Training
            </h3>
            <p className="text-muted-foreground">
              Learn directly from experienced developers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Small Batch Size
            </h3>
            <p className="text-muted-foreground">
              Max 20 students for better support and focus.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-muted">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Students Say
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl">
            <p className="text-muted-foreground">
              “This bootcamp helped me build real projects and understand React deeply.”
            </p>
            <p className="mt-4 font-semibold">— Student</p>
          </div>

          <div className="p-6 border rounded-xl">
            <p className="text-muted-foreground">
              “Best learning experience compared to YouTube tutorials.”
            </p>
            <p className="mt-4 font-semibold">— Developer</p>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Learn From Your Instructor
        </h2>

        <p className="text-muted-foreground">
          Learn directly from an experienced frontend developer building real-world systems.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-muted">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="font-semibold">Do I need prior experience?</h3>
            <p className="text-muted-foreground">
              No. You can start with our free courses first.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">How do I join the bootcamp?</h3>
            <p className="text-muted-foreground">
              Click "Apply for Next Batch" and we’ll contact you.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Is it live or recorded?</h3>
            <p className="text-muted-foreground">
              All bootcamp sessions are live and interactive.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Learning Today
        </h2>

        <p className="text-muted-foreground mb-8">
          Begin with free courses or join the next frontend bootcamp.
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg">Start Free</Button>
          <Button size="lg" variant="outline">Join Bootcamp</Button>
        </div>
      </section>

    </main>
    <Footer />
    </>
  )
}