// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import PracticeGrid from "@/components/PracticeGrid";
import ContactCard from "@/components/ContactCard";

// Valid section ids that can be shown individually
const VALID_SECTIONS = ["about", "areas", "faqs", "contact"] as const;
type SectionId = (typeof VALID_SECTIONS)[number] | null;

// Type guard: tells TS/ESLint that a string is a valid section id
function isSectionId(s: string): s is (typeof VALID_SECTIONS)[number] {
  return (VALID_SECTIONS as readonly string[]).includes(s);
}

export default function Home() {
  const [active, setActive] = useState<SectionId>(null);

  // Sync UI with location hash (e.g., #about, #areas...)
  useEffect(() => {
    const applyFromHash = () => {
      const raw = (window.location.hash || "").replace("#", "");
      setActive(isSectionId(raw) ? raw : null);
    };
    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  // Render section if on full page (no hash) or if its id matches the active hash
  const show = (id: SectionId) => active === null || active === id;

  return (
    <div>
      {/* Only show hero on full page view */}
      {active === null && <Hero />}

      {/* -------------------- About -------------------- */}
      {show("about") && (
        <section id="about" className="scroll-mt-28 md:scroll-mt-32">
          <Container>
            <h2 className="display text-2xl font-extrabold tracking-tight">About</h2>
            <p className="mt-4 text-slate-700">
              Advocate Bishnu Rishi Koirala is a senior lawyer at
              <span className="font-semibold"> Mahabai Kanooni Sewa Kendra</span>,
              located in Anamnagar, Kathmandu. With over 27 years of legal practice,
              he has built a strong reputation for delivering practical and trusted
              legal counsel. He is a licensed advocate (Bar License No. 7289), a
              member of the Nepal Bar Council, and the recent Vice President of
              the High Court Bar Association, Patan.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs uppercase tracking-wider text-slate-500">Years in practice</div>
                <div className="mt-1 text-2xl font-bold">27+</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs uppercase tracking-wider text-slate-500">License</div>
                <div className="mt-1 text-2xl font-bold">7289</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs uppercase tracking-wider text-slate-500">Languages</div>
                <div className="mt-1 text-2xl font-bold">English, Nepali, Hindi</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs uppercase tracking-wider text-slate-500">Bar Associations</div>
                <div className="mt-1 text-base font-semibold">
                  Nepal Bar Council; High Court Bar Association (Patan)
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {active === null && (
        <hr className="mx-auto my-12 h-px w-11/12 max-w-7xl border-0 bg-slate-200/70" />
      )}

      {/* -------------------- Practice Areas -------------------- */}
      {show("areas") && (
        <section id="areas" className="scroll-mt-28 md:scroll-mt-32">
          <Container>
            <h2 className="display text-2xl font-extrabold tracking-tight">Practice Areas</h2>
            <PracticeGrid />
            <p className="mt-4 text-sm text-slate-500">General information only; not legal advice.</p>
          </Container>
        </section>
      )}

      {active === null && (
        <hr className="mx-auto my-12 h-px w-11/12 max-w-7xl border-0 bg-slate-200/70" />
      )}

      {/* -------------------- FAQs -------------------- */}
      {show("faqs") && (
        <section id="faqs" className="scroll-mt-28 md:scroll-mt-32">
          <Container>
            <h2 className="display text-2xl font-extrabold tracking-tight">FAQs</h2>
            <div className="mt-8 grid gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="font-semibold">What should I bring to the first meeting?</div>
                <p className="mt-2 text-slate-700">
                  Any IDs, relevant agreements, notices, and a brief timeline.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="font-semibold">Do you offer phone consultations?</div>
                <p className="mt-2 text-slate-700">Yes, scheduled by appointment.</p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {active === null && (
        <hr className="mx-auto my-12 h-px w-11/12 max-w-7xl border-0 bg-slate-200/70" />
      )}

      {/* -------------------- Contact -------------------- */}
      {show("contact") && (
        <section id="contact" className="scroll-mt-28 md:scroll-mt-32">
          <Container>
            <ContactCard />
          </Container>
        </section>
      )}

      {/* When filtered to a single section, show a way back */}
      {active !== null && (
        <div className="mx-auto max-w-7xl px-6 py-10">
          <a
            href="#top"
            className="inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            ← Back to full page
          </a>
        </div>
      )}
    </div>
  );
}
