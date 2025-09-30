import { projects } from "@/data/projects";
import { ProjectRow } from "./ProjectRow";

export function Projects() {
  return (
    <div className="space-y-16">
      {projects.map((p, i) => (
        <ProjectRow key={p.slug} {...p} reverse={i % 2 === 1} />
      ))}
    </div>
  );
}
