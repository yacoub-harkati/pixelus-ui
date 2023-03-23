import DiscordIcon from "@/components/ui/DiscordIcon"
import TwitterIcon from "@/components/ui/TwitterIcon"
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
            bg-[#5865F2] p-3 text-white shadow-lg"
          >
            <DiscordIcon width="24" height="18" className="fill-tx-dark" />
            <span>Enter Dicord</span>
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
        <p>Pixelus {new Date().getFullYear()} &copy; All Rights Reserved.</p>
        <div className="flex gap-4">
          <IconButton>
            <DiscordIcon width="24" height="18" />
          </IconButton>
          <IconButton>
            <TwitterIcon width="24" height="20" />
          </IconButton>
        </div>
      </div>
    </footer>
  )
}
