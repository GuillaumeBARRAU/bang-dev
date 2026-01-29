import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServiceCards() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Choisis ton besoin
        </h2>
        <p className="mt-2 text-neutral-600">
          Deux services clairs, une approche simple et rassurante.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border p-6 bg-neutral-50">
            <h3 className="text-lg font-semibold">Création de sites internet</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• Design moderne et clair</li>
              <li>• Responsive (mobile / tablette)</li>
              <li>• Mise en ligne + SEO de base</li>
              <li>• Sur devis, selon ton besoin</li>
            </ul>
            <div className="mt-6">
              <Link href="/sites-internet">
                <Button>Découvrir le service</Button>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border p-6 bg-neutral-50">
            <h3 className="text-lg font-semibold">Assistance informatique</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• PC/Mac, imprimantes, Internet, Wi-Fi</li>
              <li>• Smartphone / tablette (photos, applis, messages)</li>
              <li>• Explications simples, à votre rythme</li>
              <li>• À domicile ou à distance</li>
            </ul>
            <div className="mt-6">
              <Link href="/aide-seniors">
                <Button variant="outline">Voir les prestations</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
