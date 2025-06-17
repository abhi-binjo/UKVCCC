import { type NextRequest, NextResponse } from "next/server"
import { getWebsiteContent, updateWebsiteContent } from "@/lib/neon"

export async function GET() {
  try {
    const content = await getWebsiteContent()
    return NextResponse.json({ content })
  } catch (error) {
    console.error("Error fetching content:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch content" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, value } = await request.json()
    const success = await updateWebsiteContent(id, value)

    if (success) {
      return NextResponse.json({ success: true, message: "Content updated successfully" })
    } else {
      throw new Error("Update failed")
    }
  } catch (error) {
    console.error("Error updating content:", error)
    return NextResponse.json({ success: false, message: "Failed to update content" }, { status: 500 })
  }
}
