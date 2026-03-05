"use client";

import { notFound, useRouter } from "next/navigation";
import { packages } from "@/data/packages";
import { use, useState } from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BookingPage({ params }: PageProps) {
  const { slug } = use(params);
  const router = useRouter();
  const packageData = packages.find((p) => p.slug === slug);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    numTravelers: "1",
    specialRequests: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
  });

  // Get tomorrow's date for minimum date validation
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // Get max date (1 year from now)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    return maxDate.toISOString().split('T')[0];
  };

  if (!packageData) {
    notFound();
  }

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      travelDate: "",
    };

    let isValid = true;

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Name can only contain letters and spaces";
      isValid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[+]?[0-9]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Phone must be 10-15 digits (optional + prefix)";
      isValid = false;
    }

    // Validate Travel Date
    if (!formData.travelDate) {
      newErrors.travelDate = "Travel date is required";
      isValid = false;
    } else {
      const selectedDate = new Date(formData.travelDate);
      const tomorrow = new Date(getTomorrowDate());
      const maxDate = new Date(getMaxDate());

      if (selectedDate < tomorrow) {
        newErrors.travelDate = "Travel date must be at least tomorrow";
        isValid = false;
      } else if (selectedDate > maxDate) {
        newErrors.travelDate = "Travel date cannot be more than 1 year from now";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    const bookingData = {
      package: packageData.title,
      packageSlug: slug,
      ...formData,
    };

    console.log("Booking Request Submitted:", bookingData);

    try {
      // Send booking data to API
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (result.success) {
        // Redirect to confirmation page
        router.push("/booking-confirmed");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Package Summary */}
        <div className="mb-8 overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Hero Image */}
            <div className="h-64 w-full md:h-auto">
              <img
                src={packageData.heroImage}
                alt={packageData.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Package Info */}
            <div className="flex flex-col justify-center p-6">
              <h1 className="mb-4 text-3xl font-bold text-gray-900">
                {packageData.title}
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {packageData.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="h-6 w-6 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Price per person</p>
                    <p className="text-2xl font-bold text-teal-600">
                      ₹{packageData.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Book Your Experience
            </h2>
            <p className="mt-2 text-gray-600">
              Fill in the details below and we'll get back to you shortly
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className={`mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className={`mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                }`}
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Travel Date and Number of Travelers Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Travel Date */}
              <div>
                <label
                  htmlFor="travelDate"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Travel Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="travelDate"
                  name="travelDate"
                  required
                  min={getTomorrowDate()}
                  max={getMaxDate()}
                  value={formData.travelDate}
                  onChange={handleInputChange}
                  className={`mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
                    errors.travelDate
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  }`}
                />
                {errors.travelDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.travelDate}</p>
                )}
              </div>

              {/* Number of Travelers */}
              <div>
                <label
                  htmlFor="numTravelers"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Number of Travelers <span className="text-red-500">*</span>
                </label>
                <select
                  id="numTravelers"
                  name="numTravelers"
                  required
                  value={formData.numTravelers}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Person" : "People"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label
                htmlFor="specialRequests"
                className="block text-sm font-semibold text-gray-700"
              >
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows={4}
                maxLength={500}
                value={formData.specialRequests}
                onChange={handleInputChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Any special requirements or requests? (optional, max 500 characters)"
              />
              <p className="mt-1 text-sm text-gray-500">
                {formData.specialRequests.length}/500 characters
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-teal-600 py-4 text-lg font-semibold text-white hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-colors"
              >
                Submit Booking Request
              </button>
            </div>

            {/* Note */}
            <p className="text-center text-sm text-gray-600">
              By submitting this form, you agree to our terms and conditions
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
