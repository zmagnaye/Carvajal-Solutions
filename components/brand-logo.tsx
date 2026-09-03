import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  compact?: boolean;
  className?: string;
};

export default function BrandLogo({
  href = "#top",
  compact = false,
  className = "",
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      aria-label="Carvajal Solutions home"
      className={`relative block shrink-0 ${
        compact
          ? "h-10 w-14"
          : "h-11 w-16 sm:h-14 sm:w-20 lg:h-16 lg:w-24"
      } ${className}`}
    >
      <Image
        src="/branding/CarvajalSolutionsLogo2.png"
        alt="Carvajal Solutions"
        fill
        priority
        sizes={
          compact
            ? "56px"
            : "(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
        }
        className="object-contain object-left"
      />
    </Link>
  );
}