// src/components/About.tsx
import Image from "next/image";

export function About() {
  return (
    <section aria-labelledby="about-title" className="w-full bg-[#E8DEFc]">
      {/* padding lateral y vertical, sin max-width para full-bleed */}
      <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-16">
        {/* Título */}
        <h2 id="about-title" className="font-display text-[42px] leading-none">
          ACERCA DE MÍ
        </h2>
        <div className="mt-2 h-[3px] w-20 bg-secondary" />

        {/* Grid: Foto + Texto */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 items-center">
          {/* Foto */}
          <div className="lg:col-span-4">
            <div className="bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-0 rounded-none">
              <Image
                src="/images/cecilia.jpg"    // <-- cambiá por tu archivo
                alt="Cecilia Alejandra Espinoza"
                width={900}
                height={1200}
                className="w-full h-[380px] object-cover rounded-none"
                priority={false}
              />
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-8 text-neutral-900">
            <p className="text-[17px] leading-7">
  Empecé en el desarrollo web porque me atraía la parte visual: cómo un buen diseño puede
  transformar la experiencia de una persona. Con el tiempo descubrí que también disfruto la
  lógica y la organización que hay detrás del código.
</p>

<p className="mt-6 text-[15px] leading-7 text-neutral-800">
  Hoy me enfoco en frontend con React, Next.js, TypeScript y Tailwind, donde puedo combinar
  estética con funcionalidad. Me caracterizo por la constancia, la atención al detalle y por
  trabajar en equipo para llevar cada idea a una interfaz clara, moderna y accesible.
</p>


            {/* CTA opcional */}
            <div className="mt-8">
              <p className="mt-6 text-[15px] leading-7 text-neutral-800">
  Si te interesa trabajar conmigo, hablemos.
</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

