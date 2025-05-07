"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Thumbs } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"

export function FeaturedProperty() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  // รูปภาพสำหรับสไลด์ (เพิ่มจำนวนรูปภาพให้มากขึ้น)
  const slides = [
    {
      main: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop",
      title: "THE GRAND RESIDENCE",
      location: "สุขุมวิท - อโศก",
      price: "เริ่มต้น 5.5 ล้านบาท",
    },
    {
      main: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2674&auto=format&fit=crop",
      title: "SKYLINE CONDO",
      location: "พร้อมพงษ์ - ทองหล่อ",
      price: "เริ่มต้น 4.9 ล้านบาท",
    },
    {
      main: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
      title: "RIVERSIDE VILLA",
      location: "เจริญนคร - คลองสาน",
      price: "เริ่มต้น 7.2 ล้านบาท",
    },
    {
      main: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
      title: "URBAN LOFT",
      location: "รัชดา - ห้วยขวาง",
      price: "เริ่มต้น 3.8 ล้านบาท",
    },
    {
      main: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop",
      title: "GARDEN HOUSE",
      location: "บางนา - ศรีนครินทร์",
      price: "เริ่มต้น 6.5 ล้านบาท",
    },
  ]

  // รูปภาพด้านข้าง
  const sideImages = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* ส่วนรูปภาพ */}
        <div className="md:w-2/3 relative">
          <div className="flex">
            {/* รูปภาพด้านซ้าย */}
            <div className="hidden md:block w-1/5">
              <div className="relative h-[120px] mb-2">
                <Image
                  src={sideImages[0] || "/placeholder.svg"}
                  alt="Property thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[120px]">
                <Image
                  src={sideImages[1] || "/placeholder.svg"}
                  alt="Property thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* รูปภาพหลัก - Swiper */}
            <div className="flex-1 relative">
              <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                navigation
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                className="h-[300px] md:h-[250px]"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full w-full">
                      <Image src={slide.main || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* รูปภาพด้านขวา */}
            <div className="hidden md:block w-1/5">
              <div className="relative h-[120px] mb-2">
                <Image
                  src={sideImages[0] || "/placeholder.svg"}
                  alt="Property thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[120px]">
                <Image
                  src={sideImages[1] || "/placeholder.svg"}
                  alt="Property thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Thumbnails Swiper */}
          <div className="mt-2">
            <Swiper
              modules={[Thumbs]}
              watchSlidesProgress
              slidesPerView={5}
              spaceBetween={10}
              className="thumbs-swiper h-20"
              onSwiper={setThumbsSwiper}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`relative h-full w-full cursor-pointer ${activeIndex === index ? "ring-2 ring-blue-500" : ""}`}
                  >
                    <Image
                      src={slide.main || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* ส่วนข้อมูล */}
        <div className="md:w-1/3 p-4">
          <div className="flex gap-2 mb-2">
            <Badge className="bg-blue-500">โครงการใหม่</Badge>
            <Badge className="bg-green-500">โปรโมชั่น</Badge>
          </div>

          <div className="mb-2">
            <h3 className="text-xl font-bold mb-1">{slides[activeIndex].title}</h3>
            <p className="text-sm text-gray-500">{slides[activeIndex].location}</p>
          </div>

          <p className="text-sm mb-3 text-gray-700">
            โครงการคอนโด 3 ห้องนอนหรูหรา ตั้งอยู่ใจกลางเมือง
            <br />
            ใกล้รถไฟฟ้า เดินทางสะดวก พร้อมสิ่งอำนวยความสะดวก
          </p>

          <p className="text-xl font-bold mb-3">{slides[activeIndex].price}</p>

          <div className="grid grid-cols-2 gap-y-3 mb-4">
            <div className="text-center border-r border-gray-200">
              <p className="text-sm font-semibold">400 ยูนิต</p>
              <p className="text-xs text-gray-500">จำนวนยูนิตทั้งหมด</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold">27.5-32 ตร.ม.</p>
              <p className="text-xs text-gray-500">ขนาดห้อง</p>
            </div>
            <div className="text-center border-r border-gray-200">
              <p className="text-sm font-semibold">(57,098 บ/ตร.ม.)</p>
              <p className="text-xs text-gray-500">ราคาต่อตารางเมตร</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold">18 ชั้น</p>
              <p className="text-xs text-gray-500">ความสูง</p>
            </div>
          </div>

          <Button className="w-full">
            ดูรายละเอียดโครงการ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
