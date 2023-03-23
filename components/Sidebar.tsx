import Image from "next/image"
import LogoMark from "@/assets/LogoMark.svg"
import IconButton from "@/components/ui/IconButton"
import {
  XMarkIcon,
  HomeIcon,
  CalendarDaysIcon,
  QuestionMarkCircleIcon,
  LightBulbIcon,
  MegaphoneIcon,
  ChevronDownIcon,
  AtSymbolIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline"
import DiscordIcon from "@/components/ui/DiscordIcon"
import TwitterIcon from "@/components/ui/TwitterIcon"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import useMediaQuery from "@/hooks/useMediaQuery"
import GradientButton from "@/components/ui/GradientButton"

type Props = {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface LinkComponentProps {
  innerText: string
  Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  href?: string
}

function SidebarLink({ innerText, Icon, href = "/" }: LinkComponentProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 hover:text-orange-light"
    >
      <Icon className="h-8 sm:h-9" />
      <span className="text-xl sm:text-2xl">{innerText}</span>
    </Link>
  )
}

function SocialsElement({ innerText, Icon }: LinkComponentProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <div>
      <div
        className="flex cursor-pointer items-center gap-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon className="h-8 sm:h-9" />
        <span className="text-xl sm:text-2xl">{innerText}</span>
        <ChevronDownIcon className={`h-4 sm:h-6 ${isOpen && "rotate-180"}`} />
      </div>
      {isOpen && (
        <div className="m-6 flex flex-wrap gap-2">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-xl border-[1px] border-white p-3 shadow-lg hover:bg-gray-100 dark:border-stroke-dark hover:dark:bg-secondary-dark"
          >
            <div className="rounded-xl border-[1px] border-white p-2 dark:border-stroke-dark">
              <TwitterIcon width="24" height="20" />
            </div>
            <span>Twitter</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-xl border-[1px] border-white p-3 shadow-lg hover:bg-gray-100 dark:border-stroke-dark hover:dark:bg-secondary-dark"
          >
            <div className="rounded-xl border-[1px] border-white p-2 dark:border-stroke-dark">
              <DiscordIcon width="24" height="18" />
            </div>
            <span>Discord</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-xl border-[1px] border-white p-3 shadow-lg hover:bg-gray-100 dark:border-stroke-dark hover:dark:bg-secondary-dark"
          >
            <div className="rounded-xl border-[1px] border-white p-2 dark:border-stroke-dark">
              <AtSymbolIcon className="h-[23px]" />
            </div>
            <span>Email</span>
          </Link>
        </div>
      )}
    </div>
  )
}
function ToogleElement({ innerText, Icon }: LinkComponentProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <div>
      <div
        className="flex cursor-pointer items-center gap-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon className="h-6 sm:h-9" />
        <span className="text-xl sm:text-2xl">{innerText}</span>
        <ChevronDownIcon className={`h-4 sm:h-6 ${isOpen && "rotate-180"}`} />
      </div>
      {isOpen && (
        <div className="m-6 w-fit space-y-4 rounded-xl bg-secondary-light p-6  shadow-lg ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark">
          <span className="text-2xl md:text-3xl">
            Let&apos;s launch something big together.
          </span>
          <GradientButton className="w-fit p-3 text-sm md:text-base">
            Apply for launchpad
          </GradientButton>
        </div>
      )}
    </div>
  )
}

export default function Sidebar({ setIsSidebarOpen }: Props) {
  const { theme, setTheme } = useTheme()
  const isBellowMediumScreen = useMediaQuery("(max-width: 640px)")
  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <div
      className="fixed inset-0 bg-primary-dark/50"
      onClick={(e) => {
        setIsSidebarOpen(false)
      }}
    >
      <div
        className="fixed bottom-0 top-0 left-0 w-full overflow-y-auto border-r-[1px] border-white bg-primary-light py-6 px-4 text-tx-light shadow-lg dark:border-stroke-dark dark:bg-primary-dark dark:text-tx-dark md:w-[560px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between md:ml-[10%]">
          <div className="flex items-center md:gap-4">
            <Image src={LogoMark} alt="pixelus-logo" className="h-8 md:h-12" />
            <div className="flex flex-col">
              <span className="font-script text-2xl leading-[1.1] md:text-3xl">
                Pixelus
              </span>
              <span className="text-xs leading-[1.1] md:text-base">
                Launchpad
              </span>
            </div>
          </div>
          <IconButton onClick={handleTheme} className="ml-auto">
            {theme === "dark" ? (
              <MoonIcon className="pointer-events-none h-6" />
            ) : theme === "light" ? (
              <SunIcon className="pointer-events-none h-6" />
            ) : (
              <MoonIcon className="pointer-events-none h-6" />
            )}
          </IconButton>
          <IconButton
            className="ml-4 p-1"
            onClick={() => setIsSidebarOpen(false)}
          >
            <XMarkIcon className="pointer-events-none h-8" />
          </IconButton>
        </div>
        <nav className="ml-6 mt-12 space-y-4 sm:ml-24">
          <SidebarLink Icon={HomeIcon} innerText="Home Page" />
          <SidebarLink
            href="/upcoming-drops"
            Icon={CalendarDaysIcon}
            innerText="Upcoming Drops"
          />
          <SidebarLink
            href="/services"
            Icon={LightBulbIcon}
            innerText="Services"
          />
          <SocialsElement Icon={QuestionMarkCircleIcon} innerText="Support" />
          <ToogleElement Icon={MegaphoneIcon} innerText="Creators" />
        </nav>
      </div>
    </div>
  )
}
