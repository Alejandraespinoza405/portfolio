// src/components/Contact.tsx
import { ArrowUp, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative">
      {/* Franja diagonal con gradiente (arriba de la sección) */}
      <div
        className="h-24 bg-gradient-to-r from-secondary to-primary"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)" }}
      />

      {/* Contenido centrado */}
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="font-display tracking-wide text-4xl md:text-5xl">
          CONTACTO
        </h2>

        <p className="mt-4 text-lg text-neutral-700">
          ¿Te gustan mis trabajos?
        </p>

        <a
          href="mailto:alejandra2025espinoza@gmail.com"
          className="mt-8 inline-block px-6 py-3 bg-secondary text-white rounded-none hover:opacity-90 transition" 
        >
          Contactame
        </a>
      </div>

      {/* Footer oscuro */}
      <footer className="bg-gray-900 text-neutral-300">
        <div className="max-w-5xl mx-auto px-4 py-10 text-center">
          {/* Botón subir */}
          <div className="flex justify-center">
            <a
              href="#top"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5" />
            </a>
          </div>

          {/* Iconos sociales */}
          <div className="mt-6 flex items-center justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/cecilia-alejandra-espinoza-125512381"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition inline-flex items-center gap-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/Alejandraespinoza405"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition inline-flex items-center gap-2"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          {/* Regla sutil */}
          <hr className="my-8 bg-gray-900" />

          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} · Desarrollado por Cecilia Alejandra Espinoza
          </p>
        </div>
      </footer>
    </section>
  );
}
