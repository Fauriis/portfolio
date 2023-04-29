import Image from "next/image";
import Link from "next/link";
import React from "react";
import {HiArrowDown} from 'react-icons/hi'

export const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-5 py-16 md:flex-row md:space-x-4 md:text-left md:py-52 sm:py-32">
        <div className="md:w-1/2 md:mt-2">
          <Image className='rounded-full shadow-2xl' src="/avatar.jpeg" alt="" width={300} height={300}></Image>
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">Hi, I am Dobre Florentina!</h1>

          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I am a{" "}
            <span className="font-semibold text-teal-600">
              Frontend Developer with React
            </span>{" "}
            based in Bucharest, Romania. Working towards creating web designs
            that make life easier and meaningful.
          </p>

          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-md hover:bg-teal-700"
            href={""}
          >
            {" "}
            Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <Link to='about' className="" href={''}>
            <HiArrowDown size={35} className="animate-bounce"></HiArrowDown>
        </Link>
      </div>
    </section>
  );
};
