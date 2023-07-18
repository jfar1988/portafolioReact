import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: 2023,
    title: "Software programmer(freelancer)",
    duration: "Since July",
    details:
      "In my current job, I develop a website for a company that sells 3D characters and scenes. I use technologies such as React.js, Next.js, HTML, CSS, Three.js, and JavaScript to create a seamless experience on both mobile and desktop devices. My goal is to implement interactive and engaging features while optimizing the website's performance and usability. I also work with eleventh-grade students.",
  },
  {
    year: 2018,
    title: "Physics teacher (public)",
    duration: "4 Years",
    details:
      "To attend the subjects of Physics and Laboratory Physics in tenth grades, additionally, to address the functions related to seedbeds for students with difficulties in the subject.",
  },
  {
    year: 2016,
    title: "Mathematics teacher(private)",
    duration: "2 Years",
    details:
      "Providing assistance in mathematics and statistics subjects from third to seventh grade, as well as performing functions related to facilitating quality management in the area of humanistic projection and advising research projects for eleventh-grade students.",
  },
];

const Work = () => {
  return (
    <div id="work" className="pt-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-16">
        Work
      </h1>
      <div className="max-w-[1366] m-auto md:pl-20 px-24 text-justify">
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
    </div>
  );
};

export default Work;
