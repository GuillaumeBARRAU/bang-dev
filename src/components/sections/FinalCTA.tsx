import Link from "next/link";
import { Button } from "@/components/ui/button";
import RecallDialog from "@/components/shared/RecallDialog";

export default function FinalCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl border bg-neutral-50 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">On en parle ?</h2>
            <p className="mt-2 text-neutral-600">
              Décris ton besoin en 1 minute, je te rappelle rapidement.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <RecallDialog trigger={<Button className="w-full sm:w-auto">Être rappelé</Button>} />
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
