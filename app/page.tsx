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

export default function Home() {
  return (
    <main className="min-h-screen bg-(--cs-navy) text-(--cs-off-white)">
      <header className="border-b border-(--cs-off-white)/10 bg-(--cs-navy)">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Carvajal Solutions home"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--cs-green) font-bold text-(--cs-navy)">
              CS
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.14em] text-(--cs-off-white)">
                CARVAJAL
              </p>

              <p className="text-xs font-medium tracking-[0.22em] text-(--cs-off-white)/60">
                SOLUTIONS
              </p>
            </div>
          </a>

          <nav
            className="hidden items-center gap-8 text-sm font-medium text-(--cs-off-white)/70 md:flex"
            aria-label="Main navigation"
          >
            <a
              href="#workflow"
              className="transition-colors hover:text-(--cs-green)"
            >
              How It Works
            </a>

            <a
              href="#industries"
              className="transition-colors hover:text-(--cs-green)"
            >
              Industries
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-(--cs-green)"
            >
              Why Carvajal
            </a>
          </nav>

          <a
            href="#workflow"
            className="rounded-full bg-(--cs-green) px-5 py-2.5 text-sm font-bold text-(--cs-navy) transition-all hover:-translate-y-0.5 hover:bg-(--cs-green-dark) hover:text-(--cs-off-white)"
          >
            See the Demo
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(114,176,29,0.18),transparent_34%)]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-(--cs-blue)/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-(--cs-green)/40 bg-(--cs-green)/10 px-4 py-2 text-sm font-semibold text-(--cs-green)">
              <span className="h-2 w-2 rounded-full bg-(--cs-green)" />
              AI Lead Follow-Up & Appointment Automation
            </div>

            <h1 className="max-w-4xl text-5xl leading-[1.02] font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Turn More Leads Into{" "}
              <span className="text-(--cs-green)">
                Conversations & Appointments
              </span>{" "}
              — Automatically.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-(--cs-off-white)/70 sm:text-xl">
              Carvajal Solutions helps businesses respond to new inquiries,
              engage prospects, follow up consistently, qualify opportunities,
              and move customers toward the next step.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#workflow"
                className="inline-flex items-center justify-center rounded-full bg-(--cs-green) px-7 py-3.5 font-bold text-(--cs-navy) transition-all hover:-translate-y-0.5 hover:bg-(--cs-green-dark) hover:text-(--cs-off-white)"
              >
                See How It Works
              </a>

              <a
                href="#workflow"
                className="inline-flex items-center justify-center rounded-full border border-(--cs-off-white)/20 px-7 py-3.5 font-semibold text-(--cs-off-white) transition-colors hover:border-(--cs-green) hover:bg-(--cs-blue)"
              >
                Explore the Workflow
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-(--cs-off-white)/50">
              <span>Fast response</span>
              <span>Consistent follow-up</span>
              <span>Lead qualification</span>
              <span>Appointment-ready</span>
            </div>
          </div>

          <div id="workflow" className="relative">
            <div className="absolute -inset-8 rounded-full bg-(--cs-green)/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-(--cs-off-white)/10 bg-(--cs-blue)/70 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
              <div className="mb-6 flex items-center justify-between border-b border-(--cs-off-white)/10 pb-5">
                <div>
                  <p className="text-sm font-semibold text-(--cs-green)">
                    LIVE WORKFLOW
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-(--cs-off-white)">
                    New lead received
                  </h2>
                </div>

                <div className="rounded-full bg-(--cs-green-dark) px-3 py-1.5 text-xs font-bold text-(--cs-off-white)">
                  ACTIVE
                </div>
              </div>

              <div className="space-y-3">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="group flex gap-4 rounded-2xl border border-(--cs-off-white)/[0.08] bg-(--cs-navy)/25 p-4 transition-colors hover:bg-(--cs-navy)/40"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--cs-green) text-xs font-black text-(--cs-navy)">
                        {step.number}
                      </div>

                      {index !== workflowSteps.length - 1 && (
                        <div className="mt-2 h-full min-h-4 w-px bg-(--cs-off-white)/10" />
                      )}
                    </div>

                    <div className="pb-1">
                      <h3 className="font-bold text-(--cs-off-white)">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-(--cs-off-white)/55">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-(--cs-green) p-5 text-(--cs-navy)">
                <p className="text-xs font-black tracking-[0.15em]">
                  OUTCOME
                </p>

                <p className="mt-2 font-bold">
                  Qualified lead → Appointment or human handoff
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            <section className="bg-(--cs-off-white) text-(--cs-navy)">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.18em] text-(--cs-green-dark)">
              THE PROBLEM
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              Leads are valuable.
              <br />
              Slow follow-up is expensive.
            </h2>

            <p className="mt-6 text-lg leading-8 text-(--cs-blue)/75">
              Businesses work hard to generate new inquiries, but opportunities
              are often lost when responses are slow, follow-up is inconsistent,
              or busy teams simply do not have time to keep every conversation
              moving.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-(--cs-navy)/10 bg-white p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--cs-navy) text-sm font-black text-(--cs-off-white)">
                01
              </div>

              <h3 className="mt-6 text-xl font-bold">
                A new lead arrives
              </h3>

              <p className="mt-3 leading-7 text-(--cs-blue)/70">
                Someone submits a form, sends an inquiry, or asks for more
                information.
              </p>
            </div>

            <div className="rounded-3xl border border-(--cs-navy)/10 bg-white p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--cs-navy) text-sm font-black text-(--cs-off-white)">
                02
              </div>

              <h3 className="mt-6 text-xl font-bold">
                The team is busy
              </h3>

              <p className="mt-3 leading-7 text-(--cs-blue)/70">
                Employees are working, helping customers, or handling other
                priorities.
              </p>
            </div>

            <div className="rounded-3xl border border-(--cs-navy)/10 bg-white p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--cs-navy) text-sm font-black text-(--cs-off-white)">
                03
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Follow-up gets delayed
              </h3>

              <p className="mt-3 leading-7 text-(--cs-blue)/70">
                Hours pass, messages are forgotten, and prospects begin looking
                elsewhere.
              </p>
            </div>

            <div className="rounded-3xl border border-(--cs-green)/30 bg-(--cs-green) p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--cs-navy) text-sm font-black text-(--cs-off-white)">
                04
              </div>

              <h3 className="mt-6 text-xl font-bold text-(--cs-navy)">
                Opportunity lost
              </h3>

              <p className="mt-3 leading-7 text-(--cs-navy)/75">
                A promising lead can disappear simply because another business
                responded first.
              </p>
            </div>
          </div>

          <div className="my-20 flex items-center gap-4">
            <div className="h-px flex-1 bg-(--cs-navy)/10" />

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--cs-navy) text-xl text-(--cs-green)">
              ↓
            </div>

            <div className="h-px flex-1 bg-(--cs-navy)/10" />
          </div>

          <div className="grid items-center gap-12 rounded-[2rem] bg-(--cs-navy) p-8 text-(--cs-off-white) lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div>
              <p className="text-sm font-bold tracking-[0.18em] text-(--cs-green)">
                THE SOLUTION
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
                Keep every lead moving forward.
              </h2>

              <p className="mt-6 text-lg leading-8 text-(--cs-off-white)/70">
                Carvajal Solutions gives businesses a consistent system for
                responding, engaging, following up, qualifying, and moving
                prospects toward the appropriate next step.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-5">
              {[
                "Respond",
                "Engage",
                "Follow Up",
                "Qualify",
                "Schedule",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-(--cs-off-white)/10 bg-(--cs-blue)/60 p-5 text-center"
                >
                  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-(--cs-green) text-xs font-black text-(--cs-navy)">
                    {index + 1}
                  </div>

                  <p className="mt-4 text-sm font-bold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}