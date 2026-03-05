import Link from "next/link";
import { siteConfig } from "@/config/site";

export function FooterNavigation() {
  return (
    <section aria-labelledby="footer-links-heading">
      <h2 id="footer-links-heading" className="text-lg font-semibold text-white mb-4">
        Quick Links
      </h2>
      <nav>
        <ul role="list" className="space-y-2">
          {siteConfig.navigation.footer[0].links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-300 transition-colors duration-200 hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
