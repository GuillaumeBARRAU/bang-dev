import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-semibold">Bang Dev</div>
            <p className="text-sm text-neutral-600 mt-1">
              Sites internet modernes & assistance informatique à domicile.
            </p>
          </div>

          <div className="flex gap-4 text-sm text-neutral-600">
            <Link href="/contact" className="hover:text-black">
              Contact
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-black">
              Mentions légales
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-black">
              Confidentialité
            </Link>
          </div>
        </div>

        <div className="mt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Bang Dev. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
