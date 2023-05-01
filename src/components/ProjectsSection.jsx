import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircle, BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "Ecommerce Products",
    description:
      "An ecommerce site created and designed by me, using API store.",
    image: "/ecommerce.png",
    link: "https://ecommerce-products-eight.vercel.app",
    github: "https://github.com/Fauriis/ecommerce-products",
  },
  {
    name: "To do list",
    description:
      "An app that helps you create a to-do list. Here you can change, add and delete activities from your to-do list.",
    link: "https://todo-list-psi-tan.vercel.app",
    github: "https://github.com/Fauriis/todo-list",
    image: "/todolist.png",
  },
  {
    name: "Ecommerce Products",
    description:
      "An ecommerce site created in the Pixellab course, using Fake Store API",
    image: "/ecommerce2.png",
    link: "https://df-sidney-ecom-f8nk.vercel.app",
    github: "https://github.com/Fauriis/df-sidney-ecom",
  },
  {
    name: "Digital Clock",
    description: "A digital clock having particles as background.",
    image: "/digitalclock.png",
    link: "https://digital-clock-fawn.vercel.app",
    github: "https://github.com/Fauriis/digital-clock",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, i) => {
          return (
            <div key={i}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                  <Image
                    src={project.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  ></Image>
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4 ">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      ></BsGithub>
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightCircle
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      ></BsArrowUpRightCircle>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
