import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export default function ContactCard() {
  const PHONE = "+9779851150766";
  const WHATSAPP = "9779851150766";
  const EMAIL = "kbishnurishi@gmail.com";
  const ADDRESS = "Anamnagar, Kathmandu";
  const MAP_QUERY = encodeURIComponent("Anamnagar, Kathmandu");

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold flex items-center gap-2"><MapPin/> Location</h3>
        <p className="mt-2 text-slate-700">{ADDRESS}</p>
        <div className="mt-4 overflow-hidden rounded-2xl border">
          <iframe
            title="Office location"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            className="w-full h-[320px]"
            loading="lazy"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold flex items-center gap-2">Contact</h3>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <a href={`tel:${PHONE}`} className="rounded-2xl border border-slate-200 p-4 hover:bg-slate-50 flex items-center gap-3 font-semibold"><Phone/> {PHONE}</a>
          <a href={`https://wa.me/${WHATSAPP}`} className="rounded-2xl border border-slate-200 p-4 hover:bg-slate-50 flex items-center gap-3 font-semibold"><MessageCircle/> WhatsApp</a>
          <a href={`mailto:${EMAIL}`} className="rounded-2xl border border-slate-200 p-4 hover:bg-slate-50 flex items-center gap-3 font-semibold"><Mail/> {EMAIL}</a>
          <div className="rounded-2xl border border-slate-200 p-4 flex items-center gap-3"><Clock/> Mon–Fri, 9:00–18:00</div>
        </div>
        <p className="mt-4 text-sm text-slate-500">We respect your privacy. Please avoid sharing confidential details over forms or messaging.</p>
      </div>
    </div>
  );
}
