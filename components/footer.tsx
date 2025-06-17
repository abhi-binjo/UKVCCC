import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About UKVC</h3>
            <p className="text-gray-300 text-sm">
              Uttarakhand State Veterinary Council is a statutory body established under IVC Act 1984 for regulating
              veterinary practice in Uttarakhand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-gray-300 hover:text-white">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/act-rules" className="text-gray-300 hover:text-white">
                  Act & Rules
                </Link>
              </li>
              <li>
                <Link href="/circular" className="text-gray-300 hover:text-white">
                  Circulars
                </Link>
              </li>
              <li>
                <Link href="/rti" className="text-gray-300 hover:text-white">
                  RTI
                </Link>
              </li>
              <li>
                <Link href="/noc-form" className="text-gray-300 hover:text-white">
                  NOC Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p>Uttarakhand State Veterinary Council</p>
              <p>Dehradun, Uttarakhand</p>
              <p>Email: info@ukvc.in</p>
              <p>Phone: +91-XXXXXXXXXX</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">© 2024 Uttarakhand State Veterinary Council. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
