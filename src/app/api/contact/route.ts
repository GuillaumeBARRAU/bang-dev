import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  phone: z.string().min(6).max(30).optional().or(z.literal("")),
  audience: z.enum(["ENTREPRISE", "PARTICULIER"]),
  subject: z.string().min(2).max(120),
  message: z.string().min(10).max(2000),
  website: z.string().optional().or(z.literal("")), // honeypot anti-spam
});

function missingEnv(...keys: string[]) {
  const missing = keys.filter((k) => !process.env[k] || String(process.env[k]).trim() === "");
  return missing.length ? missing : null;
}

export async function POST(req: Request) {
  // 1) Vérif env (sinon on évite de “faire semblant”)
  const miss = missingEnv("RESEND_API_KEY", "CONTACT_TO_EMAIL", "CONTACT_FROM_EMAIL");
  if (miss) {
    return NextResponse.json(
      { error: `Variables d’environnement manquantes: ${miss.join(", ")}` },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // 2) Parse body JSON
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Body JSON invalide" }, { status: 400 });
    }

    // 3) Validation serveur (sécurité)
    const data = ContactSchema.parse(body);

    // 4) Honeypot anti-bot
    if (data.website && data.website.trim().length > 0) {
      // On répond OK sans envoyer (on ne “révèle” pas l’anti-spam)
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // 5) Construire le mail (texte)
    const text = `
NOUVEAU MESSAGE — Bang Dev

Nom: ${data.name}
Email: ${data.email}
Téléphone: ${data.phone || "(non renseigné)"}
Profil: ${data.audience}
Sujet: ${data.subject}

Message:
${data.message}
`.trim();

    // 6) Envoi via Resend
    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!, // ex: "Bang Dev <onboarding@resend.dev>"
      to: process.env.CONTACT_TO_EMAIL!,     // ta boîte
      replyTo: data.email,                   // pour répondre en 1 clic
      subject: `[Bang Dev] ${data.subject}`,
      text,
    }
  );
  

    // Si Resend renvoie une erreur explicite
    if ((result as any)?.error) {
      return NextResponse.json(
        { error: "Resend error", details: (result as any).error },
        { status: 502 }
      );
    }
    console.log("RESEND RESULT:", result);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    // Zod
    if (err?.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation error", details: err.issues },
        { status: 400 }
      );
    }

    // Log serveur utile (visible dans terminal)
    console.error("API /contact error:", err);

    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
