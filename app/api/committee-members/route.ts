import { type NextRequest, NextResponse } from "next/server"
import { getCommitteeMembers, updateCommitteeMember } from "@/lib/neon"

export async function GET() {
  try {
    const members = await getCommitteeMembers()
    return NextResponse.json({ members })
  } catch (error) {
    console.error("Error fetching committee members:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch committee members" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, field, value } = await request.json()
    const success = await updateCommitteeMember(id, field, value)

    if (success) {
      return NextResponse.json({ success: true, message: "Committee member updated successfully" })
    } else {
      throw new Error("Update failed")
    }
  } catch (error) {
    console.error("Error updating committee member:", error)
    return NextResponse.json({ success: false, message: "Failed to update committee member" }, { status: 500 })
  }
}
