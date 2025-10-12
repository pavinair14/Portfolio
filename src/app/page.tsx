import { About } from "@/components/about/app";
import { Divider } from "@/components/common/divider";
import { Contact } from "@/components/contact/app";
import { Experience } from "@/components/experience/app";
import { Intro } from "@/components/intro/app";
import { Projects } from "@/components/projects/app";
import { Skills } from "@/components/skills/app";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Contact />
    </main>

  );
}
