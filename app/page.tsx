import BrandLogo from "@/components/brand-logo";
import LeadDemo from "@/components/lead-demo";

const workflowSteps = [
  {
    number: "01",
    title: "Instant Response",
    description: "Respond to new inquiries while interest is still high.",
  },
  {
    number: "02",
    title: "Engage & Qualify",
    description: "Ask relevant questions and understand what the lead needs.",
  },
  {
    number: "03",
    title: "Follow Up",
    description: "Keep conversations moving without repetitive manual work.",
  },
  {
    number: "04",
    title: "Filter & Qualify",
    description:
      "Identify qualified opportunities and the appropriate next step.",
  },
  {
    number: "05",
    title: "Book or Hand Off",
    description: "Move qualified leads toward scheduling or your team.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Respond Faster",
    description:
      "Give new inquiries attention sooner instead of letting valuable leads sit unanswered.",
  },
  {
    number: "02",
    title: "Follow Up Consistently",
    description:
      "Create a repeatable process that keeps conversations moving even when your team gets busy.",
  },
  {
    number: "03",
    title: "Qualify More Efficiently",
    description:
      "Collect useful information and help identify which opportunities deserve attention.",
  },
  {
    number: "04",
    title: "Reduce Manual Work",
    description:
      "Spend less time repeating the same follow-up tasks and more time serving customers.",
  },
  {
    number: "05",
    title: "Keep Leads Organized",
    description:
      "Give your team clearer visibility into who responded, what they need, and what happens next.",
  },
  {
    number: "06",
    title: "Move Toward Scheduling",
    description:
      "Guide qualified prospects toward appointments, consultations, estimates, or a human handoff.",
  },
];

const industries = [
  {
    name: "Home Services",
    examples: "HVAC, plumbing, roofing, electrical",
    initials: "HS",
  },
  {
    name: "Professional Services",
    examples: "Consulting, insurance, agencies",
    initials: "PS",
  },
  {
    name: "Real Estate",
    examples: "Agents, teams, property services",
    initials: "RE",
  },
  {
    name: "Health & Wellness",
    examples: "Dental, med spas, fitness",
    initials: "HW",
  },
  {
    name: "Automotive",
    examples: "Dealers, repair, service centers",
    initials: "AU",
  },
  {
    name: "Legal",
    examples: "Law firms and consultation-based practices",
    initials: "LG",
  },
];

