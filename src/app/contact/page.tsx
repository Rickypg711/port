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
      <div className="container">
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
        <div className="wrapper wf-section">
          <div className="section-left">
            <div className="content">
              <div className="header-mask my-14 lg:my-52 text-yellow-300 sm:mb-1 md:pt-10">
                <h1 className=" font- align-left transform -translate-y-2vh scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-0 preserve-3d text-center font-grandslang text-7xl leading-none">
                  Hello.
                </h1>
              </div>

              <div className="description-mask">
                <p className="description transform translate-y-0">
                  I can help design and build your next website. Let me know
                  what you need by filling in this quick{" "}
                  {/* <Link
                    href="https://forms.gle/1YAyDvxrKjayzvZy7"
                    target="_blank"
                    className="link text-pink-500"
                  >
                    website brief.
                  </Link> */}
                  <br />
                  <br />
                  Email: <br />
                  On the Internet: {/*  */}
                  {/* <div className="flex flex-row justify-center py-3 px-6 md:items-center md:justify-between">
                   
                  {/*  */}


                  
                  {/*  */}
                  <br />
                </p>
              </div>

              {/* link bottom */}
              <div className="pt-7 flex flex-col md:flex-row md:items-center md:justify-between">
            
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

            {/*  */}
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
