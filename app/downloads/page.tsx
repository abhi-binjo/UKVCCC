"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, Users, Bell, Scale, BookOpen } from "lucide-react"

interface DownloadItem {
  id: number
  title: string
  description: string
  file_url: string
  file_size: string
  category: string
  download_count: number
  created_at: string
}

const categoryIcons = {
  "Acts & Rules": Scale,
  "Forms & Applications": FileText,
  "Annual Reports": BookOpen,
  "Circulars & Notices": Bell,
  "Committee Information": Users,
  "RTI Information": FileText,
}

export default function DownloadsPage() {
  const [downloads, setDownloads] = useState<DownloadItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    fetchDownloads()
  }, [])

  const fetchDownloads = async () => {
    try {
      const response = await fetch("/api/downloads")
      const data = await response.json()
      setDownloads(data.downloads || [])
    } catch (error) {
      console.error("Error fetching downloads:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async (item: DownloadItem) => {
    try {
      // Track download
      await fetch(`/api/downloads/${item.id}/track`, { method: "POST" })

      // Update local count
      setDownloads((prev) => prev.map((d) => (d.id === item.id ? { ...d, download_count: d.download_count + 1 } : d)))

      // Trigger download
      window.open(item.file_url, "_blank")
    } catch (error) {
      console.error("Error tracking download:", error)
      // Still allow download even if tracking fails
      window.open(item.file_url, "_blank")
    }
  }

  const categories = Array.from(new Set(downloads.map((d) => d.category)))
  const filteredDownloads =
    selectedCategory === "all" ? downloads : downloads.filter((d) => d.category === selectedCategory)

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-center">
          <div className="text-lg">Loading downloads...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Downloads</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access all important documents, forms, reports, and resources from the Uttarakhand State Veterinary Council
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs">
                {category.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="space-y-6">
            {categories.map((category) => {
              const categoryDownloads =
                selectedCategory === "all"
                  ? downloads.filter((d) => d.category === category)
                  : selectedCategory === category
                    ? filteredDownloads
                    : []

              if (categoryDownloads.length === 0 && selectedCategory !== "all") return null

              const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || FileText

              return (
                <div key={category} className={selectedCategory === "all" ? "block" : "hidden"}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                        <span>{category}</span>
                        <Badge variant="secondary">{categoryDownloads.length}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categoryDownloads.map((item) => (
                          <Card key={item.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-3">
                                <FileText className="w-8 h-8 text-red-600 flex-shrink-0" />
                                <Badge variant="outline" className="text-xs">
                                  {item.file_size}
                                </Badge>
                              </div>
                              <h3 className="font-semibold text-sm mb-2 line-clamp-2">{item.title}</h3>
                              <p className="text-xs text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">{item.download_count} downloads</span>
                                <Button
                                  size="sm"
                                  onClick={() => handleDownload(item)}
                                  className="bg-blue-600 hover:bg-blue-700"
                                >
                                  <Download className="w-3 h-3 mr-1" />
                                  Download
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}

            {/* Show filtered results when a specific category is selected */}
            {selectedCategory !== "all" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDownloads.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <FileText className="w-10 h-10 text-red-600 flex-shrink-0" />
                        <Badge variant="outline">{item.file_size}</Badge>
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          <div>{item.download_count} downloads</div>
                          <div>{new Date(item.created_at).toLocaleDateString()}</div>
                        </div>
                        <Button onClick={() => handleDownload(item)} className="bg-blue-600 hover:bg-blue-700">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Quick Links */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Quick Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <FileText className="w-6 h-6" />
                <span className="text-sm">Registration Forms</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Scale className="w-6 h-6" />
                <span className="text-sm">Acts & Rules</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <BookOpen className="w-6 h-6" />
                <span className="text-sm">Annual Reports</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Bell className="w-6 h-6" />
                <span className="text-sm">Latest Notices</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
