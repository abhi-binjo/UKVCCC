import { neon } from "@neondatabase/serverless"

// Create a singleton connection
const sql = neon(process.env.DATABASE_URL!)

export { sql }

// Helper functions for common database operations
export async function getVeterinarians() {
  try {
    const veterinarians = await sql`
      SELECT * FROM veterinarians 
      WHERE is_active = true 
      ORDER BY name ASC
    `
    return veterinarians
  } catch (error) {
    console.error("Error fetching veterinarians:", error)
    return []
  }
}

export async function getVeterinarianById(id: number) {
  try {
    const veterinarian = await sql`
      SELECT * FROM veterinarians 
      WHERE id = ${id} AND is_active = true
    `
    return veterinarian[0] || null
  } catch (error) {
    console.error("Error fetching veterinarian:", error)
    return null
  }
}

export async function getWebsiteContent() {
  try {
    const content = await sql`
      SELECT * FROM website_content 
      ORDER BY section, content_key
    `
    return content
  } catch (error) {
    console.error("Error fetching website content:", error)
    return []
  }
}

export async function updateWebsiteContent(id: number, value: string) {
  try {
    await sql`
      UPDATE website_content 
      SET content_value = ${value}, updated_at = NOW() 
      WHERE id = ${id}
    `
    return true
  } catch (error) {
    console.error("Error updating website content:", error)
    return false
  }
}

export async function getCommitteeMembers() {
  try {
    const members = await sql`
      SELECT * FROM committee_members 
      WHERE is_active = true 
      ORDER BY display_order ASC
    `
    return members
  } catch (error) {
    console.error("Error fetching committee members:", error)
    return []
  }
}

export async function updateCommitteeMember(id: number, field: string, value: string) {
  try {
    // Use dynamic SQL construction carefully
    if (!["name", "position", "department", "image_url"].includes(field)) {
      throw new Error("Invalid field")
    }

    await sql`
      UPDATE committee_members 
      SET ${sql(field)} = ${value}
      WHERE id = ${id}
    `
    return true
  } catch (error) {
    console.error("Error updating committee member:", error)
    return false
  }
}

export async function getGalleryImages(category?: string) {
  try {
    if (category && category !== "all") {
      const images = await sql`
        SELECT * FROM gallery_images 
        WHERE is_active = true AND category = ${category}
        ORDER BY display_order ASC, created_at DESC
      `
      return images
    } else {
      const images = await sql`
        SELECT * FROM gallery_images 
        WHERE is_active = true 
        ORDER BY display_order ASC, created_at DESC
      `
      return images
    }
  } catch (error) {
    console.error("Error fetching gallery images:", error)
    return []
  }
}

export async function getDownloads(category?: string) {
  try {
    if (category) {
      const downloads = await sql`
        SELECT * FROM downloads 
        WHERE is_active = true AND category = ${category}
        ORDER BY created_at DESC
      `
      return downloads
    } else {
      const downloads = await sql`
        SELECT * FROM downloads 
        WHERE is_active = true 
        ORDER BY category, created_at DESC
      `
      return downloads
    }
  } catch (error) {
    console.error("Error fetching downloads:", error)
    return []
  }
}

export async function getNotices() {
  try {
    const notices = await sql`
      SELECT * FROM notices 
      WHERE is_active = true 
      ORDER BY created_at DESC
    `
    return notices
  } catch (error) {
    console.error("Error fetching notices:", error)
    return []
  }
}

export async function createNotice(title: string, content: string) {
  try {
    const result = await sql`
      INSERT INTO notices (title, content, is_active, created_at)
      VALUES (${title}, ${content}, true, NOW())
      RETURNING id
    `
    return result[0]
  } catch (error) {
    console.error("Error creating notice:", error)
    return null
  }
}

export async function addGalleryImage(title: string, description: string, category: string, imageUrl: string) {
  try {
    const result = await sql`
      INSERT INTO gallery_images (title, description, category, image_url, is_active, display_order)
      VALUES (${title}, ${description}, ${category}, ${imageUrl}, true, 0)
      RETURNING id
    `
    return result[0]
  } catch (error) {
    console.error("Error adding gallery image:", error)
    return null
  }
}

export async function updateGalleryImage(id: number, updates: any) {
  try {
    await sql`
      UPDATE gallery_images 
      SET title = ${updates.title}, 
          description = ${updates.description}, 
          category = ${updates.category},
          image_url = ${updates.image_url || null},
          display_order = ${updates.display_order || 0}
      WHERE id = ${id}
    `
    return true
  } catch (error) {
    console.error("Error updating gallery image:", error)
    return false
  }
}

export async function deleteGalleryImage(id: number) {
  try {
    await sql`
      DELETE FROM gallery_images 
      WHERE id = ${id}
    `
    return true
  } catch (error) {
    console.error("Error deleting gallery image:", error)
    return false
  }
}
