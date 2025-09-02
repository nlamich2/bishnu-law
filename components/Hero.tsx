"use client";

import Image from "next/image";
import { Phone, MessageCircle, Mail, ShieldCheck, Clock, MapPin } from "lucide-react";

const PHONE = "+9779851150766";
const WHATSAPP = "9779851150766";
const EMAIL = "kbishnurishi@gmail.com";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft bg glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        {/* Left copy */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Advocate Bishnu Rishi Koirala
          </h1>

          <p className="mt-2 flex items-center gap-2 text-lg text-slate-600">
            <span className="inline-flex items-center gap-1">
              <MapPin size={18} className="text-slate-500" />
              Mahabai Kanooni Sewa Kendra • Anamnagar, Kathmandu
            </span>
          </p>

          <p className="mt-6 text-xl font-medium text-slate-800">
            Trusted, practical legal counsel
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white shadow hover:bg-sky-700"
            >
              <Phone size={18} /> Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold hover:bg-slate-50"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold hover:bg-slate-50"
            >
              <Mail size={18} /> Email
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
              <ShieldCheck size={16} /> License: 7289
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
              <Clock size={16} /> Mon–Fri, 9:00–18:00
            </span>
          </div>
        </div>

        {/* Right image card */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-2 shadow-xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
            <Image
              src="/portrait.jpg"            // replace the file in /public with your new one
              alt="Advocate Bishnu Rishi Koirala portrait"
              width={800}
              height={1000}
              priority
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
