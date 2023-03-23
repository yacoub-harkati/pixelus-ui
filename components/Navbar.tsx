"use client"
import Link from "next/link"
import Image from "next/image"
import LogoMark from "@/assets/LogoMark.svg"
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"
import GradientButton from "@/components/ui/GradientButton"
import IconButton from "@/components/ui/IconButton"
import useMediaQuery from "@/hooks/useMediaQuery"
import Sidebar from "@/components/Sidebar"
import { useState } from "react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  const isAboveLargeScreen = useMediaQuery("(min-width: 1024px)")
  const isBellowMediumScreen = useMediaQuery("(max-width: 640px)")

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  return (
    <div className="container relative mx-auto flex flex-row-reverse items-center justify-between gap-5 py-6 px-4 lg:flex-row">
      <IconButton onClick={() => setIsSidebarOpen(true)}>
        <Bars3Icon className="h-6 w-6" />
      </IconButton>
      <Link href="/">
        <header className="flex items-center gap-2 md:gap-4">
          <Image
            src={LogoMark}
            alt="pixelus-logo"
            width={isBellowMediumScreen ? 37 : 55}
            height={isBellowMediumScreen ? 32 : 47}
          />
          <div className="flex flex-col">
            <span className="font-script text-2xl leading-[1.1] md:text-3xl">
              Pixelus
            </span>
            <span className="text-xs leading-[1.1] md:text-base">
              Launchpad
            </span>
          </div>
        </header>
      </Link>
      {isAboveLargeScreen && (
        <div className="ml-auto flex items-center gap-4">
          <IconButton onClick={handleTheme}>
            {theme === "dark" ? (
              <MoonIcon className="pointer-events-none h-6" />
            ) : theme === "light" ? (
              <SunIcon className="pointer-events-none h-6" />
            ) : (
              <MoonIcon className="pointer-events-none h-6" />
            )}
          </IconButton>
          <Link
            href="/upcoming-drops"
            className="rounded-xl bg-secondary-light py-3 px-6 shadow-lg ring-1 ring-white hover:bg-gray-100 dark:bg-secondary-dark dark:ring-stroke-dark hover:dark:bg-stroke-dark"
          >
            Upcoming Drops
          </Link>
          <Link href="/">
            <GradientButton className="p-3">Apply for launchpad</GradientButton>
          </Link>
        </div>
      )}
      {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
    </div>
  )
}
