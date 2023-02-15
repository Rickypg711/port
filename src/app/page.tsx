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

export default function Home() {
  return (
    <div>
      <div className="block pb-8 relative z-20">
        <Navbar />
        {/*  */}
        {/* leading-7 */}

        <section className=" py-8 md:py-16  px-5 text-center">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="header-mask">
              <h1
                className={` ${playFairDisplay.className} text-3xl md:text-4xl font-bold  mb-6`}
              >
                Ricardo Paredes
              </h1>
            </div>

            <div className="flex items-center space-x-4 md:space-x-8 mb-6 md:mb-8">
              <Image
                alt="Ricardo Paredes"
                src={me}
                width="150"
                height="150"
                className="hidden md:block rounded-full object-cover grayscale"
              />

              <p className=" text-lg font-medium max-w-lg">
                Hey, Im Ricardo. Im a{" "}
                <b
                  className={`${playFairDisplay.className} font-bold text-teal-200`}
                >
                  Web Developer
                </b>{" "}
                striving to build a faster, accessible and more beautiful web.
              </p>
            </div>
          </div>
        </section>
        {/*  */}

        {/*  */}
        <section className="bottom pt-5 pb-11 mb-2 ">
          <div className="section-right text-center mx-auto px-2">
            <div className="  ">
              {/* aboiut */}
              <div className=" py-2">
                <Link
                  href="/about"
                  className={`${playFairDisplay.className} text-7xl transition-all hover:line-through decoration-teal-200 `}
                >
                  ABOUT
                </Link>
              </div>

              {/* work */}
              <div className="py-2">
                <Link
                  href="/projects"
                  className={`${playFairDisplay.className} text-7xl transition-all hover:line-through decoration-teal-200 `}
                >
                  PROJECTS
                </Link>
              </div>

              {/* contact */}
              <div className="py-2">
                <Link
                  href="/contact"
                  className={`${playFairDisplay.className} pt-4 text-7xl transition-all hover:line-through decoration-teal-200 `}
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
