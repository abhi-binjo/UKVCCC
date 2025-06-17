import { type NextRequest, NextResponse } from "next/server"
import { getGalleryImages } from "@/lib/neon"
import { sql } from "@/lib/neon"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")

    const images = await getGalleryImages(category || undefined)
    return NextResponse.json({ images })
  } catch (error) {
    console.error("Error fetching gallery images:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch gallery images" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, title, description, category, image_url, display_order } = await request.json()

    await sql`
      UPDATE gallery_images 
      SET title = ${title}, 
          description = ${description}, 
          category = ${category},
          image_url = ${image_url || null},
          display_order = ${display_order || 0}
      WHERE id = ${id}
    `

    return NextResponse.json({ success: true, message: "Gallery image updated successfully" })
  } catch (error) {
    console.error("Error updating gallery image:", error)
    return NextResponse.json({ success: false, message: "Failed to update gallery image" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, category, image_url } = await request.json()

    const result = await sql`
      INSERT INTO gallery_images (title, description, category, image_url, is_active, display_order)
      VALUES (${title}, ${description}, ${category}, ${image_url}, true, 0)
      RETURNING id
    `

    return NextResponse.json({ success: true, id: result[0].id, message: "Gallery image added successfully" })
  } catch (error) {
    console.error("Error adding gallery image:", error)
    return NextResponse.json({ success: false, message: "Failed to add gallery image" }, { status: 500 })
  }
}
