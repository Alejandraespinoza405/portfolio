import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { FullWidthSection } from "@/components/FullWidthSection";

export default function HomePage() {
  return (
    <main id="top" className="w-full">
      {/* Header ya es full-width, lo dejamos */}
      <Header />

      {/* PROYECTOS – banda violeta claro, full bleed */}
      <FullWidthSection id="projects" className="py-14 bg-[#E8DEFc]">
        <Projects />
      </FullWidthSection>

      {/* ACERCA DE MÍ – fondo gris muy claro, full bleed */}
      <FullWidthSection id="about" className="py-14 bg-neutral-100">
        <About />
      </FullWidthSection>

      {/* TECNOLOGÍAS – otra banda, full bleed */}
      <FullWidthSection id="skills" className="py-14 bg-[#E8DEFc]">
        <Skills />
      </FullWidthSection>

      {/* CONTACTO – ya hicimos full bleed en el componente */}
      <Contact />
    </main>
  );
}
