import { Montserrat, Playfair_Display } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  // variable: '--montserrat',
});

// fonts

const playFairDisplay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playFairDisplay",
});

import Link from "next/link";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <div>
      <div className="container ">
        {/*  */}
        <div>
          <div className="flex mt-3 items-center">
            <div className="ml-3 mr-7">
              <Link
                href="/"
                className={`${playFairDisplay.className}  text-teal-200 text-xl hover:line-through decoration-violet-200 transition-all`}
              >
                RICARDO PAREDES
              </Link>
            </div>
            <div className="nav-line is-pink"></div>
            <div className=" flex-grow h-px bg-violet-200 mx-auto"></div>
            <div className="nav-left-item nav-copyright">
              <div className=" ml-7 mr-3 text-teal-200 text-xl">©/2023</div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>

      <section className=" bg-slate-800 pt-4 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1
            className={`${montserrat.className} text-8xl pt-5   text-teal-200  mb-5`}
          >
            Hello.
          </h1>
          <p className="text-violet-200  mb-8">
          <b
              className={`${playFairDisplay.className} font-bold text-teal-200`}
            >Lets Connect </b>
            I can help you 
            <b
              className={`${playFairDisplay.className} font-bold text-teal-200`}
            >
              {" "}
              design and build{" "}
            </b>
            your next website. Let me know what you need,  <br />
            <br/>
            <br/>
            <b
              className={`${playFairDisplay.className} font-bold text-teal-200`}
            >
            ARE YOU MINDING A PROJECT?
            
             </b>
            <br />
            <br />
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <Link
              href="mailto:paredesricardog@gmail.com"
              className={` ${playFairDisplay.className} w-full md:w-auto py-3 px-6 text-center text-teal-200 font-bold rounded-lg border-2 border-teal-200 hover:border-violet-200 transition-all hover:text-violet-200`}
            >
              Get in touch
            </Link>
          

              {/*  */}

        <div className="flex flex-row justify-center py-3 px-6 md:items-center md:justify-between">
          <div className="mr-6">
            <Link
              href="https://www.linkedin.com/in/ricardo-paredes-a2993a205/"
              className="text-teal-200 text-3xl hover:text-violet-200 transition-all"
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
          </div>

          <div className="mr-6">
            <Link
              href="https://twitter.com/Rickypg711"
              className="text-teal-200 text-3xl hover:text-violet-200 transition-all"
              target="_blank"
            >
              <AiFillTwitterCircle />
            </Link>
          </div>
          <div className="mr-6">
            <Link
              href="https://www.instagram.com/rickyparedess/"
              className="text-teal-200 text-3xl hover:text-violet-200 transition-all"
              target="_blank"
            >
              <AiFillInstagram />
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
