import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/neon"

interface Props {
  params: { id: string }
}

export async function POST(request: NextRequest, { params }: Props) {
  try {
    const { id } = params

    await sql`
      UPDATE downloads 
      SET download_count = download_count + 1 
      WHERE id = ${Number.parseInt(id)}
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error tracking download:", error)
    return NextResponse.json({ success: false, message: "Failed to track download" }, { status: 500 })
  }
}