const conversationQuestions = [
  "What process is taking too much manual time today?",
  "Which tools or systems are involved in that process?",
  "Where do delays, missed steps, or repetitive work happen most often?",
  "What parts of the process should stay under human control?",
  "What would a better workflow look like for your team?",
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  const consultationSubject = encodeURIComponent(
    "Carvajal Solutions Consultation Request",
  );

  const consultationBody = encodeURIComponent(`Hi Patrick,

I came across the Carvajal Solutions website and would like to learn more about my automation options and get help with my business.

I'm hoping to connect sometime this week.

My preferred date/time is:
[Preferred date and time]

The process or workflow I'd like help with is:
[Brief description]

You can contact me at:
[Phone number or preferred contact method]

Thank you.`);

  const consultationLink = `mailto:pcarvajal@carvajalsolutions.com?subject=${consultationSubject}&body=${consultationBody}`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-(--cs-navy) text-(--cs-off-white)">
      {/* NAVBAR */}
      <header className="border-b border-(--cs-off-white)/10 bg-(--cs-navy)">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <BrandLogo />

          <div className="flex items-center gap-4 sm:gap-6">
            <nav
              className="hidden items-center gap-8 text-sm font-medium text-(--cs-off-white)/70 md:flex"
              aria-label="Main navigation"
            >
              <a
                href="#services"
                className="transition-colors hover:text-(--cs-green)"
              >
                Services
              </a>

              <a
                href="#how-it-works"
                className="transition-colors hover:text-(--cs-green)"
              >
                How It Works
              </a>

              <a
                href="#contact"
                className="transition-colors hover:text-(--cs-green)"
              >
                Contact
              </a>
            </nav>

            <a
              href="#demo"
              className="rounded-full bg-(--cs-green) px-4 py-2 text-xs font-bold text-(--cs-navy) transition-all hover:-translate-y-0.5 hover:bg-(--cs-green-dark) hover:text-(--cs-off-white) sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Try the Demo
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(114,176,29,0.18),transparent_34%)]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-(--cs-blue)/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 sm:py-20 lg:min-h-[calc(100vh-82px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-(--cs-green)/40 bg-(--cs-green)/10 px-3.5 py-2 text-xs font-semibold leading-5 text-(--cs-green) sm:mb-7 sm:px-4 sm:text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-(--cs-green)" />
              Business Automation Consulting
            </div>

            <h1 className="max-w-3xl text-[2.65rem] leading-[0.98] font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              <span className="block">Automate the</span>
              <span className="mt-2 block">Work That</span>
              <span className="mt-2 block text-(--cs-green)">Slows Your</span>
              <span className="mt-2 block text-(--cs-green)">
                Business Down.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-(--cs-off-white)/70 sm:mt-7 sm:text-xl sm:leading-8">
              Carvajal Solutions helps businesses design and implement practical
              automation for lead response, follow-up, intake, scheduling,
              notifications, and everyday workflows—so repetitive work is
              handled consistently while your team stays in control.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
              <a
                href={consultationLink}
                className="inline-flex w-full items-center justify-center rounded-full bg-(--cs-green) px-6 py-3.5 font-bold text-(--cs-navy) transition-all hover:-translate-y-0.5 hover:bg-(--cs-green-dark) hover:text-(--cs-off-white) sm:w-auto sm:px-7"
              >
                Book a Consultation
              </a>

              <a
                href="#demo"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#031d44",
                }}
                className="inline-flex w-full items-center justify-center rounded-full border border-white px-6 py-3.5 font-bold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:w-auto sm:px-7"
              >
                Try the Demo
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-(--cs-off-white)/50 sm:mt-10 sm:flex sm:flex-wrap sm:gap-x-8 sm:text-sm">
              <span>Fast response</span>
              <span>Consistent follow-up</span>
              <span>Lead qualification</span>
              <span>Appointment-ready</span>
            </div>
          </div>

          {/* WORKFLOW */}
          <div id="workflow" className="relative scroll-mt-24">
            <div className="absolute -inset-8 rounded-full bg-(--cs-green)/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-(--cs-off-white)/10 bg-(--cs-blue)/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:rounded-[2rem] sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-(--cs-off-white)/10 pb-5 sm:mb-6">
                <div>
                  <p className="text-xs font-semibold text-(--cs-green) sm:text-sm">
                    LIVE WORKFLOW
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-(--cs-off-white) sm:text-xl">
                    New lead received
                  </h2>
                </div>

                <div className="rounded-full bg-(--cs-green-dark) px-3 py-1.5 text-[10px] font-bold text-(--cs-off-white) sm:text-xs">
                  ACTIVE
                </div>
              </div>

              <div className="space-y-3">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="group flex gap-3 rounded-2xl border border-(--cs-off-white)/10 bg-(--cs-navy)/25 p-3.5 transition-colors hover:bg-(--cs-navy)/40 sm:gap-4 sm:p-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-(--cs-green) text-[11px] font-black text-(--cs-navy) sm:h-10 sm:w-10 sm:text-xs">
                        {step.number}
                      </div>

                      {index !== workflowSteps.length - 1 && (
                        <div className="mt-2 h-full min-h-4 w-px bg-(--cs-off-white)/10" />
                      )}
                    </div>

                    <div className="min-w-0 pb-1">
                      <h3 className="text-sm font-bold text-(--cs-off-white) sm:text-base">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-(--cs-off-white)/55 sm:text-sm sm:leading-6">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl bg-(--cs-green) p-4 text-(--cs-navy) sm:mt-5 sm:p-5">
                <p className="text-[10px] font-black tracking-[0.15em] sm:text-xs">
                  OUTCOME
                </p>

                <p className="mt-2 text-sm font-bold sm:text-base">
                  Qualified lead → Appointment or human handoff
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMATION CONSULTING OFFER */}
      <section className="bg-(--cs-off-white) text-(--cs-navy)">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-(--cs-green-dark) sm:text-sm sm:tracking-[0.18em]">
                WHAT WE AUTOMATE
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Practical automation built around your business.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-(--cs-blue)/75 sm:text-lg sm:leading-8">
                Carvajal Solutions works with businesses to identify repetitive
                or inconsistent processes, design a better workflow, and
                implement automation that fits the way your team actually
                works.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-(--cs-blue)/75 sm:text-lg sm:leading-8">
                The goal is simple: reduce unnecessary manual work, improve
                consistency, and give your team more time to focus on the work
                that needs human attention.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Lead Management & Follow-Up",
                  description:
                    "Respond to new inquiries, maintain consistent follow-up, and move qualified opportunities toward the next step.",
                },
                {
                  number: "02",
                  title: "Intake & Qualification",
                  description:
                    "Collect important information, organize requests, and route customers or opportunities appropriately.",
                },
                {
                  number: "03",
                  title: "Scheduling & Notifications",
                  description:
                    "Coordinate appointments, confirmations, reminders, and internal notifications with less repetitive work.",
                },
                {
                  number: "04",
                  title: "Workflow & System Automation",
                  description:
                    "Connect repetitive steps across the tools, systems, and processes your business already uses.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="rounded-3xl border border-(--cs-navy)/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-(--cs-green)/40 hover:shadow-lg sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--cs-green) text-xs font-black text-(--cs-navy)">
                    {item.number}
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-(--cs-blue)/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="scroll-mt-24 bg-white text-(--cs-navy)"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.16em] text-(--cs-green-dark) sm:text-sm sm:tracking-[0.18em]">
              HOW IT WORKS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              From repetitive process to practical automation.
            </h2>

            <p className="mt-6 text-base leading-7 text-(--cs-blue)/75 sm:text-lg sm:leading-8">
              We start with the way your business works today, identify where
              automation can make the biggest difference, and build a solution
              around your actual process—not the other way around.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                description:
                  "Understand your current process, where work gets repetitive, and where delays or inconsistencies are creating problems.",
              },
              {
                number: "02",
                title: "Design",
                description:
                  "Map out a practical automation workflow around your business goals, team, and existing process.",
              },
              {
                number: "03",
                title: "Build & Connect",
                description:
                  "Implement the workflow and connect the tools, systems, notifications, and steps needed to make it work.",
              },
              {
                number: "04",
                title: "Test & Refine",
                description:
                  "Validate the automation, make adjustments, and ensure your team stays in control of the process.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-(--cs-navy)/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-(--cs-green)/40 hover:shadow-lg sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--cs-green) text-xs font-black text-(--cs-navy)">
                  {item.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-(--cs-blue)/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-24 bg-(--cs-blue) text-(--cs-off-white)"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.16em] text-(--cs-green) sm:text-sm sm:tracking-[0.18em]">
              SERVICES & SOLUTIONS
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Automation where your business needs it most.
            </h2>

            <p className="mt-6 text-base leading-7 text-(--cs-off-white)/70 sm:text-lg sm:leading-8">
              Every business has different bottlenecks. Carvajal Solutions
              designs automation around the processes that consume time, create
              delays, or depend too heavily on repetitive manual work.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Lead & Customer Workflow Automation",
                description:
                  "Automate lead response, follow-up, qualification, customer communication, and handoffs so opportunities keep moving.",
              },
              {
                number: "02",
                title: "Intake & Operations Automation",
                description:
                  "Streamline forms, request intake, information collection, internal routing, and repetitive administrative work.",
              },
              {
                number: "03",
                title: "Scheduling & Notification Automation",
                description:
                  "Automate bookings, confirmations, reminders, alerts, status updates, and other time-sensitive communication.",
              },
              {
                number: "04",
                title: "System & Process Integration",
                description:
                  "Connect the tools your business already uses so information moves between systems with less duplicate entry and manual coordination.",
              },
            ].map((service) => (
              <article
                key={service.number}
                className="rounded-3xl border border-(--cs-off-white)/10 bg-(--cs-navy)/35 p-6 transition-all hover:-translate-y-1 hover:border-(--cs-green)/50 hover:bg-(--cs-navy)/50 sm:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--cs-green) text-sm font-black text-(--cs-navy)">
                  {service.number}
                </div>

                <h3 className="mt-5 text-xl font-bold sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-(--cs-off-white)/65">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:mt-12">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-(--cs-green) px-7 py-3.5 font-bold text-(--cs-navy) transition-all hover:-translate-y-0.5 hover:bg-(--cs-green-dark) hover:text-(--cs-off-white) sm:w-auto"
            >
              Discuss Your Workflow
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white text-(--cs-navy)">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-(--cs-green-dark) sm:text-sm sm:tracking-[0.18em]">
                BUILT FOR REAL BUSINESS WORKFLOWS
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Automation should make your operation clearer, not more
                complicated.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-(--cs-blue)/75 sm:text-lg sm:leading-8">
                The best automation supports the way your team works instead of
                forcing your business into a rigid system. We focus on practical
                workflows that reduce repetitive work while keeping important
                decisions visible and controllable.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Built Around Your Existing Workflow",
                  description:
                    "Automation is designed around how your business operates today, with improvements where they make sense.",
                },
                {
                  number: "02",
                  title: "Human Oversight Where It Matters",
                  description:
                    "Important decisions, exceptions, and customer conversations can stay with your team.",
                },
                {
                  number: "03",
                  title: "Practical, Not Overengineered",
                  description:
                    "The focus stays on useful automation that solves a real operational problem without unnecessary complexity.",
                },
                {
                  number: "04",
                  title: "Clear Handoffs & Visibility",
                  description:
                    "Workflows are designed so your team can understand what happened, what comes next, and when human attention is needed.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="rounded-3xl border border-(--cs-navy)/10 bg-(--cs-off-white) p-5 transition-all hover:-translate-y-1 hover:border-(--cs-green)/40 hover:shadow-lg sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--cs-green) text-xs font-black text-(--cs-navy)">
                    {item.number}
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-(--cs-blue)/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-(--cs-off-white) text-(--cs-navy)">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.16em] text-(--cs-green-dark) sm:text-sm sm:tracking-[0.18em]">
              THE PROBLEM
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Leads are valuable.
              <br />
              Slow follow-up is expensive.
            </h2>

            <p className="mt-6 text-base leading-7 text-(--cs-blue)/75 sm:text-lg sm:leading-8">
              Businesses work hard to generate new inquiries, but opportunities
              are often lost when responses are slow, follow-up is inconsistent,
              or busy teams simply do not have time to keep every conversation
              moving.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "A new lead arrives",
                description:
                  "Someone submits a form, sends an inquiry, or asks for more information.",
              },
              {
                number: "02",
                title: "The team is busy",
                description:
                  "Employees are working, helping customers, or handling other priorities.",
              },
              {
                number: "03",
                title: "Follow-up gets delayed",
                description:
                  "Hours pass, messages are forgotten, and prospects begin looking elsewhere.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-(--cs-navy)/10 bg-white p-5 shadow-sm sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--cs-navy) text-sm font-black text-(--cs-off-white)">
                  {item.number}
                </div>

                <h3 className="mt-5 text-xl font-bold sm:mt-6">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-(--cs-blue)/70">
                  {item.description}
                </p>
              </article>
            ))}

            <article className="rounded-3xl border border-(--cs-green)/30 bg-(--cs-green) p-5 shadow-sm sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--cs-navy) text-sm font-black text-(--cs-off-white)">
                04
              </div>

              <h3 className="mt-5 text-xl font-bold text-(--cs-navy) sm:mt-6">
                Opportunity lost
              </h3>

              <p className="mt-3 leading-7 text-(--cs-navy)/75">
                A promising lead can disappear simply because another business
                responded first.
              </p>
            </article>
          </div>

          <div className="my-12 flex items-center gap-4 sm:my-16 lg:my-20">
            <div className="h-px flex-1 bg-(--cs-navy)/10" />

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--cs-navy) text-xl text-(--cs-green)">
              ↓
            </div>

            <div className="h-px flex-1 bg-(--cs-navy)/10" />
          </div>

          <div className="grid items-center gap-10 rounded-3xl bg-(--cs-navy) p-6 text-(--cs-off-white) sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-(--cs-green) sm:text-sm sm:tracking-[0.18em]">
                THE SOLUTION
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Keep every lead moving forward.
              </h2>

              <p className="mt-6 text-base leading-7 text-(--cs-off-white)/70 sm:text-lg sm:leading-8">
                Carvajal Solutions gives businesses a consistent system for
                responding, engaging, following up, qualifying, and moving
                prospects toward the appropriate next step.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {["Respond", "Engage", "Follow Up", "Qualify", "Schedule"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-(--cs-off-white)/10 bg-(--cs-blue)/60 p-4 text-center sm:p-5"
                  >
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-(--cs-green) text-xs font-black text-(--cs-navy)">
                      {index + 1}
                    </div>

                    <p className="mt-4 text-xs font-bold sm:text-sm">{item}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="about" className="bg-white text-(--cs-navy)">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-(--cs-green-dark) sm:text-sm sm:tracking-[0.18em]">
                WHY CARVAJAL SOLUTIONS
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Better follow-up without adding more repetitive work.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-(--cs-blue)/75 sm:text-lg sm:leading-8">
                The goal is not to replace your team. It is to give them a
                stronger system for handling the repetitive parts of lead
                communication so they can focus on the conversations that need
                a human.
              </p>

              <div className="mt-8 rounded-3xl bg-(--cs-off-white) p-5 sm:p-6">
                <p className="text-xs font-bold text-(--cs-green-dark) sm:text-sm">
                  BUILT AROUND THE LEAD JOURNEY
                </p>

                <p className="mt-3 leading-7 text-(--cs-blue)/75">
                  Respond → Engage → Follow Up → Qualify → Schedule → Human
                  Handoff
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="rounded-3xl border border-(--cs-navy)/10 bg-(--cs-off-white) p-5 transition-all hover:-translate-y-1 hover:border-(--cs-green)/40 hover:shadow-lg sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--cs-green) text-xs font-black text-(--cs-navy)">
                    {benefit.number}
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>

                  <p className="mt-3 leading-7 text-(--cs-blue)/70">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        id="industries"
        className="bg-(--cs-blue) text-(--cs-off-white)"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.16em] text-(--cs-green) sm:text-sm sm:tracking-[0.18em]">
                FLEXIBLE BY DESIGN
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                One lead system. Configurable for different businesses.
              </h2>

              <p className="mt-6 text-base leading-7 text-(--cs-off-white)/70 sm:text-lg sm:leading-8">
                Carvajal Solutions is designed around a common problem shared
                across many industries: leads need fast responses, consistent
                follow-up, qualification, and a clear next step.
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-(--cs-off-white)/55">
              These are example use cases, not limitations. The underlying
              workflow remains configurable around each business.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.name}
                className="group rounded-3xl border border-(--cs-off-white)/10 bg-(--cs-navy)/35 p-5 transition-all hover:-translate-y-1 hover:border-(--cs-green)/50 hover:bg-(--cs-navy)/50 sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--cs-green) text-sm font-black text-(--cs-navy)">
                  {industry.initials}
                </div>

                <h3 className="mt-6 text-xl font-bold">{industry.name}</h3>

                <p className="mt-2 leading-7 text-(--cs-off-white)/60">
                  {industry.examples}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-(--cs-green)/30 bg-(--cs-navy) p-6 sm:mt-14 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] text-(--cs-green) sm:text-sm sm:tracking-[0.18em]">
                  THE PLATFORM STAYS THE SAME
                </p>

                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  The business configuration changes. The lead engine does not.
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-(--cs-off-white)/65">
                  Industry, services, qualification questions, tone, follow-up
                  rules, and scheduling preferences can change while the core
                  automation workflow remains consistent.
                </p>
              </div>

              <a
                href="#demo"
                className="inline-flex w-full items-center justify-center rounded-full bg-(--cs-green) px-6 py-3.5 font-bold text-(--cs-navy) transition-all hover:-translate-y-0.5 hover:bg-(--cs-green-dark) hover:text-(--cs-off-white) sm:w-auto"
              >
                Try the Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <LeadDemo />

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-10 bg-white text-(--cs-navy)"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="overflow-hidden rounded-3xl bg-(--cs-navy) lg:rounded-[2rem]">
            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-14">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] text-(--cs-green) sm:text-sm sm:tracking-[0.18em]">
                  LET&apos;S TALK
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.03em] text-(--cs-off-white) sm:text-4xl lg:text-5xl">
                  Tell us what&apos;s slowing your business down.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-(--cs-off-white)/65 sm:text-lg sm:leading-8">
                  Tell us about a repetitive process, workflow bottleneck, or
                  system that takes more manual effort than it should.
                  We&apos;ll explore where practical automation could save time,
                  improve consistency, and give your team better visibility and
                  control.
                </p>

                <div className="mt-8">
                  <a
                    href={consultationLink}
                    className="inline-flex w-full items-center justify-center rounded-full bg-(--cs-green) px-7 py-3.5 font-bold text-(--cs-navy) transition-all hover:-translate-y-0.5 hover:bg-(--cs-green-dark) hover:text-(--cs-off-white) sm:w-auto"
                  >
                    Book a Consultation
                  </a>
                </div>

                <div className="mt-7">
                  <a
                    href="mailto:pcarvajal@carvajalsolutions.com"
                    className="text-sm font-semibold text-(--cs-off-white)/75 transition-colors hover:text-(--cs-green) sm:text-base"
                  >
                    pcarvajal@carvajalsolutions.com
                  </a>
                </div>

                <p className="mt-4 max-w-xl text-sm leading-6 text-(--cs-off-white)/45">
                  No commitment required. Start with a conversation about your
                  current process and where automation may be useful.
                </p>
              </div>

              <div className="rounded-3xl border border-(--cs-off-white)/10 bg-(--cs-blue)/70 p-6 sm:p-8">
                <p className="text-sm font-bold text-(--cs-green)">
                  A GOOD FIRST CONVERSATION
                </p>

                <p className="mt-2 text-sm leading-6 text-(--cs-off-white)/55">
                  A few things we can discuss when you reach out.
                </p>

                <div className="mt-6 space-y-5">
                  {conversationQuestions.map((item, index) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--cs-green) text-xs font-black text-(--cs-navy)">
                        {index + 1}
                      </div>

                      <p className="pt-1 text-sm leading-6 text-(--cs-off-white)/75 sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-(--cs-off-white)/10 bg-(--cs-navy) text-(--cs-off-white)">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <BrandLogo />

              <p className="mt-5 max-w-md text-sm leading-7 text-(--cs-off-white)/60 sm:text-base">
                Lead follow-up and appointment automation designed to help
                businesses respond faster, follow up consistently, and move
                opportunities forward.
              </p>

              <p className="mt-5 text-sm font-medium text-(--cs-green)">
                Respond • Engage • Follow Up • Qualify • Schedule
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:justify-self-end">
              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-(--cs-green)">
                  EXPLORE
                </p>

                <div className="mt-4 flex flex-col gap-3 text-sm text-(--cs-off-white)/65">
                  <a
                    href="#services"
                    className="transition-colors hover:text-(--cs-off-white)"
                  >
                    Services
                  </a>

                  <a
                    href="#how-it-works"
                    className="transition-colors hover:text-(--cs-off-white)"
                  >
                    How It Works
                  </a>

                  <a
                    href="#industries"
                    className="transition-colors hover:text-(--cs-off-white)"
                  >
                    Industries
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-(--cs-green)">
                  DEMO
                </p>

                <div className="mt-4 flex flex-col gap-3 text-sm text-(--cs-off-white)/65">
                  <a
                    href="#demo"
                    className="transition-colors hover:text-(--cs-off-white)"
                  >
                    Try the Demo
                  </a>

                  <a
                    href="#top"
                    className="transition-colors hover:text-(--cs-off-white)"
                  >
                    Back to Top
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-(--cs-green)">
                  COMPANY
                </p>

                <div className="mt-4 flex flex-col gap-3 text-sm text-(--cs-off-white)/65">
                  <a
                    href="#about"
                    className="transition-colors hover:text-(--cs-off-white)"
                  >
                    Why Us
                  </a>

                  <a
                    href="#contact"
                    className="transition-colors hover:text-(--cs-off-white)"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-(--cs-off-white)/10 pt-6 text-xs text-(--cs-off-white)/40 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <p>© {currentYear} Carvajal Solutions. All rights reserved.</p>

            <p>Lead follow-up and appointment automation.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}