import { About } from "./components/about/about";
import { Experience } from "./components/career/career";
import { Footer, Header } from "./components/common";
import { Contact } from "./components/contact/contact";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/project/project";
import { Skills } from "./components/skills/skills";

export default function Home() {
  return (
    <div className="overflow-auto">
        <Header/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  );
}
