import React from "react";
import Image from "next/image";
import Img1 from "@/public/headshot.png";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Eleventy",
    "Node.js",
    "WordPress",
  ];

  return (
    <div className="container mx-auto px-4 max-w-5xl ">
      <h2 className="font-bold text-white text-xl">About Me</h2>

        <div className="flex">
        <div className="grid-cols-3 gap-12 ">
        <p className="text-slate-200">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML &amp; CSS!
        </p>

        <p className="text-slate-200">
          Fast-forward to today, and I’ve had the privilege of working at{" "}
          <a href="https://us.mullenlowe.com/">an advertising agency</a>,{" "}
          <a href="https://starry.com/">a start-up</a>,{" "}
          <a href="https://www.apple.com/">a huge corporation</a>, and{" "}
          <a href="https://scout.camd.northeastern.edu/">
            a student-led design studio
          </a>
          . My main focus these days is building accessible, inclusive products
          and digital experiences at{" "}
          <a href="https://upstatement.com/">Upstatement</a> for a variety of
          clients.
        </p>

        <p className="text-slate-200 mb-4 font-semibold">
          I also recently{" "}
          <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
            launched a course
          </a>{" "}
          that covers everything you need to build a web app with the Spotify
          API using Node &amp; React.
        </p>

        <p className="text-slate-200 text-md font-semibold">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="grid-cols-2 gap-y-2.5 gap-x-0 p-0 mt-5 mr-0 ml-0 mb-0  list-none text-slate-200">
        {skills &&
          skills.map((skill, i) => (
            <li className="relative mb-2.5 pl-5 font-mono text-base" key={i}>
              {skill}
            </li>
          ))}
      </ul>
      </div>
     
      <div className="relative max-w-xs">
        <div className="block relative w-100 bg-green-300 border-r-amber-300 hover:outline-0 hover:top-3 hover:left-3">
          <Image
            className="img"
            src={Img1}
            width={500}
            height={300}
            quality={95}
            alt="Headshot"
          />
        </div>
      </div>
        </div>
    </div>
  );
};

export default About;
