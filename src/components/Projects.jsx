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
          title="Traventhia App"
          image="/previous.png"
          more="https://traventhia.netlify.app/"
        />
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
          title="CRIPTO REACT"
          image="https://resilient-tartufo-c1d937.netlify.app/assets/imagen-criptos-fd3e77dd.jpg"
          more="https://resilient-tartufo-c1d937.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
