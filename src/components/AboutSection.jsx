import React from "react";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "React" },
  { skill: "JavaScript" },
  { skill: "Node.js" },
  { skill: "SASS" },
  { skill: "Next.js" },
  { skill: "Bootstrap" },
  { skill: "GitHub" },
  { skill: "Git Desktop" },
  { skill: "Tailwind CSS" },
];

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 justify-center align-top items-stretch md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Florentina and I am a {""}
              <span className="font-bold">
                highly ambitious, self-motivated and driven
              </span>{" "}
              frontend developer based in Bucharest, Romania.
            </p>
            <br />
            <p>
              I graduated from University of Bucharest, Romania in 2021 with a
              master degree in Sociology of Consumption and Marketing, but I
              started to begin working in the field of IT from 2022 when I
              signed up in a Frontend Developer and React course from Pixellab,
              Romania.
            </p>

            <br />

            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, driving, to making Youtube videos. I
              am always seeking new experiences and I love to keep myself
              engaged and learning new things.
            </p>

            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                {" "}
                never stop growing{" "}
              </span>{" "}
              that's why I love evolving in every aspect of my life. I have a
              passion for technology and a desire to make life easier just using
              it in the right way, and simplyfing life with it. I am excited to
              see where my career takes me and I am always open to new
              opportunities.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, i) => {
                return (
                  <p
                    key={i}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
