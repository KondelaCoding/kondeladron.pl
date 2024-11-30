import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Scrollbar from "../components/Scrollbar";
import About from "../components/About";
import Seperator from "../components/Seperator";
import Work from "../components/Work";
import Cta from "../components/Cta";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <Scrollbar />
      <Hero />
      <About />
      <Seperator to="white" />
      <Work />
      <Cta />
      <Seperator to="black" />
      <Faq />
      <Seperator to="white" />
    </>
  );
}
