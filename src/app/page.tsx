import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
