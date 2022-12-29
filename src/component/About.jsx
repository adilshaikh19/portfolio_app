import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit reiciendis nisi dignissimos dolores. Molestiae, tenetur eveniet animi harum eos, dignissimos, tempora aspernatur sequi reprehenderit cumque rerum voluptatem nostrum maxime culpa laudantium quos delectus a consectetur officiis aperiam eligendi nam repudiandae in? Unde accusantium nobis neque veritatis delectus sequi nam.
            </p>
            <br></br>
            <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores ut amet aspernatur qui. Laudantium, esse! Nostrum eligendi iste vitae, voluptas quia incidunt non nesciunt a dignissimos alias enim quidem quaerat cum vero veniam iusto aperiam! Doloremque architecto quo consequuntur rerum repudiandae dolorem? Dolore provident dolores placeat ex asperiores ut?</p>
        </div>
    </div>
  )
}

export default About