import Head from "next/head";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <div>
      {/* <div className="flex mt-3 items-center">
        <div className="ml-2 mr-6">
          <Link
            href="https://www.linkedin.com/in/ricardo-paredes-a2993a205/"
            className="text-teal-400 text-3xl"
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
        </div> */}
        
        {/* <div className="mr-6">
          <Link
            href="https://twitter.com/Rickypg711"
            className="nav-left-link text-teal-400 text-3xl"
            target="_blank"
          >
            <AiFillTwitterCircle />
          </Link>
        </div>
        <div className="mr-6">
          <Link
            href="https://www.instagram.com/rickyparedess/"
            className="nav-left-link text-teal-400 text-3xl"
            target="_blank"
          >
            <AiFillInstagram />
          </Link>
        </div>
        <div className=" flex-grow h-px bg-gray-900 mx-auto"></div>
        <div className=" text-red-300">
          <div className="  ml-16 mr-3 text-teal-400 text-2xl">©/2022</div>
        </div>
      </div> */}

     {/* ?] */}
     <div>
     <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-2xl">
              Logo
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              // onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              {/* {isOpen ? <FaTimes /> : <FaBars />} */}
            </button>
          </div>
          <div className="hidden md:flex">
            <div className="flex items-center">
              <Link href="/" className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                  Home
                
              </Link>
              <Link href="/services" className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                  Services
                
              </Link>
              <Link href="/about" className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                  About
               
              </Link>
              <Link href="/contact" className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                  Contact
                
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3">
            <Link href="/">
              <a className="block font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                Home
              </a>
            </Link>
            <Link href="/services">
              <a className="block mt-1 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                Services
              </a>
            </Link>
            <Link href="/about">
              <a className="block mt-1 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="block mt-1 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                Contact
              </a>
            </Link>
          </div>
        </div>
      )} */}
    </nav>
     </div>
     {/*  */}
    </div>
  );
}
