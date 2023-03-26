import Carroussel from "@/components/Carroussel"
import { LinkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Card from "@/components/Card"

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
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
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
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  )
}
