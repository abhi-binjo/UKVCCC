import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Insert registration data into database
    const result = await sql`
      INSERT INTO registrations (
        full_name, email, phone, address, qualification, college, 
        year_of_passing, registration_number, category, experience, 
        specialization, created_at, status
      ) VALUES (
        ${data.fullName}, ${data.email}, ${data.phone}, ${data.address},
        ${data.qualification}, ${data.college}, ${data.yearOfPassing},
        ${data.registrationNumber || null}, ${data.category}, ${data.experience || null},
        ${data.specialization || null}, NOW(), 'pending'
      ) RETURNING id
    `

    // Here you could also send confirmation email
    // await sendConfirmationEmail(data.email, result[0].id)

    return NextResponse.json({
      success: true,
      message: "Registration submitted successfully",
      registrationId: result[0].id,
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ success: false, message: "Registration failed" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const registrations = await sql`
      SELECT * FROM registrations 
      ORDER BY created_at DESC
    `

    return NextResponse.json({ registrations })
  } catch (error) {
    console.error("Fetch registrations error:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch registrations" }, { status: 500 })
  }
}
