import ContactForm from "@/components/shared/ContactForm";
import RecallDialog from "@/components/shared/RecallDialog";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-neutral-600">
          Décris ton besoin, je te réponds rapidement. Tu peux aussi demander à être rappelé.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="rounded-3xl border bg-neutral-50 p-6">
              <div className="font-semibold">Bang Dev</div>
              <p className="mt-2 text-sm text-neutral-600">
                Sites internet modernes & assistance informatique à domicile.
              </p>

              <div className="mt-6 space-y-2 text-sm">
                <div>
                  <span className="text-neutral-500">Téléphone : </span>
                  <a className="hover:underline" href="tel:+33687552139">
                    +33 6 87 55 21 39
                  </a>
                </div>
                <div>
                  <span className="text-neutral-500">Email : </span>
                  <span>guillaume.barrau69@gmail.com</span>
                </div>
                <div>
                  <span className="text-neutral-500">Intervention : </span>
                  <span>à domicile & à distance</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a href="tel:+33687552139">
                  <Button variant="outline" className="w-full border-neutral-300 hover:bg-neutral-50">
                    Appeler
                  </Button>
                </a>
                <RecallDialog trigger={<Button className="w-full bg-blue-600 hover:bg-blue-700">Être rappelé</Button>} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
