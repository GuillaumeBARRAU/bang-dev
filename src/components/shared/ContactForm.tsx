"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSchema = z.object({
  name: z.string().min(2, "Entre ton nom").max(80),
  email: z.string().email("Email invalide").max(120),
  phone: z.string().min(6, "Téléphone invalide").max(30).optional().or(z.literal("")),
  audience: z.enum(["ENTREPRISE", "PARTICULIER"]),
  subject: z.string().min(2, "Sujet requis").max(120),
  message: z.string().min(10, "Ton message est trop court").max(2000),
  website: z.string().optional().or(z.literal("")), // honeypot
});

type ContactValues = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      audience: "ENTREPRISE",
      subject: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: ContactValues) {
    setServerError(null);
    setSent(false);

    try {
      const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(values),
});

const raw = await res.text(); // on lit toujours en texte
let data: any = null;

try {
  data = raw ? JSON.parse(raw) : null;
} catch {
  // la réponse n'est pas du JSON (ex: HTML)
}

if (!res.ok) {
  setServerError(data?.error ?? `Erreur (${res.status}) : ${raw || "réponse vide"}`);
  return;
}

setSent(true);
form.reset();

    } catch {
      setServerError("Erreur réseau. Réessaie dans un instant.");
    }
  }

  const { errors, isSubmitting } = form.formState;

  return (
    <div className="rounded-3xl border bg-white p-6">
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
        {/* Honeypot (invisible) */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          {...form.register("website")}
        />

        <div className="grid gap-2">
          <Label htmlFor="name">Nom</Label>
          <Input id="name" placeholder="Ton nom" {...form.register("name")} />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="ton@email.com" {...form.register("email")} />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Téléphone (optionnel)</Label>
          <Input id="phone" placeholder="06…" {...form.register("phone")} />
          {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="audience">Vous êtes</Label>
          <select
            id="audience"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            {...form.register("audience")}
          >
            <option value="ENTREPRISE">Entreprise / indépendant</option>
            <option value="PARTICULIER">Particulier</option>
          </select>
          {errors.audience && <p className="text-sm text-red-600">{errors.audience.message}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="subject">Sujet</Label>
          <Input id="subject" placeholder="Demande de devis / info / …" {...form.register("subject")} />
          {errors.subject && <p className="text-sm text-red-600">{errors.subject.message}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Décris ton besoin (objectif, pages, contenu, délai, etc.)"
            rows={6}
            {...form.register("message")}
          />
          {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
        </div>

        {serverError && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {serverError}
          </div>
        )}

        {sent && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
            Message envoyé ✅ Je te réponds rapidement.
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </Button>
      </form>
    </div>
  );
}
