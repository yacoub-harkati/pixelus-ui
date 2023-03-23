"use client"

import { ThemeProvider } from "next-themes"
import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Provider({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  )
}
