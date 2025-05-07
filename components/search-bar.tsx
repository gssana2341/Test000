"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchBar() {
  const [searchType, setSearchType] = useState("buy")

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-5xl mx-auto">
      <Tabs defaultValue="buy" onValueChange={setSearchType}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="buy">ซื้อ</TabsTrigger>
          <TabsTrigger value="rent">เช่า</TabsTrigger>
          <TabsTrigger value="sell">ขาย/ให้เช่า</TabsTrigger>
        </TabsList>

        <TabsContent value="buy" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-2">
            <Input placeholder="ค้นหาตามทำเล, โครงการ หรือรหัสทรัพย์" className="flex-grow" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="ประเภท" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="condo">คอนโด</SelectItem>
                  <SelectItem value="house">บ้านเดี่ยว</SelectItem>
                  <SelectItem value="townhouse">ทาวน์เฮาส์</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="ราคา" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m">ไม่เกิน 1 ล้าน</SelectItem>
                  <SelectItem value="3m">1-3 ล้าน</SelectItem>
                  <SelectItem value="5m">3-5 ล้าน</SelectItem>
                  <SelectItem value="10m">5-10 ล้าน</SelectItem>
                  <SelectItem value="10m+">10 ล้านขึ้นไป</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="ห้องนอน" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4+">4+</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Search className="h-4 w-4 mr-2" />
                ค้นหา
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="rent" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-2">
            <Input placeholder="ค้นหาตามทำเล, โครงการ หรือรหัสทรัพย์" className="flex-grow" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="ประเภท" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="condo">คอนโด</SelectItem>
                  <SelectItem value="house">บ้านเดี่ยว</SelectItem>
                  <SelectItem value="townhouse">ทาวน์เฮาส์</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="ราคา/เดือน" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10k">ไม่เกิน 10,000</SelectItem>
                  <SelectItem value="20k">10,000-20,000</SelectItem>
                  <SelectItem value="30k">20,000-30,000</SelectItem>
                  <SelectItem value="50k">30,000-50,000</SelectItem>
                  <SelectItem value="50k+">50,000 ขึ้นไป</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="ห้องนอน" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4+">4+</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Search className="h-4 w-4 mr-2" />
                ค้นหา
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sell" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-2">
            <Input placeholder="ค้นหาตามทำเล, โครงการ หรือรหัสทรัพย์" className="flex-grow" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="ประเภท" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="condo">คอนโด</SelectItem>
                  <SelectItem value="house">บ้านเดี่ยว</SelectItem>
                  <SelectItem value="townhouse">ทาวน์เฮาส์</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="ขาย/ให้เช่า" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sell">ขาย</SelectItem>
                  <SelectItem value="rent">ให้เช่า</SelectItem>
                  <SelectItem value="both">ทั้งสอง</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="ห้องนอน" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4+">4+</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Search className="h-4 w-4 mr-2" />
                ค้นหา
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
