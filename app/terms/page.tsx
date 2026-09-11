import type { Metadata } from "next";
import BrandLogo from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Terms of Use | Carvajal Solutions",
  description:
    "Terms of Use for the Carvajal Solutions website and business automation consulting services.",
};

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-(--cs-off-white) text-(--cs-navy)">
      <header className="bg-(--cs-navy) text-(--cs-off-white)">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <BrandLogo href="/" />

          <a
            href="/"
            className="text-sm font-semibold text-(--cs-off-white)/70 transition-colors hover:text-(--cs-green)"
          >
            Back to Home
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-xs font-bold tracking-[0.16em] text-(--cs-green-dark) sm:text-sm">
          CARVAJAL SOLUTIONS
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Terms of Use
        </h1>

        <p className="mt-4 text-sm text-(--cs-blue)/55">
          Last updated: September 10, 2026
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-(--cs-blue)/75">
          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              1. Acceptance of Terms
            </h2>

            <p className="mt-4">
              By accessing or using the Carvajal Solutions website, you agree
              to these Terms of Use. If you do not agree with these terms,
              please do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              2. Website Purpose
            </h2>

            <p className="mt-4">
              This website provides general information about Carvajal
              Solutions, our business automation consulting services, example
              workflows, and potential automation use cases.
            </p>

            <p className="mt-4">
              Website content is provided for informational and marketing
              purposes and does not by itself create a consulting relationship,
              contractual relationship, or obligation to provide services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              3. Consulting Services
            </h2>

            <p className="mt-4">
              Any consulting, implementation, automation, integration, or other
              professional services will be subject to the specific scope,
              pricing, responsibilities, and terms agreed upon separately
              between Carvajal Solutions and the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              4. No Guaranteed Results
            </h2>

            <p className="mt-4">
              Examples, demonstrations, workflows, descriptions, and potential
              outcomes shown on this website are illustrative. Actual results
              depend on the client&apos;s business, systems, processes,
              technology, implementation, and other circumstances.
            </p>

            <p className="mt-4">
              Carvajal Solutions does not guarantee specific financial,
              operational, sales, conversion, productivity, or business
              outcomes from the use of automation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              5. Website Demonstrations
            </h2>

            <p className="mt-4">
              Interactive demonstrations and example workflows on this website
              are provided to illustrate how automation may work in a business
              context. They are not representations of a complete production
              system for every business or use case.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              6. Acceptable Use
            </h2>

            <p className="mt-4">
              You agree not to misuse the website or attempt to interfere with
              its operation, security, availability, infrastructure, or other
              users.
            </p>

            <p className="mt-4">
              You may not use the website for unlawful, fraudulent, abusive, or
              harmful purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              7. Intellectual Property
            </h2>

            <p className="mt-4">
              Unless otherwise stated, the website design, branding, written
              content, graphics, demonstrations, and other original materials
              made available by Carvajal Solutions are owned by or licensed to
              Carvajal Solutions.
            </p>

            <p className="mt-4">
              You may view the website for personal or business evaluation
              purposes, but you may not reproduce, distribute, sell, or
              commercially exploit protected materials without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              8. Third-Party Services
            </h2>

            <p className="mt-4">
              Our website, demonstrations, or consulting services may reference
              or interact with third-party platforms, applications, websites,
              or services. Carvajal Solutions does not control third-party
              services and is not responsible for their availability, security,
              policies, functionality, or content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              9. Disclaimer
            </h2>

            <p className="mt-4">
              The website is provided on an &quot;as is&quot; and
              &quot;as available&quot; basis. While we aim to provide accurate
              and useful information, we do not warrant that the website will
              always be uninterrupted, error-free, complete, or suitable for
              every purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              10. Limitation of Liability
            </h2>

            <p className="mt-4">
              To the extent permitted by applicable law, Carvajal Solutions
              will not be liable for indirect, incidental, special,
              consequential, or similar damages arising solely from use of, or
              inability to use, this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              11. Changes to These Terms
            </h2>

            <p className="mt-4">
              We may update these Terms of Use from time to time. Updated terms
              will be posted on this page with a revised date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              12. Contact
            </h2>

            <p className="mt-4">
              Questions regarding these Terms of Use may be sent to:
            </p>

            <a
              href="mailto:pcarvajal@carvajalsolutions.com"
              className="mt-3 inline-block font-semibold text-(--cs-green-dark) transition-colors hover:text-(--cs-navy)"
            >
              pcarvajal@carvajalsolutions.com
            </a>
          </section>
        </div>
      </section>

      <footer className="bg-(--cs-navy) text-(--cs-off-white)">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-(--cs-off-white)/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {currentYear} Carvajal Solutions. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="/privacy"
              className="transition-colors hover:text-(--cs-off-white)"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors hover:text-(--cs-off-white)"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}