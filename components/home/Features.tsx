"use client";

import { useRef } from "react";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import {
  Layers,
  Video,
  Users,
  Briefcase,
  MessageSquare,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Layers,

    title: "Real Projects",

    description:
      "Build production-ready applications that solve real-world problems. Leave with a portfolio that stands out. ",
  },

  {
    icon: Video,

    title: "Live Mentorship",

    description:
      "Get direct guidance from senior engineers working at top tech companies. Regular  code reviews and career advice.",
  },

  {
    icon: Users,

    title: "Small Cohorts",

    description:
      "Learn in a tight-knit community of ambitious peers. Collaborate on projects and build your professional network. ",
  },

  {
    icon: Briefcase,

    title: "Career Focused",

    description:
      "Portfolio building, interview prep, GitHub optimization, and job-search guidance built into the curriculum.",
  },

  {
    icon: MessageSquare,

    title: "Community",

    description:
      "Join an active Telegram community of 350+ alumni and current students. Get help any time, day or night.",
  },

  {
    icon: BadgeCheck,

    title: "Certification",

    description:
      "Earn a recognised TechVision completion certificate to validate your skills to employers and clients.",
  },
];

export function Features() {
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,

    offset: ["start end", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [40, -40]), {
    stiffness: 60,

    damping: 20,
  });

  return (
    <section
      ref={ref}
      className="bg-[#050B08] py-24 px-6 relative overflow-hidden section-bridge-top section-bridge-bottom"
    >
      {/* Background Texture (Matches Hero) */}

      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,83,1) 1px, transparent 1px)",

          backgroundSize: "64px 64px",
        }}
      />

      {/* Top glowing line */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-px bg-gradient-to-r from-transparent via-[#00C853]/60 to-transparent" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[3px] bg-[#00C853]/30 blur-[4px]" />

      <motion.div style={{ y }} className="max-w-7xl mx-auto relative z-10">
        {/* Header Area */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Built for Your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#00C853] to-[#B2FF59] bg-clip-text text-transparent">
                Success
              </span>

              <span className="absolute -bottom-2 left-0 right-0 h-1.5 rounded-full bg-gradient-to-r from-[#00C853]/60 to-transparent blur-[2px]" />
            </span>
          </h2>

          <p className="text-[#9FB3A8] mt-6 max-w-2xl mx-auto text-sm leading-relaxed tracking-wide font-mono">
            OUR CURRICULUM IS DESIGNED TO TAKE YOU FROM FUNDAMENTALS TO ADVANCED
            CONCEPTS PREPARING YOU FOR ELITE TECHNOLOGY ROLES.
          </p>
        </motion.div>

        {/* Features Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: 0.1 + i * 0.1,

                duration: 0.6,

                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="group flex flex-col gap-3 bg-[#060A08] border border-white/10 rounded-xl p-10 cursor-default transition-all duration-300 shadow-[5px_5px_0px_0px_#2DB266] "
            >
              {/* Icon Container */}

              <div className="w-9 h-9 rounded-lg bg-[#22302A] flex items-center justify-center ">
                <f.icon size={18} className="text-white" strokeWidth={2} />
              </div>

              {/* Text Content */}

              <div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {f.title}
                </h3>

                <p className="text-[#9BAFA3] text-sm leading-relaxed ">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
