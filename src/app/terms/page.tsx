import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Aureo Travel",
};

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: March 5, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using {siteConfig.company.name}'s website and services, you agree to be 
              bound by these Terms of Service. If you disagree with any part of these terms, you may 
              not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services Description</h2>
            <p className="text-gray-700 mb-4">
              {siteConfig.company.name} provides travel planning, booking, and related services for 
              destinations across India. We act as an intermediary between travelers and service 
              providers including hotels, transportation, and activity operators.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Booking and Payment</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All bookings are subject to availability and confirmation</li>
              <li>Prices are subject to change until booking is confirmed</li>
              <li>Payment must be received according to the payment schedule provided</li>
              <li>We accept major credit cards and other specified payment methods</li>
              <li>All payments are processed securely</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cancellation and Refunds</h2>
            <p className="text-gray-700 mb-4">
              Cancellation policies vary by package and service provider. Specific cancellation 
              terms will be provided at the time of booking. General policies include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Cancellations must be submitted in writing</li>
              <li>Cancellation fees may apply based on timing</li>
              <li>Some bookings may be non-refundable</li>
              <li>Refunds are processed within 14-21 business days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Travel Documents</h2>
            <p className="text-gray-700 mb-4">
              You are responsible for ensuring you have all necessary travel documents including 
              valid identification, visas, and health certificates. We are not responsible for 
              any issues arising from inadequate documentation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Liability</h2>
            <p className="text-gray-700 mb-4">
              {siteConfig.company.name} acts as an agent for service providers. While we strive 
              to ensure quality, we are not liable for acts, errors, or omissions of third-party 
              providers. Our liability is limited to the amount paid for our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Itinerary</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify itineraries due to circumstances beyond our control, 
              including weather, political situations, or other unforeseen events. We will make 
              reasonable efforts to provide comparable alternatives.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on this website, including text, images, logos, and designs, is owned 
              by {siteConfig.company.name} or our licensors and is protected by copyright and 
              other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of India. Any disputes shall be subject to 
              the exclusive jurisdiction of the courts in New Delhi, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <p className="text-gray-700">
              Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-600 hover:underline">
                {siteConfig.contact.email}
              </a>
              <br />
              Phone: <a href={`tel:${siteConfig.contact.phone}`} className="text-blue-600 hover:underline">
                {siteConfig.contact.phoneDisplay}
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Updated terms will be 
              posted on this page with a new "Last updated" date. Continued use of our services 
              after changes constitutes acceptance of the modified terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
