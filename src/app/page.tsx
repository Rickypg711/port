import Link from "next/link";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/*  */}
      <section className="topHero flex  pt-24 leading-7 px-5 text-center">
        <div className="content content-main">
          <div className="header-mask">
            <h1 className="header-my-name text-2xl pb-4 ">Ricardo Paredes</h1>
          </div>
          <div className="description-mask">
            <p className="description transform ">
              Strategic Product Designer and Webflow Developer
              <br />
            </p>
          </div>
          <div className="description-mask">
            <p className="description transform">
              Currently working as a Senior Product Designer at{"  "}
              <Link href="https://detail.co/" target="_blank">
                Detail Technologies
              </Link>
              <br />
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="bottom pt-16 ">
        <div className="section-right text-center">
          <div className="nav">
            {/* work */}
            <div className="nav-item">
              <Link 
              href="/work" 
              className="nav-link text-7xl">
                Work
              </Link>
            </div>

            {/* aboiut */}
            <div className="nav-item">
              <Link 
              href="/about" 
              className="nav-link text-7xl">
                About
              </Link>
            </div>

            {/* contact */}
            <div className="nav-item">
              <Link 
              href="/contact" 
              className="nav-link text-7xl">
                Contact
              </Link>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}
