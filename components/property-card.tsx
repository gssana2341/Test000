import Image from "next/image"
import Link from "next/link"
import { Heart, Bed, Bath, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PropertyCardProps {
  property: {
    id: number
    title: string
    location: string
    price: string
    isRent: boolean
    isSale: boolean
    bedrooms: number
    bathrooms: number
    area: number
    image: string
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  // ใช้รูปภาพตามประเภทของอสังหาริมทรัพย์
  const getPropertyImage = () => {
    if (property.id % 5 === 1) {
      return "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop"
    } else if (property.id % 5 === 2) {
      return "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2674&auto=format&fit=crop"
    } else if (property.id % 5 === 3) {
      return "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
    } else if (property.id % 5 === 4) {
      return "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
    } else {
      return "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop"
    }
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
      <div className="relative">
        <Link href={`/property/${property.id}`}>
          <div className="relative h-40 w-full">
            <Image src={getPropertyImage() || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
          </div>
        </Link>
        <div className="absolute top-2 right-2 flex gap-1">
          <Button variant="ghost" size="icon" className="bg-white/80 rounded-full h-7 w-7 p-1 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute top-2 left-2">
          <Badge className={property.isRent ? "bg-blue-500" : "bg-green-500"}>{property.isRent ? "เช่า" : "ขาย"}</Badge>
        </div>
      </div>

      <div className="p-3">
        <Link href={`/property/${property.id}`}>
          <h3 className="font-semibold text-sm">{property.title}</h3>
          <p className="text-xs text-gray-500 mb-1">{property.location}</p>
          <p className="text-blue-600 font-bold text-sm mb-2">{property.price}</p>
        </Link>

        <div className="flex justify-between text-xs text-gray-500 border-t pt-2">
          <div className="flex items-center">
            <Bed className="h-3 w-3 mr-1" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-3 w-3 mr-1" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square className="h-3 w-3 mr-1" />
            <span>{property.area} ตร.ม.</span>
          </div>
        </div>

        <Link href={`/property/${property.id}`}>
          <Button variant="outline" size="sm" className="w-full mt-3 text-xs">
            ดูรายละเอียด
          </Button>
        </Link>
      </div>
    </div>
  )
}
