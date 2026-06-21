'use client'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion'

const technologies = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#FFFFFF', darkIcon: true },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#FFFFFF', darkIcon: true },
]

export function TechStack() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [40, -40]), { stiffness: 60, damping: 20 })

  return (
    <section ref={ref} className="bg-[#08110D] py-20 px-6 relative overflow-hidden section-bridge-bottom">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,200,83,0.03)_0%,transparent_70%)] pointer-events-none" />

      <motion.div style={{ y }} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#00C853] text-sm font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#00C853]/50" />
            Modern Stack
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#00C853]/50" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Learn the Tools{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#00C853] to-[#B2FF59] bg-clip-text text-transparent">
                Companies Use
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C853]/60 to-transparent" />
            </span>
          </h2>
        </motion.div>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative flex flex-col items-center justify-center w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] bg-[#0E1713]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl cursor-default transition-all duration-300"
            >
              {/* Dynamic Glow based on tech color */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${tech.color}20 0%, transparent 70%)` }}
              />
              
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `linear-gradient(to bottom right, ${tech.color}60, transparent)`, maskImage: 'linear-gradient(#fff 0 0)', maskComposite: 'exclude', padding: '1px' }} />

              {/* Icon */}
              <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 mb-3 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_currentColor] transition-all duration-300" style={{ color: tech.color }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={`w-full h-full object-contain ${tech.darkIcon ? 'invert' : ''}`}
                />
              </div>
              
              <span className="text-[#8FA99A] text-xs sm:text-sm font-semibold group-hover:text-white transition-colors relative z-10">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
