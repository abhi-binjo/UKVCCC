import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About UKVC</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Uttarakhand State Veterinary Council is a statutory body established under the Indian Veterinary Council
            Act 1984 to regulate veterinary practice in Uttarakhand.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To regulate and maintain the highest standards of veterinary education and practice in Uttarakhand,
                ensuring quality animal healthcare services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Eye className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To be the leading regulatory body promoting excellence in veterinary profession and contributing to
                animal welfare and public health.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Award className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Integrity, Excellence, Transparency, and Commitment to animal welfare and professional development of
                veterinarians.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* History Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Our History</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              The Uttarakhand State Veterinary Council was established following the formation of Uttarakhand state in
              2000. As per the Indian Veterinary Council Act 1984, each state is required to have its own veterinary
              council to regulate the profession within its jurisdiction.
            </p>
            <p className="text-gray-700 mb-4">
              Since its inception, UKVC has been working tirelessly to maintain professional standards, register
              qualified veterinarians, and ensure quality veterinary services across the state. The council plays a
              crucial role in licensing veterinary practitioners and monitoring their professional conduct.
            </p>
            <p className="text-gray-700">
              Today, UKVC continues to evolve with changing times, embracing digital transformation while maintaining
              its core commitment to excellence in veterinary practice and animal welfare.
            </p>
          </CardContent>
        </Card>

        {/* Functions Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Functions of UKVC</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Regulatory Functions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Registration of veterinary graduates</li>
                  <li>• Maintenance of state register of veterinarians</li>
                  <li>• Licensing for veterinary practice</li>
                  <li>• Monitoring professional conduct</li>
                  <li>• Disciplinary actions when required</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-600">Advisory Functions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Advising government on veterinary matters</li>
                  <li>• Setting professional standards</li>
                  <li>• Promoting continuing education</li>
                  <li>• Facilitating professional development</li>
                  <li>• Coordinating with national bodies</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Registered Veterinarians</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
              <div className="text-gray-600">Years of Service</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">13</div>
              <div className="text-gray-600">Districts Covered</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Digital Services</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
