"use client";
import { motion } from "framer-motion";

export default function Home() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="bg-gray-950 text-white min-h-screen overflow-hidden">

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-center py-2 text-sm font-medium">
        🚀 Grade 12 National Exam Prep is LIVE — Practice now!
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <img src="/logo-long.png" width={150} height={150}></img>
        

        <div className="space-x-6 hidden md:flex">
          <a href="https://learn.techvision.edu.et/login?redirect-to=/lms/batches/#login" className="hover:text-blue-400">Batches</a>
          <a href="https://learn.techvision.edu.et/lms/courses" className="hover:text-blue-400">Courses</a>
          <a href="https://learn.techvision.edu.et/lms/courses/national-exam-grade-12" className="hover:text-blue-400">Exam Prep</a>
          <a href="https://learn.techvision.edu.et/lms/job-openings" className="hover:text-blue-400">Job Opportunities</a>
        </div>

        <a href="https://learn.techvision.edu.et/login?redirect-to=/lms/courses/#login" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center py-20 px-8">

        {/* Left Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ace Your <span className="text-blue-500">Grade 12 Exams</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Practice real national exam questions, track progress, and boost your confidence.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="https://learn.techvision.edu.et/login?redirect-to=/lms/courses/#login" className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700">
              Start Practicing
            </a>
            <a href="https://learn.techvision.edu.et/login?redirect-to=/lms/courses/#login" className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-gray-800">
              Explore programs
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="/home.jpg" // 👉 replace with your image
            alt="Dashboard preview"
            className="rounded-2xl shadow-2xl border border-gray-800"
          />

          {/* Glow Effect */}
          <div className="absolute -z-10 inset-0 bg-blue-500 blur-3xl opacity-20"></div>
        </motion.div>
      </section>

      {/* Exam Prep Section */}
      <section className="px-8 py-20 bg-gray-900">
        <motion.h3
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          🎯 Grade 12 Exam Preparation
        </motion.h3>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Real Exam Questions",
              desc: "Practice like the real exam."
            },
            {
              title: "Instant Feedback",
              desc: "Improve immediately."
            },
            {
              title: "Smart Practice",
              desc: "Focus on weak areas."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-2xl"
            >
              <h4 className="text-xl font-semibold mb-3 text-blue-400">
                {item.title}
              </h4>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Image Section (Social Proof Style) */}
      <section className="px-8 py-20 text-center">
        <motion.h3
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Learn Like Top Students 📈
        </motion.h3>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
        >
          {["/student1.jpg", "/student2.jpg", "/student3.jpg"].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              variants={fadeUp}
              className="rounded-2xl h-64 w-full object-cover hover:scale-105 transition"
            />
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.h3
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Don’t wait — exams are coming.
        </motion.h3>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 bg-white text-black px-8 py-3 rounded-xl text-lg"
          onClick={() => window.location.href = "https://learn.techvision.edu.et/lms/courses/national-exam-grade-12"}
        >
          Join Now
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} TechVision LMS
      </footer>

    </main>
  );
}