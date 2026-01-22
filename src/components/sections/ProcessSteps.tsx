export default function ProcessSteps() {
  const steps = [
    { n: "01", title: "Premier contact", desc: "Tu m’expliques ton besoin en quelques lignes." },
    { n: "02", title: "Proposition claire", desc: "Je te propose une solution simple et adaptée." },
    { n: "03", title: "Création / intervention", desc: "Je mets en place, je configure, je construis." },
    { n: "04", title: "Suivi", desc: "Je vérifie et je t’accompagne après." },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Comment ça se passe
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl border p-5 bg-neutral-50">
              <div className="text-sm text-neutral-500">{s.n}</div>
              <div className="mt-2 font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
