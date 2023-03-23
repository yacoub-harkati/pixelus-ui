"use client"
import { useState } from "react"

type Props = {
  time: string
  tooltip: string
}

export default function TimeCase({ time, tooltip }: Props) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-secondary-light p-2 text-center ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark">
      <span
        className=""
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onPointerOver={() => setHovered(true)}
        onPointerCancel={() => setHovered(false)}
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
