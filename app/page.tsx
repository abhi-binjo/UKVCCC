import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, FileText, Users, Award } from "lucide-react"

const officials = [
  {
    name: "Shri Pushkar Singh Dhami",
    title: "Honorable Chief Minister",
    subtitle: "Uttarakhand",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Shri Saurabh Bahaguna",
    title: "Honorable Minister",
    subtitle: "Animal Husbandry, Fisheries",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. B.V.R.C Purushottam",
    title: "Secretary",
    subtitle: "Animal Husbandry, Dairy And Fisheries",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Neeraj Singhal",
    title: "Director",
    subtitle: "Animal Husbandry Department, Uttarakhand",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Kailash Uniyal",
    title: "President",
    subtitle: "Uttarakhand State Veterinary Council",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Pralayankar Nath",
    title: "Registrar",
    subtitle: "Uttarakhand State Veterinary Council",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const quickLinks = [
  { icon: Bell, title: "Public Notices", href: "/notices", color: "bg-red-500" },
  { icon: FileText, title: "Forms & Applications", href: "/forms", color: "bg-blue-500" },
  { icon: Users, title: "Committee Members", href: "/committees", color: "bg-green-500" },
  { icon: Award, title: "Certificates", href: "/certificates", color: "bg-purple-500" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to UKVC</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Regulating and promoting veterinary practice excellence in Uttarakhand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registration">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Register Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${link.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <link.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800">{link.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Officials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officials.map((official, index) => (
              <Card key={index} className="official-card bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={official.image || "/placeholder.svg"}
                      alt={official.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{official.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{official.title}</p>
                  <p className="text-gray-600 text-sm">{official.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Message of President */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-600 pb-2">
                Message of President
              </h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    Welcome to the Uttarakhand State Veterinary Council. We are committed to maintaining the highest
                    standards of veterinary practice and education in our state.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our mission is to regulate the veterinary profession, ensure quality veterinary services, and
                    promote animal welfare throughout Uttarakhand.
                  </p>
                  <Link href="/president-message">
                    <Button variant="outline" className="mt-4">
                      Read Full Message
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Important Links */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-600 pb-2">Important Links</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li>
                      <Link href="/registration" className="text-blue-600 hover:text-blue-800 font-medium">
                        → Veterinary Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/renewal" className="text-blue-600 hover:text-blue-800 font-medium">
                        → License Renewal
                      </Link>
                    </li>
                    <li>
                      <Link href="/noc-form" className="text-blue-600 hover:text-blue-800 font-medium">
                        → NOC Application
                      </Link>
                    </li>
                    <li>
                      <Link href="/restore-certificate" className="text-blue-600 hover:text-blue-800 font-medium">
                        → Certificate Restoration
                      </Link>
                    </li>
                    <li>
                      <Link href="/fee-structure" className="text-blue-600 hover:text-blue-800 font-medium">
                        → Fee Structure
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                        → Contact Information
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
