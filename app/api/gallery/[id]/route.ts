import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/neon"

interface Props {
  params: { id: string }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const { id } = params

    await sql`
      DELETE FROM gallery_images 
      WHERE id = ${Number.parseInt(id)}
    `

    return NextResponse.json({ success: true, message: "Gallery image deleted successfully" })
  } catch (error) {
    console.error("Error deleting gallery image:", error)
    return NextResponse.json({ success: false, message: "Failed to delete gallery image" }, { status: 500 })
  }
}
