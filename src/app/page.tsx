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
      <section className="bottom">
      <div className="section-right">
      <div className="nav">
        <div className="nav-item">
          <a href="/work" className="nav-link" data-w-id="85d26124-a07a-0189-15d9-074cdc5da320">Work</a>
          <div className="nav-underline" data-w-id="0c6f66a3-df45-8c28-3b45-4cb00dc90a70"></div>
        </div>
        <div className="nav-item">
          <a href="/about" className="nav-link" data-w-id="462a282a-3c93-b2c2-4bc4-1c45b323fa3f">About</a>
          <div className="nav-underline" data-w-id="0ee3525f-5420-fd26-63a6-43019d96aacd"></div>
        </div>
        <div className="nav-item">
          <a href="/contact" className="nav-link" data-w-id="3006e0ba-b29c-1f44-16fa-9f2df904cb4d">Contact</a>
          <div className="nav-underline" data-w-id="1f20fda9-810a-dac8-bc48-c04ef1ba5f25"></div>
        </div>
      </div>
    </div>

      </section>

    </div>
  );
}
