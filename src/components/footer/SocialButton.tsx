import Link from "next/link";
import { ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  label: string;
  icon: ReactNode;
}

export function SocialButton({ href, label, icon }: SocialButtonProps) {
  return (
    <Link
      href={href}
      className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-800 text-gray-300 transition-colors duration-200 hover:bg-gray-700 hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}
