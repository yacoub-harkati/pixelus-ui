"use client"
import Image from "next/image"
import CarrousselBanner from "@/assets/carroussel-banner.png"
import IconButton from "@/components/ui/IconButton"
import React, { useState, useRef, useEffect } from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LinkIcon,
} from "@heroicons/react/24/outline"
import { RxTwitterLogo, RxDiscordLogo } from "react-icons/rx"
import Timer from "@/components/Timer"
import useMediaQuery from "@/hooks/useMediaQuery"
import { useInView, motion as m } from "framer-motion"
import randomUUID from "@/utils/randomUUID"

type Props = {
  num: number
  setActiveDot: React.Dispatch<React.SetStateAction<number>>
}

function Slide({ num, setActiveDot }: Props) {
  const sliderRef = useRef(null)
  const isSliderVisible = useInView(sliderRef, { amount: 1 })
  useEffect(() => {
    if (isSliderVisible) {
      setActiveDot(num)
    }
  }, [isSliderVisible, num, setActiveDot])
  return (
    <div
      ref={sliderRef}
      className="relative grid h-[520px] shrink-0 basis-full snap-center md:grid-cols-6"
    >
      <div className="relative md:col-span-4">
        <Image
          src={CarrousselBanner}
          className={`h-full w-full border-r-[1px] border-white object-cover dark:border-stroke-dark dark:bg-secondary-dark`}
          alt="Banner-Image"
        />
        <span className="absolute inset-0 bg-gradient-to-b from-primary-dark/0 to-primary-dark/50"></span>
      </div>
      <div className="flex h-full flex-col gap-4 border-r-[1px] border-white px-6 py-6 dark:border-stroke-dark sm:px-9 md:col-span-2 lg:pt-28">
        <p className="text-3xl font-semibold sm:text-4xl">WITCASTS ${num}</p>
        <p className="max-w-[80%] text-base sm:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Timer className="w-fit" />
        <div className="absolute bottom-0 right-0 flex justify-end gap-2 p-4">
          <IconButton className="rounded-xl">
            <LinkIcon className="h-12" />
          </IconButton>
          <IconButton className="rounded-xl">
            <RxTwitterLogo size={24} />
          </IconButton>
          <IconButton className="rounded-xl">
            <RxDiscordLogo size={24} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default function Carroussel() {
  const isAboveMediumScreen = useMediaQuery("(min-width: 768px)")
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeDot, setActiveDot] = useState(0)

  const content = new Array(4)
    .fill("")
    .map((_, i) => (
      <Slide key={randomUUID()} setActiveDot={setActiveDot} num={i} />
    ))

  const slideRef = useRef<HTMLDivElement>(null)
  const firstSlideRef = useRef<HTMLDivElement>(null)
  const lastSlideRef = useRef<HTMLDivElement>(null)
  const isFirstSlideInView = useInView(firstSlideRef, { amount: 1 })
  const isLastSlideInView = useInView(lastSlideRef, { amount: 1 })

  useEffect(() => {
    if (!isAboveMediumScreen && slideRef.current) {
      slideRef.current.style.transform = `translateX(0)`
    }
  }, [isAboveMediumScreen])

  function NextSlide() {
    setActiveSlide((prev) => {
      if (prev === content.length - 1) return 0
      return prev + 1
    })
  }
  function PrevSlide() {
    setActiveSlide((prev) => {
      if (prev <= 0) return content.length - 1
      return prev - 1
    })
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-secondary-light shadow-lg ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark ">
      <div
        ref={slideRef}
        className={`flex snap-x snap-mandatory overflow-x-auto ${
          !isFirstSlideInView &&
          !isLastSlideInView &&
          "transition-transform duration-700 ease-in-out"
        } scrollbar-hide md:overflow-visible`}
        style={{
          transform: `translateX(${
            isAboveMediumScreen ? Math.abs(activeSlide) * -100 : 0
          }%)`,
        }}
      >
        {content}
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 flex gap-1 p-6 md:justify-center">
        {content.map((_, i) => (
          <m.div
            initial={{ scaleX: activeDot === i ? 0.4 : 1 }}
            animate={{
              scaleX: 1,
              transition: { type: "tween", duration: 0.4 },
            }}
            key={randomUUID()}
            className={`h-2 ${
              activeDot === i
                ? "w-5  bg-stroke-dark dark:bg-primary-light"
                : "w-2 bg-white dark:bg-stroke-dark"
            } cursor-pointer rounded-full`}
            onClick={() => setActiveSlide(i)}
          ></m.div>
        ))}
      </div>

      {isAboveMediumScreen && (
        <div className="absolute top-1/2 z-10 flex w-full -translate-y-1/2 transform justify-between px-4">
          <IconButton onClick={PrevSlide}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={NextSlide}>
            <ChevronRightIcon />
          </IconButton>
        </div>
      )}
    </div>
  )
}
