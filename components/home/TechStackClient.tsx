'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef,useState } from 'react'

type Instructor = {
  instructor?: string
  full_name?: string
}

type Batch = {
  name: string
  start_date: string
  end_date?: string | null
  description?: string | null
}

type Course = {
  name: string
  description?: string | null
  image?: string | null
  instructors?: Instructor[]
  upcomingBatches?: Batch[]
}

function formatBatchDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

function getInstructorLabel(instructor: Instructor): string {
  return (
    instructor.full_name ||
    instructor.instructor ||
    'Unknown instructor'
  )
}

export function TechStackClient({
  courses,
}: {
  courses: Course[]
}) {
  const ref = useRef<HTMLElement>(null)

  const [expandedCourse, setExpandedCourse] = useState<string | null>(
    null
  )

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      ref={ref}
      className="
        relative
        overflow-visible
        bg-[#ffffff]
        px-5
        py-20
        text-[#111916]
        transition-colors
        duration-300

        dark:bg-[#0f1713]
        dark:text-[#f2f7f4]

        sm:px-8
        lg:py-24
      "
    >
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 text-center"
        >
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-3
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#00d38d]
            "
          >
            <span
              className="
                h-px
                w-9
                bg-[#9aa99f]
                dark:bg-[#52625a]
              "
            />

            Our Courses

            <span
              className="
                h-px
                w-9
                bg-[#9aa99f]
                dark:bg-[#52625a]
              "
            />
          </div>

          <h2
            className="
              tv-course-title
              text-4xl
              font-black
              leading-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Learn the Skills{' '}
            <span className="text-[#00d38d]">
              Companies Need
            </span>
          </h2>
        </motion.div>

        {/* COURSES */}
        <div className="mx-auto flex max-w-5xl flex-col gap-4">

          {courses.length === 0 && (
            <p
              className="
                w-full
                text-center
                text-sm
                text-[#4a5a52]
                dark:text-[#aab7b0]
              "
            >
              No published courses found.
            </p>
          )}

          {courses.map((course, index) => {
            const isExpanded =
              expandedCourse === course.name

            return (
              <motion.article
                key={course.name}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  delay: 0.1 + index * 0.06,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  overflow-hidden
                  border
                  border-[#dce5df]
                  bg-[#ffffff]
                  text-left
                  transition-all
                  duration-300

                  dark:border-[#a1b1a7]
                  dark:bg-[#17211c00]

                  ${
                    isExpanded
                      ? `
                        shadow-[5px_8px_0_#a6b2ab]
                        dark:shadow-[5px_8px_0_#080d0a]
                      `
                      : `
                        hover:-translate-y-1
                        hover:shadow-[4px_6px_0_#a6b2ab]
                        dark:hover:shadow-[4px_6px_0_#080d0a]
                      `
                  }
                `}
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpandedCourse(
                      isExpanded ? null : course.name
                    )
                  }
                  aria-expanded={isExpanded}
                  className="
                    group
                    flex
                    w-full
                    flex-col
                    text-left
                    md:flex-row
                  "
                >

                  {course.image ? (
                    <div
                      className="
                        relative
                        h-44
                        w-full
                        shrink-0
                        overflow-hidden
                        md:h-auto
                        md:min-h-[150px]
                        md:w-52
                        lg:w-60
                      "
                    >
                      <img
                        src={course.image}
                        alt={course.name}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    </div>
                  ) : (
                    <div
                      className="
                        flex
                        h-44
                        w-full
                        shrink-0
                        items-center
                        justify-center
                        bg-[#0b2b1d]
                        dark:bg-[#28543c]

                        md:h-auto
                        md:min-h-[150px]
                        md:w-52
                        lg:w-60
                      "
                    >
                      <span
                        className="
                          text-sm
                          font-bold
                          text-[#00d38d]
                        "
                      >
                        TechVision
                      </span>
                    </div>
                  )}

                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      items-center
                      gap-6
                      p-5
                      sm:p-6
                    "
                  >
                    <div className="min-w-0 flex-1">

                      <p
                        className="
                          tv-mono
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#00d38d]
                        "
                      >
                        Course
                      </p>

                      <h3
                        className="
                          mt-1
                          text-xl
                          font-bold
                          leading-tight
                          text-[#111916]

                          dark:text-[#f2f7f4]

                          sm:text-2xl
                        "
                      >
                        {course.name}
                      </h3>

                      {course.instructors &&
                        course.instructors.length > 0 && (
                          <p
                            className="
                              tv-mono
                              mt-1
                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-[0.12em]
                              text-[#00a66f]
                              dark:text-[#62d99b]
                            "
                          >
                            {course.instructors
                              .map(getInstructorLabel)
                              .join(', ')}
                          </p>
                        )}

                      {!isExpanded &&
                        course.description && (
                          <div
                            className="
                              mt-3
                              line-clamp-2
                              max-w-3xl
                              text-sm
                              leading-6
                              text-[#333c37]

                              dark:text-[#b5c1ba]

                              [&_p]:m-0

                              [&_strong]:text-[#111916]
                              dark:[&_strong]:text-[#f2f7f4]
                            "
                            dangerouslySetInnerHTML={{
                              __html:
                                course.description,
                            }}
                          />
                        )}
                    </div>

                 
                    <div className="flex shrink-0 items-center gap-6">
                      <Link
                        href={`http://learn.techvision.edu.et/lms/courses/${course.name}`}
                        className="
                          flex
                          h-10
                          items-center
                          justify-center
                          border
                          border-[#dce5df]
                          px-4
                          text-xs
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#00d38d]
                          transition-all
                          duration-300
                          hover:border-[#00d38d]

                          dark:border-[#35443b]
                          dark:bg-[#1d2922]
                        "
                      >
                        Learn
                      </Link>

                      <span
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#dce5df]
                          text-xl
                          font-light
                          text-[#00d38d]
                          transition-all
                          duration-300

                          dark:border-[#35443b]
                          dark:bg-[#1d2922]

                          ${
                            isExpanded
                              ? 'rotate-45'
                              : 'group-hover:border-[#00d38d]'
                          }
                        `}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </div>
                </button>

                <div
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-500
                    ease-out

                    ${
                      isExpanded
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr]'
                    }
                  `}
                >
                  <div className="overflow-hidden">

                    <div
                      className="
                        border-t
                        border-[#dce5df]
                        px-5
                        pb-6
                        pt-5

                        dark:border-[#35443b]

                        sm:px-6
                      "
                    >

                      {/* DESCRIPTION */}
                      {course.description && (
                        <div
                          className="
                            max-w-4xl
                            text-sm
                            leading-7
                            text-[#333c37]

                            dark:text-[#b5c1ba]

                            [&_h1]:mb-3
                            [&_h1]:mt-5
                            [&_h1]:text-lg
                            [&_h1]:font-bold
                            [&_h1]:text-[#111916]
                            dark:[&_h1]:text-[#f2f7f4]

                            [&_h2]:mb-3
                            [&_h2]:mt-5
                            [&_h2]:text-base
                            [&_h2]:font-bold
                            [&_h2]:text-[#111916]
                            dark:[&_h2]:text-[#f2f7f4]

                            [&_h3]:mb-2
                            [&_h3]:mt-4
                            [&_h3]:font-bold
                            [&_h3]:text-[#111916]
                            dark:[&_h3]:text-[#f2f7f4]

                            [&_p]:mb-3

                            [&_strong]:font-semibold
                            [&_strong]:text-[#111916]
                            dark:[&_strong]:text-[#f2f7f4]

                            [&_ul]:ml-5
                            [&_ul]:list-disc

                            [&_ol]:ml-5
                            [&_ol]:list-decimal

                            [&_li]:mb-2
                          "
                          dangerouslySetInnerHTML={{
                            __html:
                              course.description,
                          }}
                        />
                      )}

                      {/* UPCOMING BATCHES */}
                      {course.upcomingBatches &&
                        course.upcomingBatches.length > 0 && (
                          <div
                            className="
                              mt-6
                              border-t
                              border-[#dce5df]
                              pt-5

                              dark:border-[#35443b]
                            "
                          >
                            <p
                              className="
                                tv-mono
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-[#00d38d]
                              "
                            >
                              Upcoming batches
                            </p>

                            <div
                              className="
                                mt-3
                                grid
                                gap-3
                                sm:grid-cols-2
                              "
                            >
                              {course.upcomingBatches.map(
                                (batch) => (
                                  <div
                                    key={`${batch.name}-${batch.start_date}`}
                                    className="
                                      rounded-lg
                                      border
                                      border-[#dce5df]
                                      bg-[#f7faf8]
                                      p-3

                                      dark:border-[#35443b]
                                      dark:bg-[#1d2922]
                                    "
                                  >
                                    <p
                                      className="
                                        text-sm
                                        font-semibold
                                        text-[#111916]

                                        dark:text-[#f2f7f4]
                                      "
                                    >
                                      {batch.name}
                                    </p>

                                    <p
                                      className="
                                        tv-mono
                                        mt-1
                                        text-[10px]
                                        text-[#68736d]

                                        dark:text-[#9eaaa3]
                                      "
                                    >
                                      {formatBatchDate(
                                        batch.start_date
                                      )}

                                      {batch.end_date
                                        ? ` – ${formatBatchDate(
                                            batch.end_date
                                          )}`
                                        : ''}
                                    </p>

                                    {batch.description && (
                                      <p
                                        className="
                                          mt-2
                                          text-xs
                                          leading-5
                                          text-[#59665e]

                                          dark:text-[#87968e]
                                        "
                                      >
                                        {batch.description}
                                      </p>
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}