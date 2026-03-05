import { siteConfig } from "@/config/site";

export function FooterAbout() {
  return (
    <section aria-labelledby="footer-about-heading">
      <div className="flex items-center gap-2 mb-4">
        <svg className="h-8 w-8 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
          <title>AureoTravels Logo</title>
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2 L12 12 L18 8 Z" />
        </svg>
        <h2 id="footer-about-heading" className="text-xl font-bold">
          <span className="text-white">Aureo</span>
          <span className="text-teal-400">Travels</span>
        </h2>
      </div>
      <p className="text-gray-400 mb-4">
        {siteConfig.company.description}
      </p>
      <p className="text-sm text-gray-500">
        {siteConfig.company.tagline}
      </p>
    </section>
  );
}
