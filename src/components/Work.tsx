"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Boat from "../img/boat.jpg";
import Bridge from "../img/bridge.jpg";
import { Play } from "react-feather";

const Work = () => {
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

      const currentRef = ref.current;

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, []);

    return [ref, isInView] as const;
  };

  // Hooks for each element with entry effects
  const [refTitle, isInViewTitle] = useInView();
  const [refParagraph, isInViewParagraph] = useInView();
  const [refGrid, isInViewGrid] = useInView();

  return (
    <div id="work" className="bg-[var(--white-color)] text-[color:var(--black-color)] px-5 pb-32">
      <div className="h-20 w-full"></div>
      <div
        ref={refTitle}
        className={`transition-all duration-1000 transform ${
          isInViewTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-center text-4xl tracking-tighter">Prace</h2>
      </div>

      <div
        ref={refParagraph}
        className={`mt-5 transition-all duration-1000 transform ${
          isInViewParagraph ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-[color:var(--gray-color)] text-center text-xl font-light mt-5 max-w-[700px] mx-auto">
          Zobacz nasze prace i przekonaj się, że warto nam zaufać!
        </p>
      </div>

      <div
        ref={refGrid}
        className={`grid grid-cols-1 gap-5 mt-10 transition-all duration-1000 transform max-w-[1200px] mx-auto md:grid-cols-2 lg:grid-cols-3 ${
          isInViewGrid ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col gap-5">
          <div className="relative aspect-[4/3] flex justify-center items-center">
            <Image
              src={Boat}
              alt="boat-photo"
              className="drop-shadow-[5px_5px_2px_rgba(0,0,0,0.3)] brightness-50 absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="h-20 w-20 bg-[var(--primary-color)] rounded-full z-10 flex justify-center items-center duration-200 hover:scale-110">
              <Play size={50} fill="var(--black-color)" stroke="" className="ml-2" />
            </div>
          </div>
          <Image src={Bridge} alt="bridge-photo" className="drop-shadow-[5px_5px_2px_rgba(0,0,0,0.3)]" />
        </div>
        <div className="flex flex-col-reverse gap-5 md:flex-col">
          <Image src={Bridge} alt="bridge-photo" className="drop-shadow-[5px_5px_2px_rgba(0,0,0,0.3)]" />
          <div className="relative aspect-[4/3] flex justify-center items-center">
            <Image
              src={Boat}
              alt="boat-photo"
              className="drop-shadow-[5px_5px_2px_rgba(0,0,0,0.3)] brightness-50 absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="h-20 w-20 bg-[var(--primary-color)] rounded-full z-10 flex justify-center items-center duration-200 hover:scale-110">
              <Play size={50} fill="var(--black-color)" stroke="" className="ml-2" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:hidden lg:flex">
          <div className="relative aspect-[4/3] flex justify-center items-center">
            <Image
              src={Boat}
              alt="boat-photo"
              className="drop-shadow-[5px_5px_2px_rgba(0,0,0,0.3)] brightness-50 absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="h-20 w-20 bg-[var(--primary-color)] rounded-full z-10 flex justify-center items-center duration-200 hover:scale-110">
              <Play size={50} fill="var(--black-color)" stroke="" className="ml-2" />
            </div>
          </div>
          <Image src={Bridge} alt="bridge-photo" className="drop-shadow-[5px_5px_2px_rgba(0,0,0,0.3)]" />
        </div>
      </div>
    </div>
  );
};

export default Work;
