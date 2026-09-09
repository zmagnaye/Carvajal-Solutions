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
      className={`flex shrink-0 items-center gap-0 ${className}`}
    >
      <div
        className={`relative shrink-0 ${
          compact
            ? "h-10 w-14"
            : "h-11 w-16 sm:h-14 sm:w-20 lg:h-16 lg:w-24"
        }`}
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
      </div>

      <span
        style={{ fontFamily: "var(--font-montserrat)" }}
        className={`-ml-1 whitespace-nowrap font-semibold leading-none tracking-[-0.02em] text-(--cs-off-white) sm:-ml-2 ${
          compact
            ? "text-[1.05rem] sm:text-lg"
            : "text-[1.15rem] sm:text-[1.45rem] lg:text-[1.55rem]"
        }`}
      >
        Carvajal Solutions
      </span>
    </a>
  );
}