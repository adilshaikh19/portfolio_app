import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-white font-signature text-xl">Hii, I'm Adil Shaikh</p>
          <p className="text-4xl lg:text-6xl font-bold text-white">
            I am a Computer Science Student
          </p>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 year of experience building and designing data science solutions. Currently, I love to work on projects using technologies like Python, Tensorflow, and SQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 lg:w-1/2"
          />
        
        </div>
      </div>
    </div>
  );
};

export default Home;
