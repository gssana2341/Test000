import Image from "next/image"
import Link from "next/link"

export function CityGallery() {
  // ใช้รูปภาพเมืองจริง
  const getCityImage = (cityName: string) => {
    if (cityName === "กรุงเทพ") {
      return "https://images.unsplash.com/photo-1508009603885-50cf7c8dd0d5?q=80&w=2670&auto=format&fit=crop"
    } else if (cityName === "เชียงใหม่") {
      return "https://images.unsplash.com/photo-1598511726623-d2e9996e1ddb?q=80&w=2670&auto=format&fit=crop"
    } else {
      return "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2574&auto=format&fit=crop"
    }
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <Link href="/location/สุขุมวิท" className="relative h-[200px] rounded-lg overflow-hidden group">
        <Image
          src="https://images.unsplash.com/photo-1508009603885-50cf7c8dd0d5?q=80&w=2670&auto=format&fit=crop"
          alt="สุขุมวิท"
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <h3 className="text-white text-xl font-bold">สุขุมวิท</h3>
        </div>
      </Link>
      <Link href="/location/พระราม-9" className="relative h-[200px] rounded-lg overflow-hidden group">
        <Image
          src="https://images.unsplash.com/photo-1577086664693-894d8405334a?q=80&w=2574&auto=format&fit=crop"
          alt="พระราม 9"
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <h3 className="text-white text-xl font-bold">พระราม 9</h3>
        </div>
      </Link>
      <Link href="/location/สาทร" className="relative h-[200px] rounded-lg overflow-hidden group">
        <Image
          src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2574&auto=format&fit=crop"
          alt="สาทร"
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <h3 className="text-white text-xl font-bold">สาทร</h3>
        </div>
      </Link>
    </div>
  )
}
