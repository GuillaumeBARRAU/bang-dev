import Link from "next/link";
import { Button } from "@/components/ui/button";
import RecallDialog from "@/components/shared/RecallDialog";

const offers = [
  {
    title: "Site vitrine",
    desc: "Pour présenter ton activité clairement, inspirer confiance et être contacté facilement.",
    bullets: ["Design moderne", "Responsive mobile", "SEO de base", "Formulaire de contact"],
  },
  {
    title: "Refonte",
    desc: "Pour moderniser un site existant, clarifier les messages et améliorer la performance.",
    bullets: ["Structure + UX", "Amélioration vitesse", "Nettoyage contenu", "Mise à jour visuelle"],
  },
  {
    title: "Landing page",
    desc: "Une page unique orientée conversion : prise de rendez-vous, demande de devis, inscription…",
    bullets: ["CTA optimisés", "Message clair", "Sections courtes", "Mesure/analytics (option)"],
  },
];

const includes = [
  {
    title: "Performance",
    desc: "Un site rapide, agréable à consulter, optimisé pour de bons Core Web Vitals.",
  },
  {
    title: "SEO de base",
    desc: "Titres, métadonnées, structure, accessibilité : les fondamentaux pour être trouvable.",
  },
  {
    title: "Responsive",
    desc: "Ton site s’adapte parfaitement à mobile, tablette et ordinateur.",
  },
  {
    title: "Sécurité & fiabilité",
    desc: "Bonnes pratiques, contenu propre, et base saine pour évoluer.",
  },
];

const steps = [
  {
    n: "01",
    title: "Échange & besoin",
    desc: "On clarifie ton activité, ton objectif (contacts, appels, devis) et ton contenu.",
  },
  {
    n: "02",
    title: "Proposition sur devis",
    desc: "Je t’envoie une proposition claire : périmètre, livrables, délais et options.",
  },
  {
    n: "03",
    title: "Maquette",
    desc: "Je construis une maquette (structure + style) pour valider la direction avant le dev.",
  },
  {
    n: "04",
    title: "Développement",
    desc: "Intégration propre, composants, pages, optimisation performance.",
  },
  {
    n: "05",
    title: "Validation & mise en ligne",
    desc: "On vérifie ensemble, puis je mets en ligne et je t’explique la prise en main.",
  },
  {
    n: "06",
    title: "Suivi",
    desc: "Je reste disponible pour ajustements et évolutions.",
  },
];

const faqs = [
  {
    q: "Pourquoi “sur devis” ?",
    a: "Chaque activité est différente : nombre de pages, contenu, fonctionnalités, niveau de design… Le devis permet de proposer une solution adaptée, sans surprise.",
  },
  {
    q: "Combien de temps pour faire un site ?",
    a: "Ça dépend surtout de la réactivité sur le contenu (textes, photos, infos). Un site vitrine simple peut aller vite, une refonte ou un projet plus complet demande plus d’échanges.",
  },
  {
    q: "Est-ce que je pourrai modifier mon site ?",
    a: "Oui. Selon la solution, je peux te proposer une prise en main simple ou une mise à jour que je réalise pour toi (maintenance).",
  },
  {
    q: "Tu peux t’occuper de la mise en ligne ?",
    a: "Oui. Je peux gérer la mise en ligne et te conseiller sur hébergement / domaine si besoin.",
  },
  {
    q: "Je n’ai pas de contenu (textes / images), comment on fait ?",
    a: "On peut partir d’une structure simple, et je t’aide à organiser les informations. Tu peux aussi fournir progressivement, l’essentiel est d’avoir une base claire.",
  },
];

export default function SitesInternetPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-neutral-700 shadow-sm">
                <span className="inline-block size-2 rounded-full bg-blue-600" />
                Sites internet pour indépendants & TPE
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
                Un site moderne, clair et efficace — sur devis
              </h1>

              <p className="mt-4 text-lg text-neutral-600">
                Je conçois des sites vitrine et landing pages qui inspirent confiance, expliquent clairement
                ton offre, et facilitent la prise de contact.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <RecallDialog trigger={<Button className="bg-blue-600 hover:bg-blue-700">Être rappelé</Button>} />
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto border-neutral-300 hover:bg-neutral-50">
                    Demander un devis
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-sm text-neutral-500">
                Devis clair • Délais annoncés • Suivi après mise en ligne
              </p>
            </div>

            <div className="rounded-3xl border bg-neutral-50 p-8">
              <div className="text-sm text-neutral-600">Ce que tu obtiens</div>
              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border bg-white p-4">
                  <div className="font-medium">Design & structure</div>
                  <p className="text-sm text-neutral-600 mt-1">
                    Message clair, sections bien organisées, look moderne.
                  </p>
                </div>
                <div className="rounded-2xl border bg-white p-4">
                  <div className="font-medium">Performance</div>
                  <p className="text-sm text-neutral-600 mt-1">
                    Optimisation des images et des pages pour un site rapide.
                  </p>
                </div>
                <div className="rounded-2xl border bg-white p-4">
                  <div className="font-medium">Conversion</div>
                  <p className="text-sm text-neutral-600 mt-1">
                    CTA visibles, contact simplifié, navigation efficace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Ce que je réalise</h2>
          <p className="mt-2 text-neutral-600">
            Une base solide, claire, et adaptée à ton activité.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {offers.map((o) => (
              <div
                key={o.title}
                className="rounded-3xl border bg-neutral-50 p-6 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{o.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {o.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/realisations">
              <Button variant="outline" className="border-neutral-300 hover:bg-neutral-50">
                Voir des exemples
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Demander un devis</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* INCLUS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-14">
          <h2 className="text-2xl font-semibold tracking-tight">Ce qui est inclus</h2>
          <p className="mt-2 text-neutral-600">
            Les fondamentaux d’un site professionnel : propre, lisible, rapide.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {includes.map((it) => (
              <div key={it.title} className="rounded-3xl border bg-white p-6">
                <div className="font-semibold">{it.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-14">
          <h2 className="text-2xl font-semibold tracking-tight">Méthode de travail</h2>
          <p className="mt-2 text-neutral-600">
            Une approche simple, structurée, sans surprise.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-3xl border bg-neutral-50 p-6">
                <div className="text-sm text-neutral-500">{s.n}</div>
                <div className="mt-2 font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-14">
          <h2 className="text-2xl font-semibold tracking-tight">Questions fréquentes</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border bg-white p-6">
                <div className="font-semibold">{f.q}</div>
                <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="rounded-3xl border bg-neutral-50 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                On prépare ton devis ?
              </h2>
              <p className="mt-2 text-neutral-600">
                Dis-moi ce que tu veux (pages, objectifs, contenu) et je te propose une solution claire.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <RecallDialog
                trigger={<Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">Être rappelé</Button>}
              />
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-neutral-300 hover:bg-neutral-50">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
