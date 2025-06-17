import { type NextRequest, NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import { join } from "path"

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get("file") as unknown as File
    const type = data.get("type") as string
    const targetId = data.get("targetId") as string

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create filename with timestamp
    const timestamp = Date.now()
    const filename = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`
    const path = join(process.cwd(), "public", "uploads", filename)

    // Write the file
    await writeFile(path, buffer)

    const fileUrl = `/uploads/${filename}`

    // If this is for a committee member, update their image_url
    if (type === "committee" && targetId) {
      const { sql } = await import("@/lib/neon")
      await sql`
        UPDATE committee_members 
        SET image_url = ${fileUrl}
        WHERE id = ${Number.parseInt(targetId)}
      `
    }

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      fileUrl,
    })
  } catch (error) {
    console.error("Error uploading file:", error)
    return NextResponse.json({ success: false, message: "Failed to upload file" }, { status: 500 })
  }
}
