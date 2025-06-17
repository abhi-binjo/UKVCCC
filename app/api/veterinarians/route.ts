import { NextResponse } from "next/server"
import { getVeterinarians } from "@/lib/neon"

export async function GET() {
  try {
    const veterinarians = await getVeterinarians()
    return NextResponse.json({ veterinarians })
  } catch (error) {
    console.error("Error fetching veterinarians:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch veterinarians" }, { status: 500 })
  }
}
