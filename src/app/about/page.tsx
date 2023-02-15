import Link from "next/link";

export default function Home() {
  return (
    <div>

        <div>
        <div className="flex mt-3 items-center">
            <div className="ml-3 mr-7">
                <Link href="/" className="text-teal-400 text-3xl">HOME</Link>
                </div>
                <div className="nav-line is-pink">
                    </div>
                    <div className=" flex-grow h-px bg-gray-900 mx-auto"></div>
                    <div className="nav-left-item nav-copyright">
            <div className=" ml-7 mr-3 text-teal-400 text-2xl">©/2022</div></div></div>
        </div>


       

        {/*  */}
      <section className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold font-serif text-gray-900 dark:text-white mb-5">
            About Me
          </h1>
          <p className="text-gray-800 dark:text-gray-400 mb-8">
            Hey, Im Ricardo. Most folks know me as <b>aztec Warrior</b> online.
          </p>
          <div className="prose prose-gray dark:prose-white text-gray-800 dark:text-gray-400 mb-8">
            <p>
              Im currently the <b>VP of Developer Experience at my own thing</b>,
              where I lead our Developer Relations and Documentation teams. I
              focus on <b>educating and growing</b> communities.
            </p>

            <p>
              Im passionate about many creative pursuits, including cooking music,
              photography, and of course, coding. This combination
              of interests is what ultimately led me to my current path in
              building things as a developer in this communities.
            </p>
            <p>
              <b>I love</b> building for the web. From something as simple as a
              single HTML file – all the way to large Next.js applications. The
              web is incredible. Anyone can become a developer, writer, or
              creator – and no one has to ask for permission. You can just
              build.
            </p>
            <p>
              Outside of Web development, I <b>angel invest</b> in developer tools
              companies and <b>advise early-stage startups</b>. I also do
              Developer Relations consulting work, helping companies take their
              DevRel function from 0 to 1, or provide guidance on growing
              communities, content creation, and developer marketing.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <a
              href="https://twitter.com/leeerob"
              rel="noopener noreferrer"
              target="_blank"
              className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 py-3 px-6 text-center text-white font-bold rounded-lg bg-blue-600 hover:bg-blue-700 transition-all"
            >
              Follow me on Twitter
            </a>
            <a
              href="mailto:paredesricardog@gmail.com"
              className="w-full md:w-auto py-3 px-6 text-center text-gray-700 font-bold rounded-lg border border-gray-400 hover:border-blue-600 transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
