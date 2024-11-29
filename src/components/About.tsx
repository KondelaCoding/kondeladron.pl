"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Boat from "../img/boat.jpg";
import Bridge from "../img/bridge.jpg";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  // Custom hook for observing elements
  const useInView = () => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return [ref, isInView] as const;
  };

  // Hook for the first section
  const [ref1, isInView1] = useInView();
  // Hook for the second section
  const [ref2, isInView2] = useInView();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-40">
      <div
        ref={ref1}
        className={`px-5 transition-all duration-1000 transform ${
          isInView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-center text-4xl tracking-tighter">O nas</h2>
        <p className="text-[color:var(--lightgray-color)] text-center text-xl font-light mt-5 max-w-[700px] mx-auto">
          Jesteśmy pasjonatami filmowania dronem, oferując usługi profesjonalnego rejestrowania obrazu z powietrza.
          Specjalizujemy się w tworzeniu filmów, zdjęć, reklam, relacji z wydarzeń oraz inspekcji dla firm i osób
          prywatnych.
        </p>
      </div>

      {/* Parallax Image Section */}
      <div className="-mt-20">
        <div className="relative bg-[var(--background)] h-52 -skew-y-6 -z-10 -mb-32 md:-mb-40"></div>
        <div className="relative w-full -z-20">
          <Image
            src={screenWidth > 768 ? Boat : Bridge}
            width={1920}
            height={1080}
            alt="boat-photo"
            className="w-full"
            style={{ transform: `translateY(${offsetY * 0.1}px)` }}
          />
        </div>
        <div className="relative bg-[var(--background)] h-52 -skew-y-6 -z-10 -mb-32"></div>
      </div>
      <div
        ref={ref2}
        className={`bg-[var(--background)] mt-10 px-5 transition-all duration-1000 transform ${
          isInView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-center text-4xl tracking-tighter">Dlaczego my?</h2>
        <ul className="text-[color:var(--lightgray-color)] text-xl text-center font-light mt-5 space-y-10">
          <li className="space-y-2 backdrop-brightness-125 py-10 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-bold text-2xl text-[var(--white-color)]">Profesjonalizm</h3>
            <p>Działamy zgodnie z obowiązującymi przepisami, posiadając odpowiednie licencje i ubezpieczenie.</p>
          </li>
          <li className="space-y-2 backdrop-brightness-125 py-10 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-bold text-2xl text-[var(--white-color)]">Nowoczesny sprzęt</h3>
            <p>Korzystamy z najnowszych dronów, które zapewniają stabilność i najwyższą jakość obrazu.</p>
          </li>
          <li className="space-y-2 backdrop-brightness-125 py-10 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-bold text-2xl text-[var(--white-color)]">Elastyczność</h3>
            <p>Dostosowujemy naszą ofertę do indywidualnych potrzeb każdego klienta.</p>
          </li>
          <li className="space-y-2 backdrop-brightness-125 py-10 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-bold text-2xl text-[var(--white-color)]">Pasja i doświadczenie</h3>
            <p>Kochamy to, co robimy, a nasze doświadczenie przekłada się na doskonałe rezultaty.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
