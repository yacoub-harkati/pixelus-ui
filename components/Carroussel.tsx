import Image from "next/image"
import CarrousselBanner from "@/assets/carroussel-banner.png"
import IconButton from "@/components/ui/IconButton"
import React from "react"
import { LinkIcon } from "@heroicons/react/24/outline"
import { RxTwitterLogo, RxDiscordLogo } from "react-icons/rx"
import Timer from "@/components/Timer"

type Props = {}

export default function Carroussel({}: Props) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl bg-secondary-light shadow-lg ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark sm:flex-row">
      <div className="sm:flex-[6]">
        <Image
          src={CarrousselBanner}
          className="aspect-video h-full w-full object-cover ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark"
          alt="Banner-Image"
        />
      </div>
      <div className="flex flex-col gap-4 px-6 py-9 sm:flex-[3] sm:px-9 md:pt-14">
        <p className="text-3xl font-semibold sm:text-4xl">WITCASTS</p>
        <p className="max-w-[80%] text-xl sm:text-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Timer />
        <div className="mt-auto flex justify-end gap-2 px-4">
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
