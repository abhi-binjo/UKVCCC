"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"

interface WebsiteContent {
  id: number
  section: string
  content_key: string
  content_value: string
  content_type: string
  description: string
}

interface CommitteeMember {
  id: number
  name: string
  position: string
  department: string
  image_url: string
  display_order: number
}

export default function ContentManagementPage() {
  const [websiteContent, setWebsiteContent] = useState<WebsiteContent[]>([])
  const [committeeMembers, setCommitteeMembers] = useState<CommitteeMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchContent()
    fetchCommitteeMembers()
  }, [])

  const fetchContent = async () => {
    try {
      const response = await fetch("/api/content")
      const data = await response.json()
      setWebsiteContent(data.content || [])
    } catch (error) {
      console.error("Error fetching content:", error)
      toast({
        title: "Error",
        description: "Failed to fetch website content",
        variant: "destructive",
      })
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

  const updateContent = async (id: number, newValue: string) => {
    try {
      const response = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, value: newValue }),
      })

      if (!response.ok) throw new Error("Failed to update")

      setWebsiteContent((prev) => prev.map((item) => (item.id === id ? { ...item, content_value: newValue } : item)))

      toast({
        title: "Success",
        description: "Content updated successfully",
      })
    } catch (error) {
      console.error("Error updating content:", error)
      toast({
        title: "Error",
        description: "Failed to update content",
        variant: "destructive",
      })
    }
  }

  const updateCommitteeMember = async (id: number, field: string, value: string) => {
    try {
      const response = await fetch("/api/committee-members", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, field, value }),
      })

      if (!response.ok) throw new Error("Failed to update")

      setCommitteeMembers((prev) => prev.map((member) => (member.id === id ? { ...member, [field]: value } : member)))

      toast({
        title: "Success",
        description: "Committee member updated successfully",
      })
    } catch (error) {
      console.error("Error updating committee member:", error)
      toast({
        title: "Error",
        description: "Failed to update committee member",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return <div className="container mx-auto py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Content Management</h1>

      <Tabs defaultValue="website-content" className="space-y-6">
        <TabsList>
          <TabsTrigger value="website-content">Website Content</TabsTrigger>
          <TabsTrigger value="committee-members">Committee Members</TabsTrigger>
        </TabsList>

        <TabsContent value="website-content">
          <div className="grid gap-6">
            {websiteContent.map((content) => (
              <Card key={content.id}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {content.section} - {content.content_key}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{content.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Label htmlFor={`content-${content.id}`}>Content</Label>
                    {content.content_type === "text" && content.content_value.length > 100 ? (
                      <Textarea
                        id={`content-${content.id}`}
                        value={content.content_value}
                        onChange={(e) => {
                          setWebsiteContent((prev) =>
                            prev.map((item) =>
                              item.id === content.id ? { ...item, content_value: e.target.value } : item,
                            ),
                          )
                        }}
                        rows={4}
                      />
                    ) : (
                      <Input
                        id={`content-${content.id}`}
                        value={content.content_value}
                        onChange={(e) => {
                          setWebsiteContent((prev) =>
                            prev.map((item) =>
                              item.id === content.id ? { ...item, content_value: e.target.value } : item,
                            ),
                          )
                        }}
                      />
                    )}
                    <Button onClick={() => updateContent(content.id, content.content_value)} className="w-full">
                      Update Content
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="committee-members">
          <div className="grid gap-6">
            {committeeMembers.map((member) => (
              <Card key={member.id}>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`name-${member.id}`}>Name</Label>
                      <Input
                        id={`name-${member.id}`}
                        value={member.name}
                        onChange={(e) => {
                          setCommitteeMembers((prev) =>
                            prev.map((m) => (m.id === member.id ? { ...m, name: e.target.value } : m)),
                          )
                        }}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`position-${member.id}`}>Position</Label>
                      <Input
                        id={`position-${member.id}`}
                        value={member.position}
                        onChange={(e) => {
                          setCommitteeMembers((prev) =>
                            prev.map((m) => (m.id === member.id ? { ...m, position: e.target.value } : m)),
                          )
                        }}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`department-${member.id}`}>Department</Label>
                      <Input
                        id={`department-${member.id}`}
                        value={member.department}
                        onChange={(e) => {
                          setCommitteeMembers((prev) =>
                            prev.map((m) => (m.id === member.id ? { ...m, department: e.target.value } : m)),
                          )
                        }}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`image-${member.id}`}>Image URL</Label>
                      <Input
                        id={`image-${member.id}`}
                        value={member.image_url || ""}
                        onChange={(e) => {
                          setCommitteeMembers((prev) =>
                            prev.map((m) => (m.id === member.id ? { ...m, image_url: e.target.value } : m)),
                          )
                        }}
                        placeholder="Enter image URL"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button onClick={() => updateCommitteeMember(member.id, "name", member.name)} size="sm">
                      Update Name
                    </Button>
                    <Button onClick={() => updateCommitteeMember(member.id, "position", member.position)} size="sm">
                      Update Position
                    </Button>
                    <Button onClick={() => updateCommitteeMember(member.id, "department", member.department)} size="sm">
                      Update Department
                    </Button>
                    <Button
                      onClick={() => updateCommitteeMember(member.id, "image_url", member.image_url || "")}
                      size="sm"
                    >
                      Update Image
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
