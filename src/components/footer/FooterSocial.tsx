import { siteConfig } from "@/config/site";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "@/components/icons";
import { SocialButton } from "./SocialButton";
import { NewsletterForm } from "./NewsletterForm";

export function FooterSocial() {
  return (
    <section aria-labelledby="footer-social-heading">
      <h2 id="footer-social-heading" className="text-lg font-semibold text-white mb-4">
        Follow Us
      </h2>
      <div className="flex gap-3 mb-4">
        <SocialButton
          href={siteConfig.social.facebook}
          label="Follow us on Facebook"
          icon={<FacebookIcon className="w-6 h-6" />}
        />
        <SocialButton
          href={siteConfig.social.twitter}
          label="Follow us on Twitter"
          icon={<TwitterIcon className="w-6 h-6" />}
        />
        <SocialButton
          href={siteConfig.social.instagram}
          label="Follow us on Instagram"
          icon={<InstagramIcon className="w-6 h-6" />}
        />
      </div>
      <p className="text-gray-400 text-sm mb-2">
        Stay updated with our latest travel packages and destination guides.
      </p>
      <NewsletterForm />
    </section>
  );
}
