import React from 'react'
import { FaGithub , FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinkMobile = () => {
    const links = [
        {
            id: 1,
            child: (
              <>
                <FaLinkedin size={30} /> LinkedIn 
              </>
            ),
            href: "https://linkedin.com",
            
        },
        {
            id: 2,
      child: (
        <>
          <FaGithub size={30} /> GitHub 
        </>
      ),
      href: "https://github.com/adilshaikh19",
        },
        {
            id: 3,
            child: (
              <>
                <HiOutlineMail size={30} /> Mail 
              </>
            ),
            href: "mailto:foo@gmail.com",
        },
        { id: 4,
            child: (
              <>
                <BsFillPersonLinesFill size={30} /> Resume 
              </>
            ),
            href: "/resume.pdf",
            download: true,
        },
          
    ]

  return (
    <div className="inline-flex rounded-md shadow-sm lg:hidden md:hidden" role="group">
            {links.map(({id, child, href, style, download }) => (
                <button key={id} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
                </button>
              ))}
            
            
    </div>
  )
}

export default SocialLinkMobile