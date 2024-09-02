import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left "
        src="https://images.unsplash.com/photo-1625472603513-413fb94f8b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="image-bg"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center 2xl:items-start items-center text-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">
            I'm Juan Fdo Aguilar R.
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Coder",
                2000,
                "Tech Enthusuast",
                2000,
                "Disciplined Person",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
              }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://twitter.com/JuanFer11969112">
              <FaTwitter className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/jfar1988">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com/juanfaguilarr/">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/juanferaguilar/">
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
