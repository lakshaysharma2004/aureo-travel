import { siteConfig } from "@/config/site";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.name,
    description: siteConfig.company.description,
    foundingDate: siteConfig.company.foundedYear.toString(),
    url: typeof window !== "undefined" ? window.location.origin : "https://aureotravel.com",
    logo: typeof window !== "undefined" ? `${window.location.origin}/logo.png` : undefined,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address.city,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
    ],
  };
}
