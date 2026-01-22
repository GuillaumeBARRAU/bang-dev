export default function TrustBadges() {
  const items = [
    { title: "Pédagogie & patience", desc: "Une approche simple, sans stress." },
    { title: "Méthode claire", desc: "Étapes visibles, zéro surprise." },
    { title: "Travail propre", desc: "Bonnes pratiques et organisation." },
    { title: "Suivi", desc: "Je reste disponible après la mise en place." },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Pourquoi me faire confiance ?
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl border p-5 bg-white">
              <div className="font-semibold">{it.title}</div>
              <p className="mt-2 text-sm text-neutral-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
