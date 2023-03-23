import { RxTwitterLogo, RxDiscordLogo } from "react-icons/rx"
import LogoMark from "@/assets/LogoMark.svg"
import IconButton from "@/components/ui/IconButton"
import Image from "next/image"
import Link from "next/link"
type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="divider-white divide-y-[1px] divide-white dark:divide-neutral-800">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <span className="text-2xl">Join us on Discord</span>
          <Link
            href="/"
            className="flex items-center justify-center gap-4 self-start rounded-xl
            bg-[#5865F2] p-3 text-white shadow-lg hover:bg-indigo"
          >
            <RxDiscordLogo size={24} className="fill-tx-dark" />
            <span>Enter Discord</span>
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-between gap-4 py-6 px-4 sm:flex-row sm:items-center">
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
        <p className="text-xs sm:text-base">
          Pixelus {new Date().getFullYear()} &copy; All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <IconButton>
            <RxDiscordLogo size={24} />
          </IconButton>
          <IconButton>
            <RxTwitterLogo size={24} />
          </IconButton>
        </div>
      </div>
    </footer>
  )
}
