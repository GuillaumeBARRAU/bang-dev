"use client";

import { ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  trigger: ReactNode;
};

function Spinner() {
  return (
    <span
      className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
      aria-hidden="true"
    />
  );
}

export default function RecallDialog({ trigger }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // UI states
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Micro-UX : reset quand on rouvre proprement
  useEffect(() => {
    if (!open) return;
    setServerError(null);
    setSent(false);
  }, [open]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Petite validation UX côté client (évite un aller/retour)
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const need = String(formData.get("need") || "").trim();

    if (!name || !phone || !email || !need) {
      setServerError("Merci de remplir tous les champs.");
      return;
    }

    setLoading(true);
    setServerError(null);
    setSent(false);

    const payload = {
      name,
      phone,
      email,
      audience: "PARTICULIER" as const,
      subject: "Demande de rappel",
      message: `Demande de rappel

Nom : ${name}
Téléphone : ${phone}
Email : ${email}
Besoin : ${need}`,
      website: "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const raw = await res.text();
      let data: any = null;
      try {
        data = raw ? JSON.parse(raw) : null;
      } catch {}

      if (!res.ok) {
        setServerError(data?.error ?? `Erreur ${res.status}: ${raw || "réponse vide"}`);
        setLoading(false);
        return;
      }

      // Succès : UX premium
      setSent(true);
      setLoading(false);
      form.reset();

      // Laisse le message visible un petit instant
      setTimeout(() => {
        setOpen(false);
      }, 1200);
    } catch (err) {
      console.error("RECALL FETCH ERROR:", err);

      if (err instanceof DOMException && err.name === "AbortError") {
        setLoading(false);
        return;
      }

      setServerError(
        err instanceof Error ? `${err.name}: ${err.message}` : "Erreur réseau. Réessaie dans un instant."
      );
      setLoading(false);
    }
  }

  function safeSetOpen(next: boolean) {
    // UX: empêcher fermeture pendant l’envoi
    if (loading) return;
    setOpen(next);
  }

  return (
    <Dialog open={open} onOpenChange={safeSetOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent
        className="sm:max-w-[520px]"
        // UX: empêcher clic outside / ESC pendant l’envoi
        onPointerDownOutside={(e) => {
          if (loading) e.preventDefault();
        }}
        onEscapeKeyDown={(e) => {
          if (loading) e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Être rappelé</DialogTitle>
          <DialogDescription>
            Laisse tes coordonnées, je te rappelle rapidement.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nom</Label>
            <Input id="name" name="name" required disabled={loading} placeholder="Ton nom" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input id="phone" name="phone" required disabled={loading} placeholder="06…" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              disabled={loading}
              placeholder="ton@email.com"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="need">Besoin</Label>
            <Input
              id="need"
              name="need"
              required
              disabled={loading}
              placeholder="Site internet / aide informatique / autre"
            />
          </div>

          {serverError && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {serverError}
            </div>
          )}

          {sent && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
              Demande envoyée ✅ Je te rappelle rapidement.
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button type="button" variant="outline" onClick={() => safeSetOpen(false)} disabled={loading}>
              Fermer
            </Button>

            <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={loading}>
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <Spinner />
                  Envoi…
                </span>
              ) : (
                "Envoyer"
              )}
            </Button>
          </DialogFooter>

          <p className="text-xs text-neutral-500">
            En envoyant, tu acceptes d’être recontacté. Tes infos ne seront utilisées que pour répondre à ta demande.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
