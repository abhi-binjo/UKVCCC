"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table"

interface Veterinarian {
  id: number
  name: string
  father_name: string
  dob: string
  address: string
  qualification: string
  additional_qualification: string
  registration_number: string
  registration_date: string
  mobile_number: string
  email: string
  ivpr_year: string
  ivpr_serial_no: string
  ivpr_page_no: string
  remarks: string
  expiry_date: string
}

export default function VeterinariansPage() {
  const [search, setSearch] = useState("")
  const [veterinarians, setVeterinarians] = useState<Veterinarian[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchVeterinarians()
  }, [])

  const fetchVeterinarians = async () => {
    try {
      const response = await fetch("/api/veterinarians")
      const data = await response.json()
      setVeterinarians(data.veterinarians || [])
    } catch (error) {
      console.error("Error fetching veterinarians:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredVeterinarians = useMemo(() => {
    const lowerSearch = search.toLowerCase()
    return veterinarians.filter((vet) => {
      return (
        vet.name.toLowerCase().includes(lowerSearch) ||
        vet.address.toLowerCase().includes(lowerSearch) ||
        vet.qualification.toLowerCase().includes(lowerSearch) ||
        vet.registration_number.toLowerCase().includes(lowerSearch)
      )
    })
  }, [search, veterinarians])

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-center">
          <div className="text-lg">Loading veterinarians...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Registered Veterinary Practitioners</h1>
        <p className="text-gray-600">
          Search and browse through our directory of registered veterinary practitioners in Uttarakhand.
        </p>
      </div>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search by name, address, qualification, or registration number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
      </div>

      <Card>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Name</TableHead>
                <TableHead className="w-[180px]">Father's Name</TableHead>
                <TableHead className="w-[100px]">DOB</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Qualification</TableHead>
                <TableHead className="w-[120px]">Registration No.</TableHead>
                <TableHead className="w-[100px]">Expiry Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredVeterinarians.map((veterinarian) => (
                <TableRow key={veterinarian.id}>
                  <TableCell>
                    <Link
                      href={`/veterinarians/${veterinarian.id}`}
                      className="hover:underline text-blue-600 font-medium"
                    >
                      {veterinarian.name}
                    </Link>
                  </TableCell>
                  <TableCell>{veterinarian.father_name}</TableCell>
                  <TableCell>{veterinarian.dob}</TableCell>
                  <TableCell className="max-w-xs truncate" title={veterinarian.address}>
                    {veterinarian.address}
                  </TableCell>
                  <TableCell className="max-w-xs truncate" title={veterinarian.qualification}>
                    {veterinarian.qualification}
                  </TableCell>
                  <TableCell>{veterinarian.registration_number}</TableCell>
                  <TableCell>{veterinarian.expiry_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredVeterinarians.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No veterinarians found matching your search criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-6 text-sm text-gray-600">
        <p>Total registered veterinarians: {veterinarians.length}</p>
        <p>Showing: {filteredVeterinarians.length} results</p>
      </div>
    </div>
  )
}
