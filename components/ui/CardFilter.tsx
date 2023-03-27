"use client"
import { useState, MouseEvent } from "react"
import useMeasure from "react-use-measure"

type Props = {}

export default function CardFilter({}: Props) {
  const [filter, setFilter] = useState("all")
  const [width, setWidth] = useState(null)
  const [tranformX, setTranformX] = useState(0)
  const [allRef, allBounds] = useMeasure()
  const [daysRef, daysBounds] = useMeasure()
  const [liveRef, LiveBounds] = useMeasure()
  const [passedRef, passedBounds] = useMeasure()
  const [containerRef, containerBounds] = useMeasure()

  function handleSelection(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement
    if (target.dataset.value) {
      setFilter(target.dataset.value)
      const value = target.dataset.value
      const bounds =
        value === "all"
          ? allBounds
          : value === "live"
          ? LiveBounds
          : value === "7days"
          ? daysBounds
          : value === "passed"
          ? passedBounds
          : allBounds
      setTranformX(bounds.left - containerBounds.left)
      setWidth(`${bounds.width}px`)
    }
  }

  console.log(filter)

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-sm shrink-0 basis-full overflow-hidden rounded-xl bg-secondary-light text-center shadow-lg ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark"
    >
      <div className=" flex justify-between ">
        <div
          ref={allRef}
          className={`flex-1 shrink-0 cursor-pointer py-3`}
          data-value="all"
          onClick={(e) => handleSelection(e)}
        >
          All
        </div>
        <div
          ref={liveRef}
          className={`flex-1 shrink-0 cursor-pointer py-3`}
          data-value="live"
          onClick={(e) => handleSelection(e)}
        >
          Live
        </div>
        <div
          ref={daysRef}
          className={`flex-1 shrink-0 cursor-pointer py-3`}
          data-value="7days"
          onClick={(e) => handleSelection(e)}
        >
          7Days
        </div>
        <div
          ref={passedRef}
          className={`flex-1 shrink-0 cursor-pointer py-3`}
          data-value="passed"
          onClick={(e) => handleSelection(e)}
        >
          Passed
        </div>
      </div>
      <div
        className="absolute bottom-0 h-1 w-20 rounded-2xl bg-gradient-to-r from-orange-default to-indigo transition-all duration-200"
        style={{
          transform: `translateX(${tranformX}px)`,
          width: width || allBounds.width,
        }}
      ></div>
    </div>
  )
}
