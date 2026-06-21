'use client'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  { weeks: 'Week 1–2', title: 'HTML & CSS', description: 'Semantic HTML, Flexbox, Grid, and responsive web design.', color: '#00C853', done: true },
  { weeks: 'Week 3–4', title: 'JavaScript', description: 'Core JS, DOM manipulation, async/await, and ES6+.', color: '#B2FF59', done: true },
  { weeks: 'Week 5–7', title: 'React', description: 'Component architecture, hooks, state, and interactive UIs.', color: '#00A844', done: false },
  { weeks: 'Week 8–10', title: 'Next.js', description: 'Full-stack React, App Router, server actions, and deployment.', color: '#B2FF59', done: false },
  { weeks: 'Week 11', title: 'Team Project', description: 'Collaborate on a real group project with Git workflows.', color: '#00C853', done: false },
  { weeks: 'Week 12', title: 'Portfolio', description: 'Polish your GitHub, build a portfolio, and interview prep.', color: '#B2FF59', done: false },
]

export function Roadmap() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [40, -40]), { stiffness: 60, damping: 20 })

  return (
    <section ref={ref} className="bg-[#050B08] py-20 px-6 relative overflow-hidden section-bridge-bottom">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00C853]/[0.05] blur-[120px] rounded-[100%] pointer-events-none" />

      <motion.div style={{ y }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-[#00C853] text-sm font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#00C853]/50" />
            Curriculum
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#00C853]/50" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Your 12-Week{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#00C853] to-[#B2FF59] bg-clip-text text-transparent">
                Roadmap
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C853]/60 to-transparent" />
            </span>
          </h2>
          <p className="text-[#8FA99A] mt-5 max-w-xl mx-auto text-lg">
            A structured, step-by-step path from zero to a job-ready frontend developer.
          </p>
        </motion.div>

        {/* Desktop horizontal */}
        <div className="hidden lg:block relative mt-24">
          {/* Connector line */}
          <div className="absolute top-[1.75rem] left-0 right-0 h-1 bg-white/[0.02] rounded-full">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#00C853] via-[#B2FF59] to-transparent shadow-[0_0_15px_rgba(0,200,83,0.5)]"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </div>

          <div className="grid grid-cols-6 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.weeks}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Node */}
                <div className="relative mb-6">
                  {/* Outer pulse */}
                  {step.done && (
                    <div className="absolute inset-0 rounded-full bg-[#00C853] opacity-20 animate-ping" />
                  )}
                  <div
                    className="w-14 h-14 rounded-full border-[3px] flex items-center justify-center font-bold text-lg transition-transform duration-300 group-hover:scale-110 relative z-10 bg-[#050B08]"
                    style={{
                      borderColor: step.color,
                      color: step.color,
                      boxShadow: `0 0 24px ${step.color}30, inset 0 0 12px ${step.color}10`,
                    }}
                  >
                    {step.done ? <CheckCircle2 size={26} style={{ color: step.color }} /> : i + 1}
                  </div>
                </div>

                {/* Card content */}
                <div className="bg-transparent group-hover:bg-[#0C1812]/80 group-hover:backdrop-blur-md border border-transparent group-hover:border-[#00C853]/20 rounded-2xl p-4 transition-all duration-300 -mt-2 group-hover:-mt-4 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                  <span className="text-[11px] text-[#00C853] font-bold tracking-[0.1em] uppercase mb-1.5 block">{step.weeks}</span>
                  <h3 className="text-white font-black text-base mb-2 group-hover:text-[#B2FF59] transition-colors">{step.title}</h3>
                  <p className="text-[#8FA99A] text-[13px] leading-relaxed group-hover:text-[#A9C3B4] transition-colors">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden flex flex-col gap-0 max-w-md mx-auto relative pl-4">
          {/* Vertical Connector Line */}
          <div className="absolute top-0 bottom-0 left-[2.2rem] w-1 bg-white/[0.02] rounded-full">
            <motion.div
              className="w-full rounded-full bg-gradient-to-b from-[#00C853] via-[#B2FF59] to-transparent shadow-[0_0_15px_rgba(0,200,83,0.5)] origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.weeks}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-6 group relative z-10 pb-10 last:pb-0"
            >
              {/* Node */}
              <div className="relative flex-shrink-0 mt-1">
                {step.done && (
                  <div className="absolute inset-0 rounded-full bg-[#00C853] opacity-20 animate-ping" />
                )}
                <div
                  className="w-12 h-12 rounded-full border-[3px] flex items-center justify-center font-bold text-base transition-transform duration-300 group-hover:scale-110 bg-[#050B08]"
                  style={{
                    borderColor: step.color,
                    color: step.color,
                    boxShadow: `0 0 20px ${step.color}30, inset 0 0 10px ${step.color}10`,
                  }}
                >
                  {step.done ? <CheckCircle2 size={22} style={{ color: step.color }} /> : i + 1}
                </div>
              </div>

              {/* Card content */}
              <div className="flex-1 bg-transparent group-hover:bg-[#0C1812]/80 group-hover:backdrop-blur-md border border-transparent group-hover:border-[#00C853]/20 rounded-2xl p-5 -mt-3 transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <span className="text-[11px] text-[#00C853] font-bold tracking-[0.1em] uppercase mb-1 block">{step.weeks}</span>
                <h3 className="text-white font-black text-lg mb-2 group-hover:text-[#B2FF59] transition-colors">{step.title}</h3>
                <p className="text-[#8FA99A] text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

