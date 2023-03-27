import Card from "@/components/Card"
import CardFilter from "@/components/ui/CardFilter"

type Props = {}

export default function UpcomingProjectsPage({}: Props) {
  return (
    <div className="flex-1">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-12 px-4 md:flex-row">
        <p className="text-xl md:text-[2rem]">Upcoming Drops</p>
        <CardFilter />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-5 lg:grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
