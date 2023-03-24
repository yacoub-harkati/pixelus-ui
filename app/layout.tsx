import "./globals.css"
import ThemeProvider from "@/components/ThemeProvider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Pixelus | Launchpad",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen flex-1 flex-col bg-primary-light font-sans text-sm text-tx-light dark:bg-primary-dark dark:text-tx-dark sm:text-base">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
