import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import SocialLinkMobile from "./SocialLinkMobile";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-white font-signature text-xl">Hii, I'm Adil Shaikh</p>
          <p className="text-4xl lg:text-6xl font-bold text-white">
            I am a FullStack Developer
          </p>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, NodeJs and MongoDb.
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
          <div className="flex flex-col">
           <SocialLinkMobile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
