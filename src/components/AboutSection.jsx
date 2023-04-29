import React from "react";

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">About me</h1>
        <div className="flex flex-col space-y-10 justify-center align-top items-stretch md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
            <p>
              Hi, my name is Florentina and I am a
              <span className="font-bold">
                highly ambitious, self-motivated, driven and artistic
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
              am always seeking new experiences and love to keep myself engaged
              and learning new things.
            </p>

            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                {" "}
                never stop growing{" "}
              </span>{" "}
              that's why I love evolving in every level of my life. I have a
              passion for technology and a desire to make life easier just using
              it in the right way, and simplyfing life with it. I am excited to
              see where my career takes me and I am always open to new
              opportunities.
            </p>
          </div>
          <div className="md:w-1/2"> 
            <h1>My skills</h1>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};
