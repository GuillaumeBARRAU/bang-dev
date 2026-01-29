import Link from "next/link";
import { Button } from "@/components/ui/button";
import RecallDialog from "@/components/shared/RecallDialog";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm text-neutral-600">
              Sites internet • Assistance informatique • À domicile & à distance
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
              Besoin d'aide avec l'informatique ou Internet?
            </h1>

            <p className="mt-4 text-lg text-neutral-600">
              J’aide les indépendants à avoir un site efficace, et j’accompagne les seniors
              dans l’usage du numérique, simplement et à leur rythme.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <RecallDialog trigger={<Button>Être rappelé</Button>} />
              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Voir les services
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border bg-neutral-50 p-8">
            <div className="text-sm text-neutral-600">Aperçu</div>
            <div className="mt-3 grid gap-3">
              <div className="rounded-2xl border bg-white p-4">
                <div className="font-medium">Sites internet</div>
                <p className="text-sm text-neutral-600 mt-1">
                  Design propre, responsive, mise en ligne et SEO de base.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-4">
                <div className="font-medium">Aide informatique seniors</div>
                <p className="text-sm text-neutral-600 mt-1">
                  PC/Mac, imprimantes, smartphones — explications simples.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-4">
                <div className="font-medium">Suivi</div>
                <p className="text-sm text-neutral-600 mt-1">
                  Je reste disponible pour t’accompagner après.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
