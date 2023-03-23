import { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

export default function GradientButton({
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      className={`p3 rounded-xl bg-gradient-to-r from-orange-default to-indigo font-semibold uppercase text-tx-dark ring-1 ring-white dark:ring-stroke-dark ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
