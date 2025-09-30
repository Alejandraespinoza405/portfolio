const skills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Tailwind CSS", "Git/GitHub", "REST", "UI/UX",
  "Responsive Design"
];

export function Skills() {
  return (
    <section aria-labelledby="skills-title" className="w-full">
      <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-16 bg-[#E8DEFc]">
        {/* Título + subrayado */}
        <h2 id="skills-title" className="font-display text-[42px] leading-none">
          TECNOLOGÍAS
        </h2>
        <div className="mt-2 h-[3px] w-20 bg-secondary" />

        {/* Chips cuadrados, sin bordes redondeados */}
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <li
              key={s}
              className="border border-neutral-300 bg-white px-4 py-3 rounded-none text-[15px] text-neutral-800"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
