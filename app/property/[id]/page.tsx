import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Bed, Bath, Square, MapPin, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { properties } from "@/lib/data"

interface PropertyPageProps {
  params: {
    id: string
  }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  // ดึงข้อมูลอสังหาริมทรัพย์ตาม ID
  const property = properties.find((p) => p.id === Number.parseInt(params.id)) || properties[0]

  // ดึงอสังหาริมทรัพย์ที่คล้ายกัน
  const similarProperties = properties
    .filter((p) => p.id !== property.id && p.location === property.location)
    .slice(0, 3)

  // ใช้รูปภาพตามประเภทของอสังหาริมทรัพย์
  const getPropertyImage = (id: number) => {
    if (id % 5 === 1) {
      return "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop"
    } else if (id % 5 === 2) {
      return "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2674&auto=format&fit=crop"
    } else if (id % 5 === 3) {
      return "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
    } else if (id % 5 === 4) {
      return "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
    } else {
      return "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop"
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* ปุ่มย้อนกลับ */}
      <Link href="/" className="inline-flex items-center text-blue-600 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        กลับไปหน้าหลัก
      </Link>

      <div className="grid md:grid-cols-3 gap-8">
        {/* รายละเอียดอสังหาริมทรัพย์ */}
        <div className="md:col-span-2">
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h1 className="text-2xl font-bold mb-1">{property.title}</h1>
                <p className="text-gray-500">{property.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              {property.isRent && <Badge className="bg-blue-500">เช่า</Badge>}
              {property.isSale && <Badge className="bg-green-500">ขาย</Badge>}
              <p className="text-xl font-bold text-blue-600">{property.price}</p>
            </div>
          </div>

          {/* รูปภาพอสังหาริมทรัพย์ */}
          <div className="relative h-[400px] mb-6 rounded-lg overflow-hidden">
            <Image
              src={getPropertyImage(property.id) || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>

          {/* คุณสมบัติ */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex flex-col items-center">
              <Bed className="h-6 w-6 mb-2 text-blue-600" />
              <p className="text-sm font-medium">{property.bedrooms} ห้องนอน</p>
            </div>
            <div className="flex flex-col items-center">
              <Bath className="h-6 w-6 mb-2 text-blue-600" />
              <p className="text-sm font-medium">{property.bathrooms} ห้องน้ำ</p>
            </div>
            <div className="flex flex-col items-center">
              <Square className="h-6 w-6 mb-2 text-blue-600" />
              <p className="text-sm font-medium">{property.area} ตร.ม.</p>
            </div>
          </div>

          {/* รายละเอียด */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">รายละเอียด</h2>
            <p className="text-gray-700 mb-4">{property.description}</p>

            <h3 className="font-semibold mb-2">สิ่งอำนวยความสะดวก</h3>
            <ul className="grid grid-cols-2 gap-2 mb-4">
              {property.features?.map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* แผนที่ (จำลอง) */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">ตำแหน่งที่ตั้ง</h2>
            <div className="relative h-[300px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1577086664693-894d8405334a?q=80&w=2574&auto=format&fit=crop"
                alt="แผนที่"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500 flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {property.location}, กรุงเทพมหานคร
            </p>
          </div>
        </div>

        {/* ข้อมูลติดต่อและอสังหาริมทรัพย์ที่คล้ายกัน */}
        <div>
          {/* ข้อมูลติดต่อ */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">สนใจติดต่อ</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">ฝ่ายขาย TEEDIN EASY</p>
                  <p className="text-sm text-gray-500">ตอบกลับภายใน 24 ชั่วโมง</p>
                </div>
              </div>
              <Button className="w-full mb-2">โทรหาผู้ขาย</Button>
              <Button variant="outline" className="w-full">
                ส่งข้อความ
              </Button>
            </CardContent>
          </Card>

          {/* อสังหาริมทรัพย์ที่คล้ายกัน */}
          <div>
            <h2 className="text-xl font-semibold mb-4">อสังหาริมทรัพย์ที่คล้ายกัน</h2>
            <div className="space-y-4">
              {similarProperties.map((similar) => (
                <Link key={similar.id} href={`/property/${similar.id}`}>
                  <div className="flex gap-3 p-3 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={getPropertyImage(similar.id) || "/placeholder.svg"}
                        alt={similar.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-sm">{similar.title}</h3>
                      <p className="text-xs text-gray-500">{similar.location}</p>
                      <p className="text-sm font-bold text-blue-600 mt-1">{similar.price}</p>
                      <div className="flex gap-2 text-xs text-gray-500 mt-1">
                        <span className="flex items-center">
                          <Bed className="h-3 w-3 mr-1" />
                          {similar.bedrooms}
                        </span>
                        <span className="flex items-center">
                          <Bath className="h-3 w-3 mr-1" />
                          {similar.bathrooms}
                        </span>
                        <span className="flex items-center">
                          <Square className="h-3 w-3 mr-1" />
                          {similar.area} ตร.ม.
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
