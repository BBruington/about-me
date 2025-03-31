export default function AboutMe() {
	return (
		<div className="flex flex-col lg:flex-row w-full bg-secondary-foreground p-10 rounded-md">
			{/* About Me */}
			<div className="ml-8 lg:w-1/3 border-b-2 lg:border-b-0 lg:border-r-2 border-primary p-5 text-white">
				<h2 className="text-primary/80 mb-3 text-3xl">About me</h2>
				<h3 className="text-primary/80 text-2xl mb-1">Synopsis</h3>
				<p className="text-white mb-5 leading-8">
					I am a full stack developer with experiance building professional
					applications and working with other developers. I&apos;m an expert in
					what I know and am constantly seeking to expand my knowledge.
				</p>
				<h3 className="text-primary/80 text-2xl mb-1">Experience</h3>
				<h4 className="my-1 mt-2 text-xl text-primary">
					React Developer at Squared
				</h4>
				<p className="text-white mb-5 leading-8">
					I&apos;ve built intuitive, maintainable ui, Improved backend and
					developer workflow, and led agile meetings guiding developers on the
					scopw of the project.
				</p>

				<h3 className="text-primary/80 text-2xl mb-1">What I Enjoy</h3>
				<ul className="text-white space-y-2 list-disc ml-5">
					<li className="mt-2">Keeping up to date with new technologies</li>
					<li>Teaching / Being taught by others</li>
					<li>Traveling across the world</li>
					<li>Learning languages like German</li>
				</ul>
			</div>

			{/* My Projects */}
			<div className="lg:w-1/3 border-b-2 lg:border-b-0 lg:border-r-2 border-primary p-5">
				<h2 className="text-primary mb-3 text-3xl">Personal Projects</h2>
				<ul className="text-white space-y-2 list-disc ml-5">
					<h3 className="text-primary mb-1">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://quest-bazaar.vercel.app"
							className="underline hover:cursor-pointer hover:text-slate-500"
						>
							Quest Bazaar
						</a>
					</h3>
					<li className="mt-2">D&D social media app</li>
					<li className="mt-2">Find and schedule D&D sessions</li>
					<li className="mt-2">Advertise your game to find new players</li>
					<h3 className="text-primary mb-1">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://discover-coffee-sigma.vercel.app/"
							className="underline hover:cursor-pointer hover:text-slate-500"
						>
							Discover Coffee
						</a>
					</h3>
					<li>Discover nearby coffee selling shops</li>
					<li>Uses Foursquare to geolocate nearby coffee shops</li>
					<h3 className="text-primary mb-1">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://chains-of-fate-trials.vercel.app/"
							className="underline hover:cursor-pointer hover:text-slate-500"
						>
							Chains of Fate Trials
						</a>
					</h3>
					<li>Solve puzzles live with friends</li>
					<li>
						Mix and discover combinations of ingredients to craft magical
						potions
					</li>
					<li>Written in Typescript and React</li>
				</ul>
			</div>

			{/* My Skills */}
			<div className="flex flex-col lg:w-1/3 p-5">
				<h2 className="text-primary text-3xl">My Skills</h2>
				<div className="grid grid-cols-2 text-white mt-3 space-y-3">
					<span className="mt-3">Javascript</span>
					<span>Typescript</span>
					<span>Zod</span>
					<span>Html / Css</span>
					<span>Nextjs</span>
					<span>React</span>
					<span>React Hook Form</span>
					<span>React Query</span>
					<span>Trpc</span>
					<span>Redux</span>
					<span>Zustand</span>
					<span>Docker</span>
					<span>Storybook</span>
					<span>Tailwindcss</span>
					<span>Styled Components</span>
					<span>Shadcn</span>
					<span>Clerkjs</span>
					<span>Next Auth</span>
					<span>Postman</span>
					<span>Neon</span>
					<span>PostgreSQL</span>
					<span>Node js</span>
					<span>Primsa</span>
					<span>Drizzle</span>
					<span>Github Actions</span>
					<span>Git</span>
					<span>Prismic CMS</span>
					<span>Webhooks</span>
					<span>Web Sockets</span>
					<span>AWS</span>
					<span>Vercel</span>
					<span>Jest</span>
				</div>
			</div>
		</div>
	);
}
