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
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import useMediaQuery from "@/hooks/useMediaQuery"
import GradientButton from "@/components/ui/GradientButton"
import { RxTwitterLogo, RxDiscordLogo } from "react-icons/rx"
import { motion as m, AnimatePresence } from "framer-motion"

type Props = {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface LinkComponentProps {
  innerText: string
  Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  href?: string
  setIsSidebarOpen?: (a: boolean) => void
}
function SidebarLink({
  innerText,
  Icon,
  setIsSidebarOpen,
  href = "/",
}: LinkComponentProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 hover:text-orange-light"
      onClick={() => setIsSidebarOpen!(false)}
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
      <AnimatePresence>
        {isOpen && (
          <m.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            <div className=" m-6 flex flex-wrap gap-2">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-xl border-[1px] border-white p-3 shadow-lg hover:bg-gray-100 dark:border-stroke-dark hover:dark:bg-secondary-dark"
              >
                <div className="rounded-xl border-[1px] border-white p-2 dark:border-stroke-dark">
                  <RxTwitterLogo size={24} />
                </div>
                <span>Twitter</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-xl border-[1px] border-white p-3 shadow-lg hover:bg-gray-100 dark:border-stroke-dark hover:dark:bg-secondary-dark"
              >
                <div className="rounded-xl border-[1px] border-white p-2 dark:border-stroke-dark">
                  <RxDiscordLogo size={24} />
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
          </m.div>
        )}
      </AnimatePresence>
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
      <AnimatePresence>
        {isOpen && (
          <m.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            <div className="m-6 w-fit space-y-4 rounded-xl bg-secondary-light p-6  shadow-lg ring-1 ring-white dark:bg-secondary-dark dark:ring-stroke-dark">
              <span className="text-2xl md:text-3xl">
                Let&apos;s launch something big together.
              </span>
              <GradientButton className="w-fit p-3 text-sm md:text-base">
                Apply for launchpad
              </GradientButton>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Sidebar({ setIsSidebarOpen }: Props) {
  const { theme, setTheme } = useTheme()
  const isBellowMediumScreen = useMediaQuery("(max-width: 640px)")

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const variant = {
    hidden: {
      x: "-100%",
    },
    animate: {
      x: "0",
      transition: {
        delay: 0.2,
        duration: 0.2,
        type: "tween",
      },
    },
    exit: {
      x: "-100%",
    },
  }

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.3 } }}
      className="fixed inset-0 z-50 bg-primary-dark/50"
      onClick={(e) => {
        setIsSidebarOpen(false)
      }}
    >
      <m.div
        initial="hidden"
        animate="animate"
        exit="exit"
        custom={isBellowMediumScreen}
        variants={variant}
        className="fixed bottom-0 top-0 left-0 w-full overflow-y-auto border-r-[1px] border-white bg-primary-light py-6 px-4 text-tx-light shadow-lg scrollbar-hide dark:border-stroke-dark dark:bg-primary-dark dark:text-tx-dark md:w-[560px]"
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
          <SidebarLink
            Icon={HomeIcon}
            innerText="Home Page"
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <SidebarLink
            href="/upcoming-drops"
            Icon={CalendarDaysIcon}
            innerText="Upcoming Drops"
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <SidebarLink
            href="/services"
            Icon={LightBulbIcon}
            innerText="Services"
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <SocialsElement Icon={QuestionMarkCircleIcon} innerText="Support" />
          <ToogleElement Icon={MegaphoneIcon} innerText="Creators" />
        </nav>
      </m.div>
    </m.div>
  )
}
