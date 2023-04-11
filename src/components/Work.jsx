import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: 2018,
    title: "Profesor de física(Publico)",
    duration: "4 Years",
    details:
      "Atender las asignaturas de física y física de laboratorio en grados decimos, además, atender las funciones referentes a semilleros para estudiantes con dificultades en la asignatura.",
  },
  {
    year: 2016,
    title: "Profesor de Matemáticas(Privado)",
    duration: "2 Years",
    details:
      "Atender las asignaturas de matemáticas y estadística en grados tercero hasta séptimo, además, funciones referentes al facilitar la gestión de calidad en el área de proyección humanística y asesorar proyecto de investigación de las estudiantes de undécimo",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1366] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-10">
        Work
      </h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
