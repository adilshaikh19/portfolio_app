import React from "react";
import potato from "../assets/portfolio/potato.jpg";
import cartoon from "../assets/portfolio/cartoon.jpg";
import expenditure from "../assets/portfolio/expenditure.jpg";
import myportfolio from "../assets/portfolio/myportfolio.jpg";
import movies from "../assets/portfolio/movies.jpg";
import heart from "../assets/portfolio/heart.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: potato,
      title : "Potato Leaf Disease Classification",
      demo : 'https://github.com/adilshaikh19/Potato-Leaf-Disease-Classification',
      code : 'https://github.com/adilshaikh19/Potato-Leaf-Disease-Classification'
      
    },
    {
      id: 2,
      src: cartoon,
      title : "Cartoonify Image using CV",
      demo : 'https://github.com/adilshaikh19/cartoonified-Image',
      code : 'https://github.com/adilshaikh19/cartoonified-Image/tree/main/cartoon_image'
    },
    {
      id: 3,
      src: expenditure,
      title : "Expenditure Data Analysis",
      demo : 'https://github.com/adilshaikh19/Expenditure-Data-Analysis',
      code : 'https://github.com/adilshaikh19/Expenditure-Data-Analysis/tree/main/Expenditure%20Data%20Analysis'
    },
    {
      id: 4,
      src: myportfolio,
      title : "Portfolio App",
      demo : 'https://adilshaikh-portfolio.netlify.app/',
      code : 'https://github.com/adilshaikh19/portfolio_app'
    },
    {
      id: 5,
      src: movies,
      title : "Movie Search-Reactjs",
      demo : 'https://github.com/adilshaikh19/movie_search-reactjs',
      code : 'https://github.com/adilshaikh19/movie_search-reactjs'
    },
    {
      id: 6,
      src: heart,
      title : "Heart Disease Prediction - ML",
      demo : 'https://github.com/adilshaikh19/Heart-Disease-Prediction---Streamlit-WebApp',
      code : 'https://github.com/adilshaikh19/Heart-Disease-Prediction---Streamlit-WebApp'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-center">
          {portfolios.map(({ id, src ,title ,demo, code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
              
                <img
                  src={src}
                  alt=""
                  className="rounded-md"
                />
                <p className="bg-gradient-to-r from-gray-400 to-black-400 rounded-bl-sm text-black font-semibold">{title}</p>
              <div className="flex items-center justify-center">
                
                <a href={demo} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button></a>
                <a href={code} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code 
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Portfolio