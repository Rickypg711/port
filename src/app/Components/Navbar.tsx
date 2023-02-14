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
      <div className="flex mt-3 items-center">
        <div className="ml-2 mr-6">
          <Link
            href="https://www.linkedin.com/in/ricardo-paredes-a2993a205/"
            className="text-teal-400 text-3xl"
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
        </div>
        <div className="mr-6">
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
      </div>
    </div>
  );
}
