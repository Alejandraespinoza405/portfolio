// src/components/ProjectRow.tsx
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  image?: string;
  reverse?: boolean;
};

export function ProjectRow({
  title,
  description,
  tech,
  repo,
  demo,
  image = "/placeholder.png",
  reverse,
}: Props) {
  return (
    <article
      className={`grid items-center gap-10 md:gap-16 md:grid-cols-2 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Texto */}
      <div>
        <h3 className="font-display text-3xl md:text-4xl tracking-tight">{title}</h3>
        <p className="mt-3 text-neutral-700 leading-relaxed">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li key={t} className="border px-3 py-1 text-sm bg-white border-neutral-200">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-3">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border-2 border-secondary/60 hover:border-secondary transition"
            >
              GitHub Repo
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-secondary text-white hover:opacity-90 transition"
            >
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Imagen: esquinas rectas, sin recorte */}
      <div className="max-w-[920px] w-full mx-auto">
        <div className="shadow-[0_12px_40px_rgba(0,0,0,0.18)] bg-white">
          <Image
            src={image}
            alt={title}
            width={1600}
            height={900}
            className="w-full h-auto"   
            priority={false}
          />
        </div>
      </div>
    </article>
  );
}

