import { NextResponse } from "next/server"
import { getDownloads } from "@/lib/neon"

export async function GET() {
  try {
    const downloads = await getDownloads()
    return NextResponse.json({ downloads })
  } catch (error) {
    console.error("Error fetching downloads:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch downloads" }, { status: 500 })
  }
}
