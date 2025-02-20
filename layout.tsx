import type React from "react"
import "@/styles/globals.css"
import { IBM_Plex_Mono } from "next/font/google"

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  )
}

