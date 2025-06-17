"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    college: "",
    yearOfPassing: "",
    registrationNumber: "",
    category: "",
    experience: "",
    specialization: "",
    documents: null as File | null,
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the data to your API
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Registration Successful",
          description:
            "Your registration has been submitted successfully. You will receive a confirmation email shortly.",
        })
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          qualification: "",
          college: "",
          yearOfPassing: "",
          registrationNumber: "",
          category: "",
          experience: "",
          specialization: "",
          documents: null,
          agreeToTerms: false,
        })
      } else {
        throw new Error("Registration failed")
      }
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Veterinary Registration</h1>
            <p className="text-gray-600">
              Register with the Uttarakhand State Veterinary Council to practice veterinary medicine in Uttarakhand
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
              <CardDescription>
                Please fill in all required information accurately. All fields marked with * are mandatory.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Registration Category *</Label>
                    <Select onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New Registration</SelectItem>
                        <SelectItem value="renewal">License Renewal</SelectItem>
                        <SelectItem value="transfer">Transfer from Other State</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Complete Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                    className="mt-1"
                    rows={3}
                  />
                </div>

                {/* Educational Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Educational Qualification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="qualification">Degree/Qualification *</Label>
                      <Input
                        id="qualification"
                        type="text"
                        value={formData.qualification}
                        onChange={(e) => handleInputChange("qualification", e.target.value)}
                        required
                        className="mt-1"
                        placeholder="e.g., B.V.Sc. & A.H."
                      />
                    </div>
                    <div>
                      <Label htmlFor="college">College/University *</Label>
                      <Input
                        id="college"
                        type="text"
                        value={formData.college}
                        onChange={(e) => handleInputChange("college", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <Label htmlFor="yearOfPassing">Year of Passing *</Label>
                      <Input
                        id="yearOfPassing"
                        type="number"
                        value={formData.yearOfPassing}
                        onChange={(e) => handleInputChange("yearOfPassing", e.target.value)}
                        required
                        className="mt-1"
                        min="1950"
                        max="2024"
                      />
                    </div>
                    <div>
                      <Label htmlFor="registrationNumber">Previous Registration Number (if any)</Label>
                      <Input
                        id="registrationNumber"
                        type="text"
                        value={formData.registrationNumber}
                        onChange={(e) => handleInputChange("registrationNumber", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Professional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        type="number"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        className="mt-1"
                        min="0"
                      />
                    </div>
                    <div>
                      <Label htmlFor="specialization">Area of Specialization</Label>
                      <Input
                        id="specialization"
                        type="text"
                        value={formData.specialization}
                        onChange={(e) => handleInputChange("specialization", e.target.value)}
                        className="mt-1"
                        placeholder="e.g., Small Animal Practice, Large Animal Medicine"
                      />
                    </div>
                  </div>
                </div>

                {/* Document Upload */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Document Upload</h3>
                  <div>
                    <Label htmlFor="documents">Upload Documents (PDF only) *</Label>
                    <Input
                      id="documents"
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleInputChange("documents", e.target.files?.[0] || null)}
                      required
                      className="mt-1"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Please upload a single PDF containing: Degree Certificate, Mark Sheets, Identity Proof, Address
                      Proof
                    </p>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="border-t pt-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm">
                      I agree to the terms and conditions and certify that all information provided is accurate *
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={!formData.agreeToTerms || isSubmitting}
                    className="px-12 py-3 bg-blue-600 hover:bg-blue-700"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Registration"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Fee Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Registration Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">New Registration</h4>
                  <p className="text-2xl font-bold text-blue-600">₹2,000</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">License Renewal</h4>
                  <p className="text-2xl font-bold text-green-600">₹1,000</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Transfer Certificate</h4>
                  <p className="text-2xl font-bold text-purple-600">₹500</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Payment can be made online after form submission or through demand draft
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
