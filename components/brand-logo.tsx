import Image from "next/image";

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
    <a
      href={href}
      aria-label="Carvajal Solutions home"
      className={`flex shrink-0 items-center ${
        compact ? "gap-2.5" : "gap-3 sm:gap-3.5"
      } ${className}`}
    >
      <div
        className={`relative shrink-0 overflow-hidden bg-white ${
          compact
            ? "h-9 w-9"
            : "h-11 w-11 sm:h-12 sm:w-12 lg:h-13 lg:w-13"
        }`}
      >
        <Image
          src="/branding/CarvajalSolutionsLogo2.png"
          alt="Carvajal Solutions"
          fill
          priority
          sizes={compact ? "36px" : "(max-width: 640px) 44px, 52px"}
          className="object-contain"
        />
      </div>

      <span
        style={{ fontFamily: "var(--font-montserrat)" }}
        className={`whitespace-nowrap font-semibold leading-none tracking-[-0.025em] text-(--cs-off-white) ${
          compact
            ? "text-base sm:text-lg"
            : "text-[1.05rem] sm:text-[1.3rem] lg:text-[1.4rem]"
        }`}
      >
        Carvajal Solutions
      </span>
    </a>
  );
}