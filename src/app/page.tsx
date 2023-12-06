import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
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
          <a target="_blank" href="https://github.com/BBruington" className="hover:text-slate-700 hover:cursor-pointer"><Github /></a>
          <a target="_blank" href="https://www.linkedin.com/in/benjamin-bruington-096220238/" className="hover:text-slate-700 hover:cursor-pointer"><Linkedin /></a>
          <a target="_blank" href="https://quest-bazaar.vercel.app" className="hover:text-slate-700 hover:cursor-pointer">Quest Bazaar</a>
        </div>
      </div>
      <div className="flex w-full bg-secondary-foreground p-6 rounded-md">
        <div className="flex flex-col w-1/2">
          <h2 className="text-primary text-3xl">My Skills</h2>
          <div className="grid grid-cols-2 text-white mt-3 space-y-3 border-r-2 border-primary">
            <span className="mt-3">Javascript</span>
            <span>Typescript</span>
            <span>Html / Css</span>
            <span>Nextjs</span>
            <span>Tailwindcss</span>
            <span>Clerkjs</span>
            <span>Firebase</span>
            <span>Redux</span>
            <span>Styled Components</span>
            <span>Shadcn</span>
            <span>Postman</span>
            <span>MySql</span>
            <span>Primsa</span>
            <span>Planetscale</span>
            <span>Unsplash</span>
            <span>Trpc</span>
            <span>Sanity</span>
            <span>Next Auth</span>
            <span>Webhooks</span>
            <span>React Hot Toast</span>
            <span>Radix</span>
            <span>Zod</span>
            <span>Vercel</span>
            <span>Node js</span>
            <span>Git</span>
            <span>VSCode</span>
          </div>
        </div>
        <div className="ml-8 w-1/2">
          <h2 className="text-primary mb-3 text-3xl">About me</h2>
          <h3 className="text-primary mb-1">Synopsis</h3>
          <p className="text-white mb-2">
            I am a full stack developer with experiance building apps and
            coaberating with senior developers. I&apos;m searching for an junior
            developer role and I excel with communication and front-end
            development.
          </p>
          <h3 className="text-primary mb-1">Experience</h3>
          <p className="text-white">
            I&apos;ve built the D&D Social media app  <span> </span>
            <a target="_blank" href="https://quest-bazaar.vercel.app" className="underline hover:cursor-pointer hover:text-slate-700">Quest Bazaar</a>
            <span> </span>and I&apos;ve experience teaching the fundementals of React and Nextjs. I coaberate and gain experience on a daily basis
            with senior developers and keep updated with the newest technologies.
          </p>
        </div>
      </div>
    </main>
  );
}
