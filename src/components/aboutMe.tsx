export default function AboutMe() {
  return (
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
          I&apos;ve built the D&D Social media app <span> </span>
          <a
            target="_blank"
            href="https://quest-bazaar.vercel.app"
            className="underline hover:cursor-pointer hover:text-slate-700"
          >
            Quest Bazaar
          </a>
          <span> </span>and I&apos;ve experience teaching the fundementals of
          React and Nextjs. I coaberate and gain experience on a daily basis
          with senior developers and keep updated with the newest technologies.
        </p>
      </div>
    </div>
  );
}
