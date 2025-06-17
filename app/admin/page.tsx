"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, Settings, BarChart3, ImageIcon, Edit } from "lucide-react"
import Link from "next/link"

interface Registration {
  id: number
  full_name: string
  email: string
  phone: string
  qualification: string
  category: string
  status: string
  created_at: string
}

export default function AdminPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [newNotice, setNewNotice] = useState({ title: "", content: "" })

  useEffect(() => {
    fetchRegistrations()
  }, [])

  const fetchRegistrations = async () => {
    try {
      const response = await fetch("/api/registration")
      const data = await response.json()
      setRegistrations(data.registrations || [])
    } catch (error) {
      console.error("Error fetching registrations:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateRegistrationStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`/api/registration/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        fetchRegistrations() // Refresh the list
      }
    } catch (error) {
      console.error("Error updating status:", error)
    }
  }

  const addNotice = async () => {
    try {
      const response = await fetch("/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNotice),
      })

      if (response.ok) {
        setNewNotice({ title: "", content: "" })
        // You could add a success message here
      }
    } catch (error) {
      console.error("Error adding notice:", error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-500"
      case "rejected":
        return "bg-red-500"
      case "pending":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage registrations, content, and website settings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Registrations</p>
                  <p className="text-2xl font-bold">{registrations.length}</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-2xl font-bold">{registrations.filter((r) => r.status === "pending").length}</p>
                </div>
                <FileText className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Approved</p>
                  <p className="text-2xl font-bold">{registrations.filter((r) => r.status === "approved").length}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Rejected</p>
                  <p className="text-2xl font-bold">{registrations.filter((r) => r.status === "rejected").length}</p>
                </div>
                <Settings className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="registrations" className="space-y-6">
          <TabsList>
            <TabsTrigger value="registrations">Registrations</TabsTrigger>
            <TabsTrigger value="content">Content Management</TabsTrigger>
            <TabsTrigger value="media">Media Management</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="registrations">
            <Card>
              <CardHeader>
                <CardTitle>Registration Applications</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <p>Loading registrations...</p>
                ) : (
                  <div className="space-y-4">
                    {registrations.map((registration) => (
                      <div key={registration.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">{registration.full_name}</h3>
                            <p className="text-sm text-gray-600">{registration.email}</p>
                            <p className="text-sm text-gray-600">{registration.qualification}</p>
                          </div>
                          <Badge className={getStatusColor(registration.status)}>{registration.status}</Badge>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button
                            size="sm"
                            onClick={() => updateRegistrationStatus(registration.id, "approved")}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => updateRegistrationStatus(registration.id, "rejected")}
                          >
                            Reject
                          </Button>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add Public Notice</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="noticeTitle">Notice Title</Label>
                    <Input
                      id="noticeTitle"
                      value={newNotice.title}
                      onChange={(e) => setNewNotice((prev) => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter notice title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="noticeContent">Notice Content</Label>
                    <Textarea
                      id="noticeContent"
                      value={newNotice.content}
                      onChange={(e) => setNewNotice((prev) => ({ ...prev, content: e.target.value }))}
                      placeholder="Enter notice content"
                      rows={5}
                    />
                  </div>
                  <Button onClick={addNotice} className="w-full">
                    Publish Notice
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Update Fee Structure
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Manage Gallery Images
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Update Contact Information
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Manage Committee Members
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="media">
            <Card>
              <CardHeader>
                <CardTitle>Media Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">Manage photos, gallery images, and other media content.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/admin/media">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col items-center justify-center space-y-2"
                    >
                      <ImageIcon className="w-8 h-8" />
                      <span>Manage Gallery & Photos</span>
                    </Button>
                  </Link>
                  <Link href="/admin/content">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col items-center justify-center space-y-2"
                    >
                      <Edit className="w-8 h-8" />
                      <span>Edit Website Content</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Website Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input id="siteName" defaultValue="Uttarakhand State Veterinary Council" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input id="contactEmail" type="email" defaultValue="info@ukvc.in" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <Input id="contactPhone" type="tel" defaultValue="+91-XXXXXXXXXX" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="address">Office Address</Label>
                  <Textarea
                    id="address"
                    defaultValue="Uttarakhand State Veterinary Council, Dehradun, Uttarakhand"
                    className="mt-1"
                    rows={3}
                  />
                </div>
                <Button className="w-full">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
