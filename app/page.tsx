import { About } from "./components/about/about";
import { Footer, Header } from "./components/common";
import { Hero } from "./components/hero/hero";

export default function Home() {
  return (
    <div >
        <Header/>
        <Hero/>
        <About/>
        <Footer/>
    </div>
  );
}
