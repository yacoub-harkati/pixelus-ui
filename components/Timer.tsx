import React from "react"
import TimeCase from "@/components/TimeCase"

type Props = {}

export default function Timer({}: Props) {
  return (
    <div className="w-fit rounded-2xl bg-gradient-to-r from-orange-default to-indigo p-[1px] ring-1 ring-white dark:ring-stroke-dark">
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-primary-light p-3 dark:bg-primary-dark">
        <p className="text-lg">Starts in</p>
        <span>&#9679;</span>
        <div className="flex gap-2">
          <TimeCase time="29" tooltip="Days" />
          <TimeCase time="12" tooltip="Houres" />
          <TimeCase time="30" tooltip="Minutes" />
          <TimeCase time="59" tooltip="Seconds" />
        </div>
      </div>
    </div>
  )
}
