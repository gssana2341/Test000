"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="px-2 py-1 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                    หน้าแรก
                  </Link>
                  <Link href="/buy" className="px-2 py-1 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                    ซื้อ
                  </Link>
                  <Link
                    href="/rent"
                    className="px-2 py-1 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    เช่า
                  </Link>
                  <Link
                    href="/sell"
                    className="px-2 py-1 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    ขาย
                  </Link>
                  <Link
                    href="/news"
                    className="px-2 py-1 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    ข่าวสาร
                  </Link>
                  <Link
                    href="/contact"
                    className="px-2 py-1 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    ติดต่อเรา
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="font-bold text-xl">
              TEEDIN EASY
            </Link>

            <nav className="hidden md:flex ml-8 space-x-4">
              <Link href="/" className="px-2 py-1 hover:bg-blue-700 rounded-md">
                หน้าแรก
              </Link>
              <Link href="/buy" className="px-2 py-1 hover:bg-blue-700 rounded-md">
                ซื้อ
              </Link>
              <Link href="/rent" className="px-2 py-1 hover:bg-blue-700 rounded-md">
                เช่า
              </Link>
              <Link href="/sell" className="px-2 py-1 hover:bg-blue-700 rounded-md">
                ขาย
              </Link>
              <Link href="/news" className="px-2 py-1 hover:bg-blue-700 rounded-md">
                ข่าวสาร
              </Link>
              <Link href="/contact" className="px-2 py-1 hover:bg-blue-700 rounded-md">
                ติดต่อเรา
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-blue-700">
                เข้าสู่ระบบ
              </Button>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">สมัครสมาชิก</Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
