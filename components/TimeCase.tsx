"use client"
import { useState } from "react"
import { motion as m } from "framer-motion"

type Props = {
  time: string
  tooltip: string
}

export default function TimeCase({ time, tooltip }: Props) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      className="relative flex h-5 w-5 items-center justify-center rounded-md bg-secondary-light p-1 text-center ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark lg:h-6 lg:w-6 lg:rounded-lg"
    >
      <span>{time}</span>
      {hovered && (
        <m.span
          initial={{ opacity: 0, x: "50%", y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "tween", duration: 0.3 },
          }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute -top-10 right-1/2 transform rounded-md bg-secondary-light p-1 text-center shadow-xl ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark md:-top-12"
        >
          {tooltip}
        </m.span>
      )}
    </div>
  )
}
