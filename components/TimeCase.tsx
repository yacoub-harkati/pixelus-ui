"use client"
import { useState } from "react"

type Props = {
  time: string
  tooltip: string
}

export default function TimeCase({ time, tooltip }: Props) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="relative flex h-6 w-6 items-center justify-center rounded-md bg-secondary-light p-2 text-center ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark lg:h-8 lg:w-8 lg:rounded-lg">
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onPointerDown={() => setHovered(true)}
        onPointerUp={() => setHovered(false)}
      >
        {time}
      </span>
      {hovered && (
        <span className="absolute -top-14 right-1/2 translate-x-1/2 transform rounded-md bg-secondary-light p-2 text-center shadow-xl ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark">
          {tooltip}
        </span>
      )}
    </div>
  )
}
