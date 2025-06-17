import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Award, FileText } from "lucide-react"
import { getVeterinarianById } from "@/lib/neon"

interface Props {
  params: { id: string }
}

export default async function VeterinarianDetailPage({ params }: Props) {
  const { id } = params
  const veterinarian = await getVeterinarianById(Number.parseInt(id))

  if (!veterinarian) {
    return notFound()
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Link href="/veterinarians">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Directory
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Information */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-blue-600">{veterinarian.name}</CardTitle>
                  <p className="text-gray-600 mt-1">S/o {veterinarian.father_name}</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-700 font-medium">Date of Birth:</span>
                    <p className="text-gray-900">{veterinarian.dob}</p>
                  </div>
                  <div>
                    <span className="text-gray-700 font-medium">Registration Number:</span>
                    <p className="text-gray-900 font-mono">{veterinarian.registration_number}</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-gray-700 font-medium">Address:</span>
                      <p className="text-gray-900">{veterinarian.address}</p>
                    </div>
                  </div>
                  {veterinarian.mobile_number && (
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-500" />
                      <div>
                        <span className="text-gray-700 font-medium">Mobile:</span>
                        <p className="text-gray-900">{veterinarian.mobile_number}</p>
                      </div>
                    </div>
                  )}
                  {veterinarian.email && (
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-500" />
                      <div>
                        <span className="text-gray-700 font-medium">Email:</span>
                        <p className="text-gray-900">{veterinarian.email}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Educational Qualification */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Educational Qualification
                </h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-700 font-medium">Primary Qualification:</span>
                    <p className="text-gray-900">{veterinarian.qualification}</p>
                  </div>
                  {veterinarian.additional_qualification && (
                    <div>
                      <span className="text-gray-700 font-medium">Additional Qualification:</span>
                      <p className="text-gray-900">{veterinarian.additional_qualification}</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Registration Details */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Registration Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-gray-700 font-medium">Registration Date:</span>
                <p className="text-gray-900">{veterinarian.registration_date}</p>
              </div>
              <div>
                <span className="text-gray-700 font-medium">IVPR Year:</span>
                <p className="text-gray-900">{veterinarian.ivpr_year}</p>
              </div>
              <div>
                <span className="text-gray-700 font-medium">IVPR Serial No:</span>
                <p className="text-gray-900">{veterinarian.ivpr_serial_no}</p>
              </div>
              {veterinarian.ivpr_page_no && (
                <div>
                  <span className="text-gray-700 font-medium">IVPR Page No:</span>
                  <p className="text-gray-900">{veterinarian.ivpr_page_no}</p>
                </div>
              )}
              <div>
                <span className="text-gray-700 font-medium">License Expiry:</span>
                <p className="text-gray-900">{veterinarian.expiry_date}</p>
              </div>
              {veterinarian.remarks && (
                <div>
                  <span className="text-gray-700 font-medium">Remarks:</span>
                  <p className="text-gray-900 text-sm bg-gray-50 p-2 rounded">{veterinarian.remarks}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Verify Certificate
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="w-4 h-4 mr-2" />
                Contact Veterinarian
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Award className="w-4 h-4 mr-2" />
                View Credentials
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
