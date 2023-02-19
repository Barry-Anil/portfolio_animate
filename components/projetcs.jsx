import React from "react";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 max-w-5xl ">
      <h2 className="font-bold text-green-300 text-xl">
        Some Things I’ve Built
      </h2>

      <figure class="md:flex bg-slate-500 rounded-xl p-8 md:p-0 dark:bg-slate-800 shadow-2xl">
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Projects;
