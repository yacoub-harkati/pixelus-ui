import Carroussel from "@/components/Carroussel"
import { LinkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Card from "@/components/Card"
import Image from "next/image"
import solanaLogo from "@/assets/solana.png"
import GradientButton from "@/components/ui/GradientButton"
import TypingText from "@/components/ui/TypingText"

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container mx-auto py-6 px-4">
        <Carroussel />
      </div>
      <div className="container mx-auto p-4">
        <div className="flex justify-between">
          <p className="text-xl md:text-[2rem]">Live Drops</p>
          <Link
            href="/upcoming-drops?live=true"
            className="flex items-center justify-between gap-2 rounded-2xl bg-secondary-light px-3 py-2 ring-1 ring-white hover:bg-gray-100 dark:bg-secondary-dark dark:ring-stroke-dark hover:dark:bg-stroke-dark"
          >
            <span className="text-base md:text-xl">View All</span>
            <LinkIcon className="h-4 md:h-6" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-5 lg:grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <p className="text-xl md:text-[2rem]">Upcoming Drops</p>
          <Link
            href="/upcoming-drops"
            className="flex items-center justify-between gap-2 rounded-2xl bg-secondary-light px-3 py-2 ring-1 ring-white hover:bg-gray-100 dark:bg-secondary-dark dark:ring-stroke-dark hover:dark:bg-stroke-dark"
          >
            <span className="text-base md:text-xl">View All</span>
            <LinkIcon className="h-4 md:h-6" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="flex shrink-0 basis-1/2 items-center justify-center">
            <div className="flex flex-col justify-center gap-4 rounded-3xl bg-secondary-light p-12 shadow-lg ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark">
              <TypingText
                title="| Working on a cool project of your own?"
                className="text-base"
              />
              <span className="text-2xl md:text-3xl">
                Let&apos;s launch something big <br />
                together.
              </span>
              <div className="flex flex-col gap-4 sm:flex-row">
                <GradientButton className="p-3 text-center text-sm md:text-base">
                  Apply for launchpad
                </GradientButton>
                <div className="flex cursor-pointer items-center justify-center rounded-xl py-3 px-8 text-center text-sm ring-1 ring-white hover:bg-gray-100 dark:ring-stroke-dark hover:dark:bg-stroke-dark md:text-base">
                  Services
                </div>
              </div>
            </div>
          </div>
          <div className=" shrink-0 basis-1/2">
            <Image
              src={solanaLogo}
              alt="solana-logo"
              className="h-full max-h-[500px] w-full object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
