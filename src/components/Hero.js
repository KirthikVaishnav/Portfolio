import React from "react";
import HeroImg from "../assests/hero.png";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Hero() {
  return (
    <section className="flex flex-col  md:flex-row px-10 py-40 bg-primary justify-center" id="home">
      <div className="md:w-1/2  flex flex-col">
        <h1 className=" text-white text-5xl font-my-font">
          Hi,
          <br />I am Kirthik Vaishnav A D
          <p className="text-2xl">I am a Full Stack Developer</p>
        </h1>
        <div className="flex py-10">
            <a className="pr-5 hover:text-white" href=""><AiOutlineGithub size={40}/></a>
            <a className="pr-5 hover:text-white" href=""><FaLinkedinIn size={40}/></a>
        </div>
      </div>
      
      <img className="md:w-1/3 " src={HeroImg} />
    </section>
  );
}

export default Hero;
