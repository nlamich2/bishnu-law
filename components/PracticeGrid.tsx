const AREAS = [
  { slug: "family-law",        title: "Family Law",        snippet: "Divorce, child custody, adoption, prenuptial agreements." },
  { slug: "criminal-defense",  title: "Criminal Defense",  snippet: "DUI, misdemeanors, felonies, appeals." },
  { slug: "immigration-law",   title: "Immigration Law",   snippet: "Visas, green cards, citizenship, deportation defense." },
  { slug: "business-law",      title: "Business Law",      snippet: "Contracts, startups, intellectual property, litigation." },
  { slug: "personal-injury",   title: "Personal Injury",   snippet: "Car accidents, workplace injuries, wrongful death." },
];

export default function PracticeGrid() {
  return (
    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {AREAS.map((a) => (
        <div
          key={a.slug}
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="h-1 w-10 rounded-full bg-sky-200/60 group-hover:bg-sky-300/70 transition-colors" />
          <div className="mt-3 font-semibold">{a.title}</div>
          <p className="mt-2 text-sm text-slate-600">{a.snippet}</p>
        </div>
      ))}
    </div>
  );
}
