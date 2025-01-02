"use client";

import useInView from "../utils/useInView";
import Image from "next/image";
import Boat from "../img/boat.jpg";
import WorkVertical1 from "../img/work-vertical1.jpg";
import WorkVertical2 from "../img/work-vertical2.jpg";
import WorkVertical3 from "../img/work-vertical3.jpg";
import { Play } from "react-feather";

const Work = () => {
  // custom fade in effect
  const [ref1, isInView1] = useInView();
  const [ref2, isInView2] = useInView();
  const [ref3, isInView3] = useInView();

  return (
    <div id="work" className="bg-[var(--white-color)] text-[color:var(--black-color)] px-5 pb-32">
      <div className="h-20 w-full"></div>
      <div
        ref={ref1}
        className={`transition-all duration-1000 transform ${
          isInView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-center text-4xl tracking-tighter">Prace</h2>
      </div>

      <div
        ref={ref2}
        className={`mt-5 transition-all duration-1000 transform ${
          isInView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-[color:var(--gray-color)] text-center text-xl font-light mt-5 max-w-[700px] mx-auto">
          Zobacz nasze prace i przekonaj się, że warto nam zaufać! <br /> Po więcej zapraszamy na nasz{" "}
          <a href="" className="text-blue-600 underline">
            Instagram
          </a>{" "}
          i{" "}
          <a href="" className="text-blue-600 underline">
            Facebook
          </a>
          .
        </p>
      </div>

      <div
        ref={ref3}
        className={`grid grid-cols-1 gap-5 mt-10 transition-all duration-1000 transform max-w-[1200px] mx-auto md:grid-cols-2 lg:grid-cols-3 ${
          isInView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
          <Image
            src={WorkVertical1}
            alt="fountain-on-a-lake-photo"
            className="drop-shadow-[5px_5px_2px_rgba(0,0,0,0.3)] aspect-[9/16]"
          />
        </div>
        <div className="flex flex-col-reverse gap-5 md:flex-col">
          <Image
            src={WorkVertical2}
            alt="path-in-a-park-photo"
            className="drop-shadow-[5px_5px_2px_rgba(0,0,0,0.3)] aspect-[9/16]"
          />
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
          <Image
            src={WorkVertical3}
            alt="road-photo"
            className="drop-shadow-[5px_5px_2px_rgba(0,0,0,0.3)] aspect-[9/16]"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
