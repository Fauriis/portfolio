import { useTheme } from "next-themes";
import React, { useState } from "react";
import { RiSunLine } from "react-icons/ri";
import { RiMoonFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 shadow fixed sm:px-20 top-0 z-50 bg-white text-black dark:border-b dark:border-stone-600">
      <section className="justify-between md:flex md:items-center">
        <article className="flex items-center justify-between py-3">
          <div className="py-5 block">
            <h2 className="text-2xl font-bold">Dobre Florentina</h2>
          </div>

          <div className="md:hidden">
            <button onClick={() => setNavbar(!navbar)}>
              {" "}
              {navbar ? (
                <IoMdClose size={25}></IoMdClose>
              ) : (
                <IoMdMenu size={25}></IoMdMenu>
              )}
            </button>
          </div>
        </article>

        <article>
          <section
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
              {navItems.map((item, id) => {
                return (
                  <Link
                    key={id}
                    activeClass='active'
                    spy={true}
                    offset={-100}
                    href={""}
                    to={item.page}
                    className={"block lg:inline-block text-neutral-900 hover:text-neutral-500"}
                    smooth={true}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  className="bg-slate-100 p-2 rounded-xl"
                  title="light"
                  onClick={() => setTheme("light")}
                >
                  <RiSunLine size={25} color="red"></RiSunLine>
                </button>
              ) : (
                <button
                  className="bg-slate-100 p-2 rounded-xl"
                  title="dark"
                  onClick={() => setTheme("dark")}
                >
                  <RiMoonFill size={25}></RiMoonFill>
                </button>
              )}
            </div>
          </section>
        </article>
      </section>
    </header>
  );
};
