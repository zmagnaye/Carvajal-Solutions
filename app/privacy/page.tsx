import type { Metadata } from "next";
import BrandLogo from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Privacy Policy | Carvajal Solutions",
  description:
    "Privacy Policy for the Carvajal Solutions website and business automation consulting services.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-(--cs-blue)/55">
          Last updated: September 10, 2026
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-(--cs-blue)/75">
          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              1. Introduction
            </h2>

            <p className="mt-4">
              Carvajal Solutions respects your privacy. This Privacy Policy
              explains how information may be collected, used, and handled when
              you visit our website, contact us, or inquire about our business
              automation consulting services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              2. Information You Provide
            </h2>

            <p className="mt-4">
              We may receive information that you choose to provide when you
              contact us by email or otherwise communicate with Carvajal
              Solutions. This may include your name, email address, phone
              number, business information, preferred meeting times, and
              information about the workflows, systems, or business processes
              you would like to discuss.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              3. Technical Information
            </h2>

            <p className="mt-4">
              When you visit the website, our hosting, security, analytics, or
              infrastructure providers may automatically process standard
              technical information such as IP address, browser type, device
              information, request information, referring pages, and website
              activity.
            </p>

            <p className="mt-4">
              This information may be used to operate, secure, maintain, and
              improve the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              4. How We Use Information
            </h2>

            <p className="mt-4">Information may be used to:</p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Respond to inquiries and consultation requests.</li>
              <li>Communicate with prospective or existing clients.</li>
              <li>Understand business needs and workflow requirements.</li>
              <li>Provide and improve our services.</li>
              <li>Operate, maintain, and secure the website.</li>
              <li>Prevent misuse, fraud, or security issues.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              5. Sharing of Information
            </h2>

            <p className="mt-4">
              We do not sell personal information. Information may be shared
              with service providers or technology providers when reasonably
              necessary to operate the website, communicate with you, provide
              services, or support business operations.
            </p>

            <p className="mt-4">
              Information may also be disclosed when required by law or when
              reasonably necessary to protect Carvajal Solutions, our clients,
              or others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              6. Third-Party Services
            </h2>

            <p className="mt-4">
              The website or our services may rely on third-party platforms,
              hosting providers, communication services, automation tools, or
              other technology providers. Those third parties may process
              information according to their own privacy policies and terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              7. Data Retention
            </h2>

            <p className="mt-4">
              We may retain information for as long as reasonably necessary to
              respond to inquiries, provide services, maintain business records,
              resolve disputes, protect our systems, and comply with legal
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              8. Data Security
            </h2>

            <p className="mt-4">
              We take reasonable steps to protect information, but no website,
              email system, network, or electronic storage method can guarantee
              complete security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              9. Your Choices
            </h2>

            <p className="mt-4">
              You may contact us if you have questions about information you
              have provided to Carvajal Solutions or would like to request that
              we review, correct, or delete information where appropriate and
              legally permitted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              10. Children&apos;s Privacy
            </h2>

            <p className="mt-4">
              This website and our consulting services are intended for
              businesses and are not directed toward children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              11. Changes to This Policy
            </h2>

            <p className="mt-4">
              We may update this Privacy Policy as our website, services, or
              business practices change. The updated version will be posted on
              this page with a revised date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-(--cs-navy)">
              12. Contact
            </h2>

            <p className="mt-4">
              Questions about this Privacy Policy may be sent to:
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