import { properties } from "@/lib/data"
import { PropertyCard } from "@/components/property-card"
import { SearchBar } from "@/components/search-bar"

export default function AllPropertiesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // กรองตามประเภท (ถ้ามี)
  const type = searchParams.type as string | undefined

  let filteredProperties = properties

  if (type === "rent") {
    filteredProperties = properties.filter((property) => property.isRent)
  } else if (type === "sale") {
    filteredProperties = properties.filter((property) => property.isSale)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        {type === "rent" ? "อสังหาริมทรัพย์ให้เช่าทั้งหมด" : type === "sale" ? "อสังหาริมทรัพย์ขายทั้งหมด" : "อสังหาริมทรัพย์ทั้งหมด"}
      </h1>

      {/* ค้นหา */}
      <div className="mb-8">
        <SearchBar />
      </div>

      {/* ผลลัพธ์ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  )
}
