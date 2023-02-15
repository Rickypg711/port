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
              <Link href="/" className="text-teal-400 text-3xl">
                HOME
              </Link>
            </div>
            <div className="nav-line is-pink"></div>
            <div className=" flex-grow h-px bg-gray-900 mx-auto"></div>
            <div className="nav-left-item nav-copyright">
              <div className=" ml-7 mr-3 text-teal-400 text-2xl">©/2022</div>
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
                  Email:{" "}
               
                  <br />
                  On the Internet: {/*  */}
                  {/* <div className="flex flex-row justify-center py-3 px-6 md:items-center md:justify-between">
                    <div className="mr-6">
                      <Link
                        href="https://www.linkedin.com/in/ricardo-paredes-a2993a205/"
                        className=" text-teal-400 hover:text-blue-200 text-3xl transition-all"
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
                  </div> */}
                  {/*  */}

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* <Link
              href=""
              rel="noopener noreferrer"
              target="_blank"
              className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 py-3 px-6 text-center text-white font-bold rounded-lg bg-blue-600 hover:bg-blue-700 transition-all"
            >
              Follow me on Twitter
            </Link> */}
            <Link
              href="mailto:paredesricardog@gmail.com"
              className="w-full md:w-auto py-3 px-6 text-center text-gray-700 font-bold rounded-lg border border-gray-400 hover:border-blue-600 transition-all"
            >
              Get in touch
            </Link>
            {/*  */}

            <div className="flex flex-row justify-center py-3 px-6 md:items-center md:justify-between">
              <div className="mr-6">
                <Link
                  href="https://www.linkedin.com/in/ricardo-paredes-a2993a205/"
                  className=" text-teal-400 hover:text-blue-200 text-3xl transition-all"
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
            </div>

            {/*  */}
          </div>

                  {/*  */}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
