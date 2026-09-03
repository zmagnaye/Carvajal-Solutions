"use client";

import { FormEvent, useState } from "react";

type DemoForm = {
  name: string;
  businessType: string;
  service: string;
  need: string;
  preferredTime: string;
};

const emptyForm: DemoForm = {
  name: "",
  businessType: "",
  service: "",
  need: "",
  preferredTime: "",
};

const sampleForm: DemoForm = {
  name: "Sarah Johnson",
  businessType: "Home Services",
  service: "Service consultation",
  need: "I would like to understand my options and get help sometime this week.",
  preferredTime: "Thursday afternoon",
};

export default function LeadDemo() {
  const [form, setForm] = useState<DemoForm>(emptyForm);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function updateField(field: keyof DemoForm, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setCopied(false);
  }

  function generateMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const firstName = form.name.trim().split(" ")[0] || "there";

    const service = form.service.trim()
      ? ` about ${form.service.trim()}`
      : "";

    const need = form.need.trim()
      ? ` Based on what you shared — ${form.need.trim()} — we'd be happy to help you take the next step.`
      : " We'd be happy to learn more about what you need and point you in the right direction.";

    const timing = form.preferredTime.trim()
      ? ` You mentioned ${form.preferredTime.trim()} as a preferred time, so we can use that as a starting point for scheduling.`
      : " We can also help find a convenient time if you'd like to schedule a conversation.";

    const generatedMessage = `Hi ${firstName},

Thanks for reaching out${service}.${need}${timing}

Would you like to continue here or schedule a quick conversation?`;

    setMessage(generatedMessage);
    setCopied(false);
  }

  function loadSample() {
    setForm(sampleForm);
    setMessage("");
    setCopied(false);
  }

  async function copyMessage() {
    if (!message) return;

    await navigator.clipboard.writeText(message);
    setCopied(true);
  }

  return (
    <section
      id="demo"
      className="scroll-mt-10 bg-(--cs-off-white) text-(--cs-navy)"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-(--cs-green-dark) sm:text-sm sm:tracking-[0.18em]">
            INTERACTIVE DEMO
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            See how a lead could be followed up with automatically.
          </h2>

          <p className="mt-6 text-base leading-7 text-(--cs-blue)/75 sm:text-lg sm:leading-8">
            Enter a few example lead details and Carvajal Solutions will
            demonstrate the type of personalized response an automated workflow
            could prepare.
          </p>

          <p className="mt-3 text-sm text-(--cs-blue)/55">
            Demo only — no email or text message will actually be sent.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-3xl border border-(--cs-navy)/10 bg-white shadow-xl sm:mt-16 lg:grid-cols-2 lg:rounded-[2rem]">
          {/* FORM */}
          <div className="p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-(--cs-green-dark)">
                  NEW LEAD
                </p>

                <h3 className="mt-1 text-2xl font-bold">Lead information</h3>
              </div>

              <button
                type="button"
                onClick={loadSample}
                className="w-full rounded-full border border-(--cs-navy)/15 px-4 py-2 text-sm font-bold transition-colors hover:border-(--cs-green) hover:bg-(--cs-off-white) sm:w-auto"
              >
                Use sample
              </button>
            </div>

            <form onSubmit={generateMessage} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="lead-name"
                  className="mb-2 block text-sm font-bold"
                >
                  Name
                </label>

                <input
                  id="lead-name"
                  type="text"
                  value={form.name}
                  onChange={(event) =>
                    updateField("name", event.target.value)
                  }
                  placeholder="Sarah Johnson"
                  required
                  className="w-full rounded-2xl border border-(--cs-navy)/15 bg-(--cs-off-white)/50 px-4 py-3.5 outline-none transition-colors placeholder:text-(--cs-blue)/40 focus:border-(--cs-green)"
                />
              </div>

              <div>
                <label
                  htmlFor="business-type"
                  className="mb-2 block text-sm font-bold"
                >
                  Business Type
                </label>

                <select
                  id="business-type"
                  value={form.businessType}
                  onChange={(event) =>
                    updateField("businessType", event.target.value)
                  }
                  required
                  className="w-full rounded-2xl border border-(--cs-navy)/15 bg-(--cs-off-white)/50 px-4 py-3.5 outline-none transition-colors focus:border-(--cs-green)"
                >
                  <option value="">Select a business type</option>
                  <option value="Home Services">Home Services</option>
                  <option value="Professional Services">
                    Professional Services
                  </option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Health & Wellness">
                    Health & Wellness
                  </option>
                  <option value="Automotive">Automotive</option>
                  <option value="Legal">Legal</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-bold"
                >
                  Service or Product
                </label>

                <input
                  id="service"
                  type="text"
                  value={form.service}
                  onChange={(event) =>
                    updateField("service", event.target.value)
                  }
                  placeholder="Consultation, estimate, service..."
                  required
                  className="w-full rounded-2xl border border-(--cs-navy)/15 bg-(--cs-off-white)/50 px-4 py-3.5 outline-none transition-colors placeholder:text-(--cs-blue)/40 focus:border-(--cs-green)"
                />
              </div>

              <div>
                <label
                  htmlFor="customer-need"
                  className="mb-2 block text-sm font-bold"
                >
                  Customer Need
                </label>

                <textarea
                  id="customer-need"
                  value={form.need}
                  onChange={(event) =>
                    updateField("need", event.target.value)
                  }
                  placeholder="What is the customer looking for?"
                  required
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-(--cs-navy)/15 bg-(--cs-off-white)/50 px-4 py-3.5 outline-none transition-colors placeholder:text-(--cs-blue)/40 focus:border-(--cs-green)"
                />
              </div>

              <div>
                <label
                  htmlFor="preferred-time"
                  className="mb-2 block text-sm font-bold"
                >
                  Preferred Time
                  <span className="ml-2 font-normal text-(--cs-blue)/50">
                    Optional
                  </span>
                </label>

                <input
                  id="preferred-time"
                  type="text"
                  value={form.preferredTime}
                  onChange={(event) =>
                    updateField("preferredTime", event.target.value)
                  }
                  placeholder="Thursday afternoon"
                  className="w-full rounded-2xl border border-(--cs-navy)/15 bg-(--cs-off-white)/50 px-4 py-3.5 outline-none transition-colors placeholder:text-(--cs-blue)/40 focus:border-(--cs-green)"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-(--cs-green) px-6 py-4 font-bold text-(--cs-navy) transition-all hover:-translate-y-0.5 hover:bg-(--cs-green-dark) hover:text-(--cs-off-white)"
              >
                Generate Follow-Up
              </button>
            </form>
          </div>

          {/* GENERATED MESSAGE */}
          <div className="bg-(--cs-navy) p-5 text-(--cs-off-white) sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 border-b border-(--cs-off-white)/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-(--cs-green)" />

                  <p className="text-sm font-bold text-(--cs-green)">
                    DEMO MODE
                  </p>
                </div>

                <h3 className="mt-2 text-2xl font-bold">
                  Suggested follow-up
                </h3>
              </div>

              <span className="w-fit rounded-full bg-(--cs-blue) px-3 py-1.5 text-xs font-bold">
                NOT SENT
              </span>
            </div>

            {message ? (
              <div className="mt-8">
                <div className="rounded-3xl bg-(--cs-blue) p-5 sm:p-6">
                  <p className="whitespace-pre-line text-sm leading-7 text-(--cs-off-white)/85 sm:text-base sm:leading-8">
                    {message}
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-(--cs-off-white)/10 p-4">
                    <p className="text-xs font-bold tracking-[0.12em] text-(--cs-green)">
                      LEAD STATUS
                    </p>

                    <p className="mt-2 font-bold">Engaged</p>
                  </div>

                  <div className="rounded-2xl border border-(--cs-off-white)/10 p-4">
                    <p className="text-xs font-bold tracking-[0.12em] text-(--cs-green)">
                      NEXT ACTION
                    </p>

                    <p className="mt-2 font-bold">Continue qualification</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyMessage}
                  className="mt-6 w-full rounded-full border border-(--cs-off-white)/20 px-6 py-3.5 font-bold transition-colors hover:border-(--cs-green) hover:bg-(--cs-blue)"
                >
                  {copied ? "Copied!" : "Copy Message"}
                </button>
              </div>
            ) : (
              <div className="flex min-h-[300px] items-center justify-center sm:min-h-[400px] lg:min-h-[500px]">
                <div className="max-w-sm text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-(--cs-green) text-xl font-black text-(--cs-navy)">
                    AI
                  </div>

                  <h4 className="mt-6 text-xl font-bold">
                    Your demo response will appear here.
                  </h4>

                  <p className="mt-3 leading-7 text-(--cs-off-white)/55">
                    Fill in the lead information or load the sample data, then
                    generate a follow-up message.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* DEMO TRUST ROW */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-(--cs-navy)/10 pt-6 text-center text-xs text-(--cs-blue)/60 sm:text-sm">
          {[
            "Demo mode",
            "Nothing is sent",
            "No data is stored",
            "Try it safely",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-(--cs-green)" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}