"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import RecallDialog from "@/components/shared/RecallDialog";

export default function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm text-neutral-600">
              Aidez-moi • Assistance informatique • Sites internet • À domicile & à distance
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
              Besoin d&apos;aide avec l&apos;informatique ou Internet&nbsp;?
            </h1>

            <p className="mt-4 text-lg text-neutral-600">
              Explications simples, sans jargon. J’accompagne les particuliers (dont les seniors)
              pour mieux utiliser PC/Mac/smartphone, et j’aide les indépendants à avoir un site clair,
              rapide et efficace.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <RecallDialog trigger={<Button>Être rappelé gratuitement</Button>} />

              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={scrollToServices}
              >
                Découvrir les services
              </Button>

              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="ghost" className="w-full sm:w-auto">
                  Contact
                </Button>
              </Link>
            </div>

            <p className="mt-3 text-sm text-neutral-500">
              Devis gratuit • Réponse rapide • Intervention à domicile ou à distance
            </p>
          </div>

          <div className="rounded-3xl border bg-neutral-50 p-8">
            <div className="text-sm text-neutral-600">Aperçu</div>

            <div className="mt-3 grid gap-3">
              <div className="rounded-2xl border bg-white p-4">
                <div className="font-medium">Assistance informatique</div>
                <p className="text-sm text-neutral-600 mt-1">
                  PC/Mac, imprimantes, Wi-Fi, smartphone — prise en main et explications pas à pas.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-4">
                <div className="font-medium">Sites internet</div>
                <p className="text-sm text-neutral-600 mt-1">
                  Site vitrine moderne, responsive, mise en ligne et SEO de base — sur devis.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-4">
                <div className="font-medium">Suivi & accompagnement</div>
                <p className="text-sm text-neutral-600 mt-1">
                  Je reste disponible après l’intervention pour que tout soit clair et fonctionne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
