"use client";
import Image from "next/image";
import { Phone, MessageCircle, Mail, ShieldCheck, Clock, MapPin } from "lucide-react";

export default function Hero() {
  const PHONE = "+9779851150766";
  const WHATSAPP = "9779851150766";
  const EMAIL = "kbishnurishi@gmail.com";

  return (
    <section className="relative overflow-hidden">
      {/* Subtle layered background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(14,165,233,0.12),transparent_60%)]" />
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
        <h1 className="display text-5xl md:text-6xl leading-tight font-extrabold">
  Advocate Bishnu Rishi Koirala
</h1>
          <p className="mt-2 text-base md:text-lg text-slate-600">
            Lawyer at <span className="font-semibold">Mahabai Kanooni Sewa Kendra</span>
          </p>
          <p className="text-slate-600">Anamnagar, Kathmandu</p>

          <p className="mt-6 text-lg md:text-xl font-medium text-slate-800">
            Trusted, practical legal counsel
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 text-white font-semibold shadow hover:bg-sky-700 hover:scale-105 transition-transform duration-300"
            >
              <Phone size={18} /> Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white font-semibold shadow hover:shadow-md hover:scale-105 transition-transform duration-300"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white font-semibold shadow hover:shadow-md hover:scale-105 transition-transform duration-300"
            >
              <Mail size={18} /> Email
            </a>
          </div>

          {/* Quick facts */}
          <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white">
              <ShieldCheck size={16} /> License: 7289
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white">
              <Clock size={16} /> Mon–Fri, 9:00–18:00
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white">
              <MapPin size={16} /> Anamnagar, Kathmandu
            </span>
          </div>
        </div>

        {/* Right – Framed portrait */}
        <div className="relative">
          <div className="group relative rounded-3xl p-[2px] bg-gradient-to-b from-sky-200 to-transparent">
            <div className="rounded-[22px] border border-slate-200 bg-white/80 p-2 shadow-xl transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl">
              <Image
                src="/portrait.jpg"
                alt="Advocate Bishnu Rishi Koirala portrait"
                width={800}
                height={1000}
                priority
                className="rounded-2xl object-cover aspect-[4/5] shadow-lg border border-slate-200 transition-transform duration-300 group-hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
