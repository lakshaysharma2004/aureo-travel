export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=90"
            alt="Contact Us"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-green-900/70 via-teal-900/60 to-blue-900/70" />
        </div>
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white drop-shadow-2xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-xl text-white drop-shadow-lg">
              Have questions? We're here to help plan your perfect journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Email */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-blue-100 p-4">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Email</h3>
            <p className="text-gray-600">contact@aureotravel.com</p>
          </div>

          {/* Phone */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-blue-100 p-4">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          {/* Address */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-blue-100 p-4">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Office</h3>
            <p className="text-gray-600">New Delhi, India</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Business Hours
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST
            </p>
            <p>
              <strong>Saturday:</strong> 10:00 AM - 4:00 PM IST
            </p>
            <p>
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
