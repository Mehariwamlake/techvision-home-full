"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const targetDate = new Date("2026-05-01T00:00:00").getTime();

  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    return {
      total: distance,
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / 1000 / 60) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 blur-3xl rounded-full top-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-3xl rounded-full bottom-[-100px] right-0"></div>

      {/* Content */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="z-10"
      >
        {/* Badge */}
        <div className="mb-4 text-sm text-blue-400">
          🚀 New Feature Launch
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Something Big is <span className="text-blue-500">Coming</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 max-w-xl mb-10 text-lg">
          We're launching a marketplace where you can hire expert instructors
          to create high-quality courses — built for the future of learning.
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
            const values = [
              timeLeft.days,
              timeLeft.hours,
              timeLeft.minutes,
              timeLeft.seconds,
            ];

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/70 backdrop-blur-lg px-6 py-8 rounded-2xl border border-gray-700 shadow-lg"
              >
                <p className="text-3xl font-bold text-blue-500">
                  {values[i] < 0 ? 0 : values[i]}
                </p>
                <p className="text-gray-400 mt-2">{label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-blue-600 px-8 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
            Notify Me
          </button>

          <a
            href="/"
            className="border border-gray-700 px-8 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Back to Home
          </a>
        </div>

        {/* Footer */}
        <p className="mt-10 text-gray-500 text-sm">
          TechVision LMS • Built for students, creators & future innovators
        </p>
      </motion.div>
    </main>
  );
}