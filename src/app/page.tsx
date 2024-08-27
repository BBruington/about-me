import { Github, Linkedin, PhoneIcon } from "lucide-react";
import ContactForm from "@/components/contactMe";

import AboutMe from "@/components/aboutMe";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-between bg-foreground rounded-lg m-0 sm:m-12">
        <header className="w-full flex bg-secondary-foreground p-3 mt-5 mb-8 rounded-xl">
          <div className="flex flex-col sm:flex-row justify-between w-full">
            <div className="text-white w-full lg:w-1/2">
              <h1 className="text-[70px] text-center sm:text-left text-primary">
                Benjamin Bruington
              </h1>
              <h2 className="text-3xl text-center sm:text-left italic font-thin">
                Full-Stack Web Developer
              </h2>
            </div>
            <div className="flex flex-col text-right rounded-lg pl-10 p-5">
              <dl className=" text-base text-slate-300">
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex justify-center sm:justify-end">
                    <span className="mr-2">bibruington@gmail.com</span>
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex justify-center sm:justify-end">
                    <span className="ml-3 mr-2">(386) 225-1574</span>
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Postal address</dt>
                  <dd className="flex justify-center sm:justify-end">
                    <p>72903, Fort Smith, AR</p>
                  </dd>
                </div>
                <div className="mt-2">
                  <dt className="sr-only">Resume</dt>
                  <dd className="flex justify-center sm:justify-end">
                    <Link
                      href="/Benjamin's Resume.pdf"
                      download
                      className="mr-2 text-primary font-bold hover:underline"
                    >
                      Download Resume
                    </Link>
                  </dd>
                </div>
              </dl>
              <div className="flex mt-2 space-x-6 items-center justify-center text-white">
                <a
                  target="_blank"
                  href="https://github.com/BBruington"
                  className="hover:text-slate-400 hover:cursor-pointer shadow-lg hover:bg-slate-500/50 bg-slate-400/50 rounded-full p-1"
                >
                  <Github />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/benjamin-bruington-096220238/"
                  className="hover:text-slate-400 hover:cursor-pointer shadow-lg hover:bg-slate-500/50 bg-slate-400/50 rounded-full p-1"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </header>

        <AboutMe />
        <ContactForm />
      </main>
    </>
  );
}
