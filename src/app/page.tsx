import { Github, Linkedin } from "lucide-react";
import ContactForm from "@/components/contactMe";

import AboutMe from "@/components/aboutMe";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-between bg-foreground rounded-lg m-0 sm:m-12">
        <header className="w-full flex self-center bg-secondary-foreground p-3 mt-5 rounded-xl">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="text-white w-full lg:w-1/2">
              <h1 className="text-[70px] text-primary">Benjamin Bruington</h1>
              <h2 className="text-3xl italic font-thin">
                Full-Stack Web Developer
              </h2>
            </div>
          </div>
        </header>

        <ContactForm />
        <AboutMe />

      </main>
    </>
  );
}
