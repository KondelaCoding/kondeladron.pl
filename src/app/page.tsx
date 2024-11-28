import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Scrollbar from "../components/Scrollbar";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Scrollbar />
      <Hero />
      <About />
    </>
  );
}
