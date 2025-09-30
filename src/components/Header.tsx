

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 id="about-title" className="font-display text-[42px] leading-none">
              Cecilia Alejandra Espinoza
            </h1>
            <p className="mt-2 text-lg opacity-90">
              Frontend Developer · React · Next.js · TypeScript
            </p>

            <div className="mt-5 flex gap-3">
    <a
      className="px-4 py-2 bg-secondary text-white rounded-none hover:opacity-90 transition"
      href="https://github.com/Alejandraespinoza405" target="_blank" rel="noreferrer"
    >
      GitHub
    </a>
    <a
      className="px-4 py-2 bg-secondary text-white rounded-none hover:opacity-90 transition"
      href="https://www.linkedin.com/in/cecilia-alejandra-espinoza-125512381" target="_blank" rel="noreferrer"
    >
      LinkedIn
    </a>
    <a
      className="px-4 py-2 bg-secondary text-white rounded-none hover:opacity-90 transition"
      href="mailto:alejandra2025espinoza@gmail.com"
    >
      Email
    </a>
  </div>
          </div>

          <div className="max-w-[48ch] text-neutral-200">
  <h3 className="text-sm tracking-widest text-secondary mb-2">SOBRE MÍ</h3>
  <p className="text-[15px] leading-7">
    Desarrolladora Frontend con foco en React, Next.js, TypeScript y Tailwind.
    Estética moderna + performance + accesibilidad.
  </p>
  <a
    href="#projects"
    className="mt-5 inline-block px-5 py-3 bg-secondary text-white rounded-none hover:opacity-90 transition"
  >
    Ver proyectos
  </a>
</div>

        </div>
      </div>
    </header>
  );
}
