"use client";

import Link from "next/link";
import { Info, Briefcase, HelpCircle, PhoneCall } from "lucide-react";

const NAV = [
  { id: "about", label: "About", icon: Info },
  { id: "areas", label: "Practice Areas", icon: Briefcase },
  { id: "faqs", label: "FAQs", icon: HelpCircle },
  { id: "contact", label: "Contact", icon: PhoneCall },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center gap-6">
        <Link
          href="#top"
          className="font-extrabold tracking-tight text-slate-900 hover:text-sky-700 transition-colors"
        >
          Advocate Bishnu Rishi Koirala
        </Link>

        <nav className="ml-auto flex gap-5 text-sm font-semibold">
          {NAV.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-1.5 hover:text-sky-700 transition-colors"
            >
              <Icon size={16} className="text-slate-500" />
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
