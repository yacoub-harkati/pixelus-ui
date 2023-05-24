import React, { ClassAttributes, ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: any
  onClick?: () => void
}

export default function IconButton({ children, onClick, className }: Props) {
  return (
    <div
      className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-secondary-light p-3 shadow-lg ring-1 ring-white hover:bg-gray-100 dark:bg-secondary-dark dark:ring-stroke-dark hover:dark:bg-stroke-dark ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
