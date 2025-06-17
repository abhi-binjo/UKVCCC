"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const galleryCategories = [
  { id: "all", name: "All" },
  { id: "office", name: "Office" },
  { id: "events", name: "Events" },
  { id: "ceremonies", name: "Ceremonies" },
  { id: "camps", name: "Camps" },
  { id: "training", name: "Training" },
]

const galleryImages = [
  {
    id: 1,
    title: "UKVC Office Building",
    category: "office",
    image: "/placeholder.svg?height=300&width=400",
    description: "Main office building of Uttarakhand State Veterinary Council",
  },
  {
    id: 2,
    title: "Annual Conference 2023",
    category: "events",
    image: "/placeholder.svg?height=300&width=400",
    description: "Annual conference of veterinarians held in Dehradun",
  },
  {
    id: 3,
    title: "Registration Ceremony",
    category: "ceremonies",
    image: "/placeholder.svg?height=300&width=400",
    description: "New veterinarians receiving their registration certificates",
  },
  {
    id: 4,
    title: "Veterinary Camp",
    category: "camps",
    image: "/placeholder.svg?height=300&width=400",
    description: "Free veterinary camp organized in rural areas",
  },
  {
    id: 5,
    title: "Training Workshop",
    category: "training",
    image: "/placeholder.svg?height=300&width=400",
    description: "Professional development workshop for veterinarians",
  },
  {
    id: 6,
    title: "Council Meeting",
    category: "office",
    image: "/placeholder.svg?height=300&width=400",
    description: "Monthly council meeting with all members",
  },
  {
    id: 7,
    title: "Award Ceremony",
    category: "ceremonies",
    image: "/placeholder.svg?height=300&width=400",
    description: "Excellence awards for outstanding veterinarians",
  },
  {
    id: 8,
    title: "Rural Outreach Program",
    category: "camps",
    image: "/placeholder.svg?height=300&width=400",
    description: "Veterinary services in remote villages",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our activities, events, and facilities through our photo gallery
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {galleryCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.image || "/placeholder.svg"}
                        alt={image.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={image.image || "/placeholder.svg"} alt={image.title} fill className="object-contain" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
