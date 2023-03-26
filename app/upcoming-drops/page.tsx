import Card from "@/components/Card"
import React from "react"

type Props = {}

export default function UpcomingProjectsPage({}: Props) {
  return (
    <div className="container mx-auto flex-1 p-4">
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
  )
}
