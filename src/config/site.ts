/**
 * Site-wide configuration
 * Centralized configuration for company information, contact details,
 * social media links, and navigation structure.
 */

export interface ContactInfo {
  email: string;
  phone: string;
  phoneDisplay: string;
  address: {
    street?: string;
    city: string;
    state?: string;
    country: string;
  };
}

export interface SocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
  // Note: These URLs are placeholders. Update with actual company profile URLs.
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationSection {
  title: string;
  links: NavigationLink[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  logo?: string;
}

export interface SiteConfig {
  company: CompanyInfo;
  contact: ContactInfo;
  social: SocialLinks;
  navigation: {
    main: NavigationLink[];
    footer: NavigationSection[];
    legal: NavigationLink[];
  };
}

export const siteConfig: SiteConfig = {
  company: {
    name: "AureoTravels",
    tagline: "Making travel dreams come true since 2020",
    description:
      "Discover India's hidden gems with curated travel experiences. We craft unforgettable journeys across incredible destinations.",
    foundedYear: 2020,
  },

  contact: {
    email: "contact@aureotravel.com",
    phone: "+919876543210",
    phoneDisplay: "+91 98765 43210",
    address: {
      city: "New Delhi",
      country: "India",
    },
  },

  social: {
    // TODO: Replace these placeholder URLs with actual company social media profiles
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },

  navigation: {
    // Main navigation (used in navbar and footer)
    main: [
      { label: "Home", href: "/" },
      { label: "Destinations", href: "/destinations" },
      { label: "Packages", href: "/packages" },
      { label: "Stories", href: "/stories" },
      { label: "Contact", href: "/contact" },
    ],

    // Footer-specific navigation sections
    footer: [
      {
        title: "Quick Links",
        links: [
          { label: "Destinations", href: "/destinations" },
          { label: "Travel Packages", href: "/packages" },
          { label: "Travel Stories", href: "/stories" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ],

    // Legal links
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};
