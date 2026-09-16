import { projects } from "@/data/projects";
import { ProjectRow } from "./ProjectRow";

export function Projects() {
  return (
    <section className="py-16 bg-violet-100 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
  <div className="space-y-16">
    {projects.map((p, i) => (
      <ProjectRow
        key={p.slug}
        {...p}
        reverse={i % 2 === 1}
      />
    ))}
  </div>
</section>
  );
}