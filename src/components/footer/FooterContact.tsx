import { siteConfig } from "@/config/site";
import { EmailIcon, PhoneIcon, LocationIcon } from "@/components/icons";

export function FooterContact() {
  return (
    <section aria-labelledby="footer-contact-heading">
      <h2 id="footer-contact-heading" className="text-lg font-semibold text-white mb-4">
        Contact Info
      </h2>
      <address className="not-italic space-y-3">
        <div className="flex items-start gap-3">
          <EmailIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-gray-300 transition-colors duration-200 hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            {siteConfig.contact.email}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <PhoneIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="text-gray-300 transition-colors duration-200 hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            {siteConfig.contact.phoneDisplay}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <LocationIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
          <span className="text-gray-300">
            {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
          </span>
        </div>
      </address>
    </section>
  );
}
