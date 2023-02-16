import Link from "next/link";
import Navbar from "./Components/Navbar";
import Image from "next/image";
import me from "../../public/IMG_0085.jpeg";
import { Montserrat, Playfair_Display } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  // variable: '--montserrat',
});

const playFairDisplay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  // variable: '--font-playFairDisplay',
});

{/* <Image
                alt="Ricardo Paredes"
                src={me}
                width="150"
                height="150"
                className="hidden md:block rounded-full object-cover grayscale"
              /> */}

export default function Home() {
  return (
    <div>
      <div className="block pb-8 relative z-20">
        <Navbar />
        {/*  */}



        {/*  */}
        <section className=" bg-slate-800 pt-4 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1
            className={`${playFairDisplay.className} pt-5 text-center text-3xl font-bold  text-violet-200  mb-5`}
          >
            Ricardo Paredes 
          </h1>
          <p className="text-violet-200  mb-8">
          Hey, Im Ricardo. Im a{" "}
                <b
                  className={`${playFairDisplay.className} font-bold text-teal-200`}
                >
                  Web Developer
                </b>{" "}
                striving to build a faster, accessible and more beautiful web.
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <Link
              href="mailto:paredesricardog@gmail.com"
              className={` ${playFairDisplay.className} w-full md:w-auto py-3 px-6 text-center text-teal-200 font-bold rounded-lg border-2 border-teal-200 hover:border-violet-200 transition-all hover:text-violet-200`}
            >
              Get in touch
            </Link>
          
          </div>
        </div>
      </section>

        {/*  */}







        {/*  */}

        {/*  */}
        <section className="bottom pt-5 pb-11 mb-2 ">
          <div className="section-right text-center mx-auto px-2">
            <div className="  ">
              {/* aboiut */}
              <div className=" py-2">
                <Link
                  href="/about"
                  className={`${playFairDisplay.className} text-7xl transition-all hover:line-through decoration-teal-200  decoration-2`}
                >
                  ABOUT
                </Link>
              </div>

              {/* work */}
              <div className="py-2">
                <Link
                  href="/projects"
                  className={`${playFairDisplay.className} text-7xl transition-all hover:line-through decoration-teal-200 decoration-2 `}
                >
                  PROJECTS
                </Link>
              </div>

              {/* contact */}
              <div className="py-2">
                <Link
                  href="/contact"
                  className={`${playFairDisplay.className} pt-4 text-7xl transition-all hover:line-through decoration-teal-200  decoration-2 `}
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
