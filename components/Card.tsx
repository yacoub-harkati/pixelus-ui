import Image from "next/image"
import React from "react"
import DegodsBanner from "@/assets/degods.png"
import Link from "next/link"
import { IoWalletOutline } from "react-icons/io5"
import Timer from "./Timer"

type Props = {}

function LiveButton() {
  return (
    <Link
      href="#"
      className="items-centers flex w-full shrink-0 cursor-pointer justify-center gap-2 rounded-xl bg-orange-default py-2 text-base font-semibold shadow-orange-button shadow-orange-default/30 ring-1 ring-orange-light md:text-lg"
    >
      <IoWalletOutline size={24} />
      Live
    </Link>
  )
}

function ComingSoonButton() {
  return (
    <Link
      href="/"
      className="items-centers flex w-full shrink-0 cursor-pointer justify-center gap-2 rounded-xl bg-secondary-light py-2 text-base font-semibold ring-1 ring-white hover:bg-gray-100 dark:bg-secondary-dark dark:ring-stroke-dark hover:dark:bg-stroke-dark  md:text-lg"
    >
      Coming Soon
    </Link>
  )
}

export default function Card({}: Props) {
  return (
    <div className="overflow-hidden rounded-xl bg-secondary-light shadow-lg ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark">
      <div className="aspect-video overflow-hidden border-b-[1px] border-white dark:border-stroke-dark">
        <Image
          src={DegodsBanner}
          alt="banner-{sk}"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-2 md:p-4">
        <p className="text-sm font-semibold uppercase md:text-xl">Degods X+</p>
        <div className="mt mt-2 flex justify-between md:mt-3">
          <div className="flex flex-col">
            <span className="text-sm md:text-lg">Supply</span>
            <span className="text-sm md:text-lg">10000</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-lg">Price</span>
            <span className="text-sm font-semibold uppercase text-green-400 md:text-lg">
              1 Sol
            </span>
          </div>
        </div>
      </div>
      <div className="mb-2 p-1 md:px-4">
        {false ? <LiveButton /> : true ? <Timer /> : <ComingSoonButton />}
      </div>
    </div>
  )
}
