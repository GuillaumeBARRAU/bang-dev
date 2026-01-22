import { projects } from "@/content/projects";

export default function ProjectsGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Réalisations</h2>
            <p className="mt-2 text-neutral-600">
              Quelques exemples (tu pourras remplacer par tes vrais projets).
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="rounded-3xl border p-6 bg-neutral-50">
              <div className="text-xs text-neutral-500">{p.type}</div>
              <div className="mt-2 font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-neutral-600">{p.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
