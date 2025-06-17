import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, CreditCard, RefreshCw, Award, Download, Phone } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "New Registration",
    description: "Register as a new veterinary practitioner in Uttarakhand",
    fee: "₹2,000",
    documents: ["Degree Certificate", "Mark Sheets", "Identity Proof", "Address Proof"],
    link: "/registration",
  },
  {
    icon: RefreshCw,
    title: "License Renewal",
    description: "Renew your existing veterinary license",
    fee: "₹1,000",
    documents: ["Current License", "Identity Proof", "Continuing Education Certificate"],
    link: "/renewal",
  },
  {
    icon: Award,
    title: "Transfer Certificate",
    description: "Transfer your registration from another state",
    fee: "₹500",
    documents: ["Original Registration Certificate", "NOC from Previous State", "Identity Proof"],
    link: "/transfer",
  },
  {
    icon: Download,
    title: "NOC Application",
    description: "Apply for No Objection Certificate",
    fee: "₹300",
    documents: ["Application Form", "Current License", "Purpose Statement"],
    link: "/noc-form",
  },
  {
    icon: CreditCard,
    title: "Duplicate Certificate",
    description: "Get duplicate copy of your registration certificate",
    fee: "₹200",
    documents: ["Affidavit", "Identity Proof", "Police Report (if lost)"],
    link: "/duplicate",
  },
  {
    icon: Phone,
    title: "Certificate Verification",
    description: "Verify the authenticity of veterinary certificates",
    fee: "₹100",
    documents: ["Certificate Copy", "Verification Request Form"],
    link: "/verification",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive veterinary registration and licensing services for practitioners in Uttarakhand
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">{service.fee}</div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-800 mb-2">Required Documents:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.documents.map((doc, docIndex) => (
                      <li key={docIndex}>• {doc}</li>
                    ))}
                  </ul>
                </div>

                <Link href={service.link}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Application Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-sm text-gray-600">Fill out the online form with required details</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Upload Documents</h3>
                <p className="text-sm text-gray-600">Upload all required documents in PDF format</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Pay Fees</h3>
                <p className="text-sm text-gray-600">Make payment online or through demand draft</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Get Certificate</h3>
                <p className="text-sm text-gray-600">Receive your certificate after verification</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">For any queries regarding our services, please contact us:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-blue-600">+91-XXXXXXXXXX</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-blue-600">info@ukvc.in</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Office Hours</h4>
                <p className="text-gray-600">Mon-Fri: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
