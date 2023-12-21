export default function AboutMe() {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-secondary-foreground p-10 rounded-md">

      {/* About Me */}
      <div className="ml-8 lg:w-1/3 border-b-2 lg:border-b-0 lg:border-r-2 border-primary p-5">
        <h2 className="text-primary mb-3 text-3xl">About me</h2>
        <h3 className="text-primary mb-1">Synopsis</h3>
        <p className="text-white mb-5 leading-8">
          I am a full stack developer with experiance building apps and
          coaberating with senior developers. I&apos;m searching for an junior
          developer role and I excel with communication and front-end
          development.
        </p>
        <h3 className="text-primary mb-1">Experience</h3>
        <p className="text-white mb-5 leading-8">
          I&apos;ve built the D&D Social media app <span> </span>
          <a
            target="_blank"
            href="https://quest-bazaar.vercel.app"
            className="underline hover:cursor-pointer hover:text-slate-500"
          >
            Quest Bazaar
          </a>
          <span> </span>and I&apos;ve experience teaching the fundementals of
          React and Nextjs. I work with senior developers daily and keep updated
          with the newest technologies.
        </p>

        <h3 className="text-primary mb-1">What I Enjoy</h3>
        <ul className="text-white space-y-2 list-disc ml-5">
          <li className="mt-2">Keeping up to date with new tech stacks</li>
          <li>Teaching / Being taught by others</li>
          <li>Building clean ui / code</li>
          <li>Traveling across the world</li>
          <li>Learning languages like German</li>
        </ul>
      </div>

      {/* My Projects */}
      <div className="lg:w-1/3 border-b-2 lg:border-b-0 lg:border-r-2 border-primary p-5">
        <h2 className="text-primary mb-3 text-3xl">What I Have Worked On</h2>
        <ul className="text-white space-y-2 list-disc ml-5">
          <h3 className="text-primary mb-1">
            <a
              target="_blank"
              href="https://quest-bazaar.vercel.app"
              className="underline hover:cursor-pointer hover:text-slate-500"
            >
              Quest Bazaar
            </a>
          </h3>
          <li className="mt-2">D&D social media app</li>
          <li className="mt-2">Find and schedule D&D sessions</li>
          <li className="mt-2">Advertise your game to find new players</li>
          <h3 className="text-primary mb-1"><a
            target="_blank"
            href="https://discover-coffee-sigma.vercel.app/"
            className="underline hover:cursor-pointer hover:text-slate-500"
          >
            Discover Coffee
          </a></h3>
          <li>Discover nearby coffee selling shops</li>
          <li>Uses Foursquare to geolocate nearby coffee shops</li>
          <h3 className="text-primary mb-1">
            <a
              target="_blank"
              href="https://discover-videos-one.vercel.app/"
              className="underline hover:cursor-pointer hover:text-slate-500"
            >
              Discover Videos
            </a>
          </h3>
          <li>Watch videos using the youtube api</li>
          <li>favorite and save videos to watch later</li>
          <li>uses magic auth for two factor authentication</li>
        </ul>
      </div>

      {/* My Skills */}
      <div className="flex flex-col lg:w-1/3 p-5">
        <h2 className="text-primary text-3xl">My Skills</h2>
        <div className="grid grid-cols-2 text-white mt-3 space-y-3">
          <span className="mt-3">Javascript</span>
          <span>Typescript</span>
          <span>Html / Css</span>
          <span>Nextjs</span>
          <span>React</span>
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
          <span>Foursquare</span>
          <span>Airtable</span>
          <span>Magic Auth</span>
          <span>Json web tokens</span>
          <span>Hasura cloud</span>
        </div>
      </div>
    </div>
  );
}
