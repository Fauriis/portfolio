import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />

      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="text-neutral-500">© 2023 Dobre Florentina</div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="http://github.com/fauriis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-zinc-400"
              size={30}
            ></AiOutlineGithub>
          </a>

          <a
            href="https://www.linkedin.com/in/florentina-dobre-7419b615a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-zinc-400"
              size={30}
            ></AiOutlineLinkedin>
          </a>
        </div>
      </div>
    </footer>
  );
};
