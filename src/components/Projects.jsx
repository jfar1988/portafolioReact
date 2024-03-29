import React from "react";
import ProjectItem from "./ProjectItem";
import weather from "../assets/weather.png";

const Projects = () => {
  return (
    <div id="projects" className="py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-16">
        Projects
      </h1>

      <p className="pb-8 px-24 text-justify">
        Projects carried out with React, JavaScript, NodeJS, ThreeJs, Redux,
        Props, Tailwindcss, among others. Personal projects that showcase my
        great interest in the field of FullStack Development and 3D character
        design with their respective animations.
      </p>
      <div className="grid sm:grid-cols-2 gap-12 px-24">
        <ProjectItem
          title="Rick and Morty"
          image="https://i.ytimg.com/vi/jQzLjISEeas/maxresdefault.jpg"
          more="https://enchanting-bienenstitch-dbc69b.netlify.app/"
          info="rick an morty... más info"
        />
        <ProjectItem
          title="Pokemon"
          image="https://c4.wallpaperflare.com/wallpaper/677/922/425/pokemon-pokemon-red-and-blue-blastoise-pokemon-bulbasaur-pokemon-wallpaper-preview.jpg"
          more="https://stirring-custard-bfb10b.netlify.app/"
        />
        <ProjectItem
          title="ThreeJs Prototype"
          image="https://media.sketchfab.com/models/18aa1cc77e68491eb9e6a4532ff5ddb2/thumbnails/f80b25b01dba4478bbc9615c0df664a4/5f4a0eb99ed941c894f1a184f182a878.jpeg"
          more="https://prototypethreejs.netlify.app/"
        />
        <ProjectItem
          title="Weather App"
          image={weather}
          more="https://fanciful-boba-4a541a.netlify.app/"
        />
        <ProjectItem
          title="CRUD APP"
          image="data:image/jpeg;base64,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"
          more="https://stately-tanuki-6daf5c.netlify.app/"
        />
        <ProjectItem
          title="CRIPTO REACT"
          image="https://resilient-tartufo-c1d937.netlify.app/assets/imagen-criptos-fd3e77dd.jpg"
          more="https://resilient-tartufo-c1d937.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
