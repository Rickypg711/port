import Link from "next/link";
import {Montserrat, Playfair_Display,  } from '@next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  // variable: '--montserrat',
});

// fonts

const playFairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playFairDisplay',
});
export default function ComingSoon() {
  return (
    <div>

<div>
<div className="flex mt-3 items-center">
        <div className="ml-3 mr-7">
              <Link href="/" className={ `${playFairDisplay.className}  text-teal-200 text-xl hover:line-through decoration-violet-200 transition-all`}>
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
      <div className=" relative text-4xl md:text-4xl lg:text-7xl grid h-screen place-items-center  text-center m-auto bg-slate-800 text-violet-200 dark:bg-orange-200 dark:text-black">
        COMING SOON.......
      </div>
    </div>
  );
}
