import Link from "next/link";
import Navbar from "./Components/Navbar";
import Image from "next/image";
import me from "../../public/IMG_0085.jpeg"

export default function Home() {
  return (
    <div >
        <div className="block pb-8 relative z-20">
      <Navbar />
      {/*  */}
                                                                 {/* leading-7 */}

<section className="topHero bg-white dark:bg-gray-900 py-8 md:py-16  px-5 text-center">
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="header-mask">
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 dark:text-white mb-6" >
                Ricardo Paredes
                </h1>
          </div>
                {/* <Image alt="Ricardo Paredes" src={me} width="150" height="150" className="rounded-full object-cover"/> */}

          <div className="flex items-center space-x-4 md:space-x-8 mb-6 md:mb-8">
                    <Image alt="Ricardo Paredes" src={me} width="150" height="150" className="hidden md:block rounded-full object-cover grayscale"/>

          <p className="text-gray-800 dark:text-white text-lg font-medium max-w-lg">Hey, Im Ricardo. Im a <b>Web Developer</b> striving to build a faster, accessible and more beautiful web.</p>

          </div>
          {/* <div className="description-mask">
            <p className="description transform">
              Currently the boss at <br /><Link href="https://www.lasvegas.com/" target="_blank" className="cursor-pointer text-teal-400">
                 Las vegas
              </Link>
              <br />
            </p>
          </div> */}
        </div>
    </section>
{/*  */}

      {/* <section className="bg-white dark:bg-gray-900 py-8 md:py-16">
  <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
    <h1 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 dark:text-white mb-6">
        Lee Robinson</h1>
    <div className="flex items-center space-x-4 md:space-x-8 mb-6 md:mb-8">
      <Image alt="Ricardo Paredes" src={me} width="150" height="150" className="rounded-full object-cover"/>
      <p className="text-gray-800 dark:text-white text-lg font-medium max-w-lg">Hey, Im Lee. Im the <b>VP of Developer Experience at Vercel</b> where my team helps developers build a faster web.</p>
    </div>
  </div>
</section> */}


      {/*  */}
      <section className="bottom pt-11 pb-11 mb-2">
        <div className="section-right text-center">
          <div className="nav">
            

            {/* aboiut */}
            <div className="nav-item">
              <Link 
              href="/about" 
              className="nav-link text-7xl">
                About
              </Link>
            </div>

            {/* work */}
            <div className="nav-item">
              <Link 
              href="/work" 
              className="nav-link text-7xl text-green-300">
                Work
              </Link>
            </div>

            {/* contact */}
            <div className="nav-item">
              <Link 
              href="/contact" 
              className="nav-link text-7xl  text-red-300 ">
                Contact
              </Link>
            </div>


          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
