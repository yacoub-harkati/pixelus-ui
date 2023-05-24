import React from "react"
import TimeCase from "@/components/TimeCase"

type Props = {
  className?: string
}

export default function Timer({ className }: Props) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-orange-default to-indigo p-[1px]">
      <div
        className={`flex flex-wrap items-center justify-center gap-1 rounded-2xl bg-primary-light py-2 px-1 text-xs dark:bg-primary-dark md:gap-2 md:text-base ${className}`}
      >
        <p className="text-[0.65rem] md:text-base">Starts in</p>
        <div className="flex gap-1">
          <TimeCase time="29" tooltip="Days" />
          <TimeCase time="12" tooltip="Houres" />
          <TimeCase time="30" tooltip="Minutes" />
          <TimeCase time="59" tooltip="Seconds" />
        </div>
      </div>
    </div>
  )
}
