"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigationItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "ACT & RULES", href: "/act-rules" },
  { name: "ANNUAL REPORTS", href: "/annual-reports" },
  { name: "CIRCULAR", href: "/circular" },
  { name: "COMMITTEES", href: "/committees" },
  { name: "SERVICES", href: "/services" },
  { name: "RTI", href: "/rti" },
  { name: "NOC FORM", href: "/noc-form" },
  { name: "RESTORE CERTIFICATE", href: "/restore-certificate" },
  { name: "INSTRUCTIONS", href: "/instructions" },
  { name: "GALLERY", href: "/gallery" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">
            STATUTORY BODY ESTABLISHED UNDER IVC ACT 1984 (52 OF 1984) BY GOVT. OF Uttarakhand
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-red-600">Uttarakhand State Veterinary Council</h1>
            </div>
          </div>

          {/* Right Logo */}
          <div className="hidden md:block">
            <div className="w-20 h-16 bg-blue-100 rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">UKVC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="gradient-bg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link text-white px-3 py-4 text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Registration Button */}
            <div className="hidden lg:block">
              <Link href="/registration">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">Registration</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-blue-800 py-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white px-4 py-2 text-sm hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2">
                <Link href="/registration">
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full">Registration</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
