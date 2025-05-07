import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TEEDIN EASY - ค้นหา ซื้อ เช่า ขาย อสังหาริมทรัพย์",
  description: "เว็บไซต์ค้นหาอสังหาริมทรัพย์ ซื้อ ขาย เช่า บ้าน คอนโด ทาวน์เฮาส์",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
