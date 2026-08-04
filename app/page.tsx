import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { FeaturedProject } from "@/components/sections/featured-project";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Pipeline } from "@/components/sections/pipeline";
import { Principles } from "@/components/sections/principles";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProject />
        <Projects />
        <Skills />
        <Pipeline />
        <Principles />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
