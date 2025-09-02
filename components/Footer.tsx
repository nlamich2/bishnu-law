import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const PHONE = "+9779851150766";
  const WHATSAPP = "9779851150766";
  const EMAIL = "kbishnurishi@gmail.com";

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">
        {/* Top Row: Firm Info + Contact Links */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/* Firm Info */}
          <div className="space-y-2">
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4 text-center md:text-left">
              <span className="font-semibold">Mahabai Kanooni Sewa Kendra</span>
              <span className="hidden md:inline">•</span>
              <span>Anamnagar, Kathmandu</span>
              <span className="hidden md:inline">•</span>
              <span>Bar License: 7289</span>
            </div>
            <p className="text-xs text-slate-500 text-center md:text-left">
              General information only and not legal advice. Contact us to discuss your specific situation.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-slate-700 font-medium">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50"
            >
              <Phone size={16} /> Call
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="https://www.google.com/maps/place/Anamnagar,+Kathmandu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50"
            >
              <MapPin size={16} /> Map
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Mahabai Kanooni Sewa Kendra · All rights reserved.
        </div>
      </div>
    </footer>
  );
}
