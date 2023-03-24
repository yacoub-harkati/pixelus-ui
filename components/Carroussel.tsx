"use client"
import Image from "next/image"
import CarrousselBanner from "@/assets/carroussel-banner.png"
import IconButton from "@/components/ui/IconButton"
import React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LinkIcon,
} from "@heroicons/react/24/outline"
import { RxTwitterLogo, RxDiscordLogo } from "react-icons/rx"
import Timer from "@/components/Timer"
import useMediaQuery from "@/hooks/useMediaQuery"

type Props = {}

export function CarrousselItem({}: Props) {
  return (
    <div className="relative grid h-[520px] shrink-0 basis-full snap-center md:grid-cols-6">
      <div className="md:col-span-4">
        <Image
          src={CarrousselBanner}
          className={`h-full w-full object-cover ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark`}
          alt="Banner-Image"
        />
      </div>
      <div className="flex h-full flex-col gap-4 px-6 py-6 sm:px-9 md:col-span-2 md:pt-28">
        <p className="text-3xl font-semibold sm:text-4xl">WITCASTS</p>
        <p className="max-w-[80%] text-base sm:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Timer />
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

  return (
    <div className="relative overflow-hidden rounded-3xl bg-secondary-light shadow-lg ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark">
      <div className="flex snap-x snap-mandatory overflow-y-auto scrollbar-hide">
        <CarrousselItem />
        <CarrousselItem />
        <CarrousselItem />
        <CarrousselItem />
      </div>
      {isAboveMediumScreen && (
        <div className="absolute top-1/2 z-40 flex w-full -translate-y-1/2 transform justify-between px-4">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      )}
    </div>
  )
}
