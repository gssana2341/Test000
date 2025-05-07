import Image from "next/image"
import Link from "next/link"
import { SearchBar } from "@/components/search-bar"
import { PropertyCard } from "@/components/property-card"
import { FeaturedProperty } from "@/components/featured-property"
import { CityGallery } from "@/components/city-gallery"
import { properties } from "@/lib/data"

export default function Home() {
  // กลุ่มอสังหาริมทรัพย์ตามประเภท
  const rentProperties = properties.filter((property) => property.isRent)
  const saleProperties = properties.filter((property) => property.isSale)

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2796&auto=format&fit=crop"
          alt="City skyline at night"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60">
          <div className="container mx-auto px-4 pt-20 md:pt-32">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Property Listings - For Rent */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">อสังหาริมทรัพย์เช่า พร้อมอยู่/ลงทุน ราคาดี ทำเลเด่น</h2>
          <Link
            href="/all-properties?type=rent"
            className="text-sm text-blue-500 hover:underline rounded-full bg-blue-50 px-3 py-1 flex items-center"
          >
            ดูทั้งหมด
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {rentProperties.slice(0, 5).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Property Listings - For Sale */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">ประกาศขาย บ้าน/คอนโด/ที่ดิน พร้อมอยู่ ราคาดี ทำเลเยี่ยม!</h2>
          <Link
            href="/all-properties?type=sale"
            className="text-sm text-blue-500 hover:underline rounded-full bg-blue-50 px-3 py-1 flex items-center"
          >
            ดูทั้งหมด
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {saleProperties.slice(0, 5).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Featured Property - Rolling Gallery */}
      <div className="relative w-full flex flex-col items-center py-10 gap-10 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            โครงการใหม่ ใกล้รถไฟฟ้า เดินทางสะดวก เริ่มต้นที่ 5.2 ล้านบาท
          </h2>
          <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <FeaturedProperty />
          </div>
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Third Property Section - Mixed */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">ประกาศขาย บ้าน/คอนโด/ที่ดิน ทำเลทอง ลงทุนคุ้มคุ้ม อยู่เองก็สบาย</h2>
          <Link
            href="/all-properties"
            className="text-sm text-blue-500 hover:underline rounded-full bg-blue-50 px-3 py-1 flex items-center"
          >
            ดูทั้งหมด
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {properties.slice(10, 15).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Fourth Property Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">ประกาศ เช่า/ขาย บ้าน/คอนโด/ที่ดิน ใกล้รถไฟฟ้า รำคาดี แหล่งโลเคชั่นครบครัน</h2>
          <Link
            href="/all-properties"
            className="text-sm text-blue-500 hover:underline rounded-full bg-blue-50 px-3 py-1 flex items-center"
          >
            ดูทั้งหมด
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {properties.slice(15, 20).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* City Gallery */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">ทำเลยอดนิยม</h2>
        <CityGallery />
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TEEDIN EASY</h3>
              <p className="text-sm mb-4">
                เว็บไซต์อสังหาริมทรัพย์ที่รวมที่อยู่อาศัย
                <br />
                ทั้งซื้อ ขาย และเช่าไว้ที่เดียว
              </p>
              <div className="flex gap-2 mt-4">
                <Link href="#" className="bg-white rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link href="#" className="bg-white rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link href="#" className="bg-white rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">เมนูหลัก</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/">หน้าแรก</Link>
                </li>
                <li>
                  <Link href="/buy">ซื้อ</Link>
                </li>
                <li>
                  <Link href="/rent">เช่า</Link>
                </li>
                <li>
                  <Link href="/sell">ขาย</Link>
                </li>
                <li>
                  <Link href="/news">ข่าวสาร</Link>
                </li>
                <li>
                  <Link href="/contact">ติดต่อเรา</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">เข้าใช้งาน</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/login">เข้าสู่ระบบ</Link>
                </li>
                <li>
                  <Link href="/register">สมัครใช้งาน</Link>
                </li>
                <li>
                  <Link href="/favorites">สินค้าที่ชอบ</Link>
                </li>
                <li>
                  <Link href="/history">ประวัติการเข้าชม</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">ติดต่อ</h3>
              <ul className="space-y-2 text-sm">
                <li>02-123-4567</li>
                <li>contact@teedineasy.com</li>
                <li>123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
