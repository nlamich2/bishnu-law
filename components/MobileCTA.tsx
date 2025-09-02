"use client";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileCTA() {
  const PHONE = "+9779851150766";
  const WHATSAPP = "9779851150766";
  return (
    <div className="fixed inset-x-0 bottom-3 z-40 mx-auto flex max-w-md items-center justify-center gap-3 px-4 md:hidden">
      <a
        href={`tel:${PHONE}`}
        className="flex-1 rounded-xl bg-sky-600 px-4 py-3 text-center font-semibold text-white shadow hover:bg-sky-700"
      >
        <span className="inline-flex items-center gap-2 justify-center w-full">
          <Phone size={18}/> Call
        </span>
      </a>
      <a
        href={`https://wa.me/${WHATSAPP}`}
        className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-center font-semibold shadow hover:bg-slate-50"
      >
        <span className="inline-flex items-center gap-2 justify-center w-full">
          <MessageCircle size={18}/> WhatsApp
        </span>
      </a>
    </div>
  );
}
