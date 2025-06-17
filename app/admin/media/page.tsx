"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"
import { Upload, Trash2, Edit } from "lucide-react"
import Image from "next/image"

interface GalleryImage {
  id: number
  title: string
  description: string
  image_url: string
  category: string
  display_order: number
  is_active: boolean
}

interface CommitteeMember {
  id: number
  name: string
  position: string
  department: string
  image_url: string
  display_order: number
}

export default function MediaManagementPage() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [committeeMembers, setCommitteeMembers] = useState<CommitteeMember[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    fetchGalleryImages()
    fetchCommitteeMembers()
  }, [])

  const fetchGalleryImages = async () => {
    try {
      const response = await fetch("/api/gallery")
      const data = await response.json()
      setGalleryImages(data.images || [])
    } catch (error) {
      console.error("Error fetching gallery images:", error)
    }
  }

  const fetchCommitteeMembers = async () => {
    try {
      const response = await fetch("/api/committee-members")
      const data = await response.json()
      setCommitteeMembers(data.members || [])
    } catch (error) {
      console.error("Error fetching committee members:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (file: File, type: "gallery" | "committee", targetId?: number) => {
    setUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("type", type)
      if (targetId) formData.append("targetId", targetId.toString())

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Success",
          description: "Image uploaded successfully",
        })

        // Refresh data
        if (type === "gallery") {
          fetchGalleryImages()
        } else {
          fetchCommitteeMembers()
        }
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      console.error("Error uploading image:", error)
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  const updateGalleryImage = async (id: number, updates: Partial<GalleryImage>) => {
    try {
      const response = await fetch("/api/gallery", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...updates }),
      })

      if (!response.ok) throw new Error("Failed to update")

      setGalleryImages((prev) => prev.map((img) => (img.id === id ? { ...img, ...updates } : img)))

      toast({
        title: "Success",
        description: "Gallery image updated successfully",
      })
    } catch (error) {
      console.error("Error updating gallery image:", error)
      toast({
        title: "Error",
        description: "Failed to update gallery image",
        variant: "destructive",
      })
    }
  }

  const deleteGalleryImage = async (id: number) => {
    if (!confirm("Are you sure you want to delete this image?")) return

    try {
      const response = await fetch(`/api/gallery/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Failed to delete")

      setGalleryImages((prev) => prev.filter((img) => img.id !== id))

      toast({
        title: "Success",
        description: "Gallery image deleted successfully",
      })
    } catch (error) {
      console.error("Error deleting gallery image:", error)
      toast({
        title: "Error",
        description: "Failed to delete gallery image",
        variant: "destructive",
      })
    }
  }

  const updateCommitteeMemberImage = async (id: number, imageUrl: string) => {
    try {
      const response = await fetch("/api/committee-members", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, field: "image_url", value: imageUrl }),
      })

      if (!response.ok) throw new Error("Failed to update")

      setCommitteeMembers((prev) =>
        prev.map((member) => (member.id === id ? { ...member, image_url: imageUrl } : member)),
      )

      toast({
        title: "Success",
        description: "Committee member photo updated successfully",
      })
    } catch (error) {
      console.error("Error updating committee member photo:", error)
      toast({
        title: "Error",
        description: "Failed to update committee member photo",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return <div className="container mx-auto py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Media Management</h1>

      <Tabs defaultValue="gallery" className="space-y-6">
        <TabsList>
          <TabsTrigger value="gallery">Gallery Images</TabsTrigger>
          <TabsTrigger value="committee-photos">Committee Photos</TabsTrigger>
          <TabsTrigger value="upload">Upload New</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <Card key={image.id}>
                <CardHeader className="pb-2">
                  <div className="relative aspect-video">
                    <Image
                      src={image.image_url || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input
                      value={image.title}
                      onChange={(e) => {
                        setGalleryImages((prev) =>
                          prev.map((img) => (img.id === image.id ? { ...img, title: e.target.value } : img)),
                        )
                      }}
                      placeholder="Image title"
                    />
                    <Textarea
                      value={image.description || ""}
                      onChange={(e) => {
                        setGalleryImages((prev) =>
                          prev.map((img) => (img.id === image.id ? { ...img, description: e.target.value } : img)),
                        )
                      }}
                      placeholder="Image description"
                      rows={2}
                    />
                    <Input
                      value={image.category}
                      onChange={(e) => {
                        setGalleryImages((prev) =>
                          prev.map((img) => (img.id === image.id ? { ...img, category: e.target.value } : img)),
                        )
                      }}
                      placeholder="Category"
                    />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() =>
                          updateGalleryImage(image.id, {
                            title: image.title,
                            description: image.description,
                            category: image.category,
                          })
                        }
                        className="flex-1"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Update
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => deleteGalleryImage(image.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="committee-photos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member) => (
              <Card key={member.id}>
                <CardHeader className="pb-2">
                  <div className="relative aspect-square w-32 h-32 mx-auto">
                    <Image
                      src={member.image_url || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-2">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.position}</p>
                    <p className="text-xs text-gray-500">{member.department}</p>

                    <div className="space-y-2 mt-4">
                      <Input
                        type="url"
                        value={member.image_url || ""}
                        onChange={(e) => {
                          setCommitteeMembers((prev) =>
                            prev.map((m) => (m.id === member.id ? { ...m, image_url: e.target.value } : m)),
                          )
                        }}
                        placeholder="Image URL"
                      />
                      <Button
                        size="sm"
                        onClick={() => updateCommitteeMemberImage(member.id, member.image_url)}
                        className="w-full"
                      >
                        Update Photo
                      </Button>
                      <Label htmlFor={`upload-${member.id}`} className="block">
                        <Button size="sm" variant="outline" className="w-full" asChild>
                          <span>
                            <Upload className="w-4 h-4 mr-2" />
                            Upload New Photo
                          </span>
                        </Button>
                        <input
                          id={`upload-${member.id}`}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              handleImageUpload(file, "committee", member.id)
                            }
                          }}
                        />
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upload">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Gallery Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="gallery-upload">Select Image</Label>
                    <input
                      id="gallery-upload"
                      type="file"
                      accept="image/*"
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          handleImageUpload(file, "gallery")
                        }
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    Upload images for the gallery. Supported formats: JPG, PNG, WebP
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upload Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold">Gallery Images:</h4>
                    <p className="text-gray-600">
                      • Recommended size: 800x600px or higher • Format: JPG, PNG, WebP • Max file size: 5MB
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Committee Photos:</h4>
                    <p className="text-gray-600">
                      • Recommended size: 400x400px (square) • Format: JPG, PNG • Max file size: 2MB
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tips:</h4>
                    <p className="text-gray-600">
                      • Use high-quality images for better appearance • Compress images before uploading for faster
                      loading • Use descriptive titles and categories
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {uploading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span>Uploading image...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
