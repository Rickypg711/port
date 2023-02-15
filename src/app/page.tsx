import Link from "next/link";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div >
        <div className="block pb-8 relative z-20">
      <Navbar />
      {/*  */}
      <section className="topHero pt-12 leading-7 px-5 text-center">
        <div className="content content-main">
          <div className="header-mask">
            <h1 className="header-my-name text-2xl pb-4 ">Ricardo Paredes</h1>
          </div>
          <div className="description-mask">
            <p className="description transform ">
              front end developer and aztec warrior
              milo sucks
              <br />
            </p>
          </div>
          <div className="description-mask">
            <p className="description transform">
              Currently the boss at <br /><Link href="https://www.lasvegas.com/" target="_blank" className="cursor-pointer text-teal-400">
                 Las vegas
              </Link>
              <br />
            </p>
          </div>
        </div>
      </section>

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
