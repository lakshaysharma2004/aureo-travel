import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FooterAbout } from "./footer/FooterAbout";
import { FooterNavigation } from "./footer/FooterNavigation";
import { FooterContact } from "./footer/FooterContact";
import { FooterSocial } from "./footer/FooterSocial";
import { BackToTop } from "./footer/BackToTop";
import { generateOrganizationSchema } from "@/lib/schema";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <footer className="bg-gray-900 text-gray-300" role="contentinfo">
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FooterAbout />
            <FooterNavigation />
            <FooterContact />
            <FooterSocial />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-400">
                © {currentYear} {siteConfig.company.name}. All rights reserved.
              </p>
              <nav aria-label="Legal">
                <ul className="flex gap-6" role="list">
                  {siteConfig.navigation.legal.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors duration-200 hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
}
