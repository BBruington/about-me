import { Github, Linkedin } from "lucide-react";
import ContactForm from "@/components/contactMe";

import AboutMe from "@/components/aboutMe";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-between bg-foreground rounded-lg m-12">
        <header className="w-full flex self-center bg-secondary-foreground p-3 m-5 rounded-xl">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="text-white w-full lg:w-1/2">
              <h1 className="text-[70px] text-primary">Benjamin Bruington</h1>
              <h2 className="text-3xl italic font-thin">
                Full-Stack Web Developer
              </h2>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center my-6">
          <div className="text-white flex space-x-5">
            <a
              target="_blank"
              href="https://github.com/BBruington"
              className="hover:text-slate-700 hover:cursor-pointer"
            >
              <Github />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/benjamin-bruington-096220238/"
              className="hover:text-slate-700 hover:cursor-pointer"
            >
              <Linkedin />
            </a>
            <a
              target="_blank"
              href="https://quest-bazaar.vercel.app"
              className="hover:text-slate-700 hover:cursor-pointer"
            >
              Quest Bazaar
            </a>
          </div>
        </div>

        <AboutMe />

        <ContactForm />
      </main>
    </>
  );
}
