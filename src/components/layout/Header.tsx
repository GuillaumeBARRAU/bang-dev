"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import RecallDialog from "@/components/shared/RecallDialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/sites-internet", label: "Sites internet" },
  { href: "/aide-seniors", label: "Aide seniors" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-8 rounded-xl border flex items-center justify-center font-semibold">
            B
          </div>
          <span className="font-semibold tracking-tight">Bang Dev</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  active ? "text-black font-medium" : "text-neutral-600 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+33000000000" className="hidden sm:inline-flex">
            <Button variant="outline">Appeler</Button>
          </a>

          <RecallDialog
            trigger={<Button>Être rappelé</Button>}
          />

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Menu</Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px]">
                <div className="mt-6 flex flex-col gap-3">
                  {nav.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`rounded-lg px-3 py-2 text-sm ${
                          active ? "bg-neutral-100 font-medium" : "hover:bg-neutral-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <div className="pt-4 flex flex-col gap-2">
                    <a href="tel:+33000000000">
                      <Button className="w-full" variant="outline">
                        Appeler
                      </Button>
                    </a>
                    <RecallDialog
                      trigger={<Button className="w-full">Être rappelé</Button>}
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
