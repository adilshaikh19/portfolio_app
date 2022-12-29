import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className='overflow-clip'>
        
        <p className="text-xl mt-20">
        As a computer science student, I am highly motivated to learn and grow as a developer. I am constantly seeking new challenges and opportunities to apply my skills and knowledge in real-world settings. I am a team player and enjoy collaborating with others to find creative solutions to complex problems. 
        </p><br></br>
        <p className="text-xl">
        I am dedicated to creating innovative solutions and delivering high-quality products. My passion for coding and problem-solving drives me to continuously improve my skills and stay up-to-date on the latest technologies. I value collaboration and believe that great things can be achieved through teamwork. Whether I'm working on a personal project or a client project, I always strive for excellence and aim to exceed expectations
        </p>

        <br />
        </div>
      </div>
    </div>
  )
}

export default About