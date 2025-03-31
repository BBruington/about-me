export default function AboutMe() {
	return (
		<section className="flex flex-col lg:flex-row w-full bg-secondary-foreground p-10 rounded-md">
			{/* About Me */}
			<div className="ml-8 lg:w-1/3 border-b-2 lg:border-b-0 lg:border-r-2 border-primary p-5 text-white">
				<h2 className="text-primary/80 mb-3 text-3xl">About me</h2>

				<h3 className="text-primary/80 text-2xl mb-1">Synopsis</h3>
				<p className="text-white mb-5 leading-8">
					I am a full stack developer with experience building professional
					applications and working with other developers. I&apos;m an expert in
					what I know and am constantly seeking to expand my knowledge.
				</p>
				<h3 className="text-primary mb-3 text-2xl">Personal Projects</h3>
				<ul className="text-white space-y-2 list-disc ml-5">
					<h3 className="text-primary mb-1">
						<a
							aria-label="Discover Coffee"
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
							aria-label="Chains of Fate Trials"
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
				</ul>

				<h3 className="my-1 mt-2 text-xl text-primary">
				<a
						aria-label="Chameleon"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/Ionia-Devs/chameleon"
						className="underline hover:cursor-pointer hover:text-slate-500"
					>
						Chameleon
					</a> (Open Source)
				</h3>
				<p className="text-white mb-1 leading-8">
					Social Media App that connects photographers with cosplayers
				</p>
				<ul className="text-white space-y-2 list-disc ml-5">
					<li>Designed user settings ui with react-hook-form</li>
					<li>Automated Schema Updates to database using github actions</li>
				</ul>
			</div>

			{/* My Projects */}
			<div className="lg:w-1/3 border-b-2 lg:border-b-0 lg:border-r-2 border-primary p-5">
				<h2 className="text-primary/80 text-3xl mb-1">Experience</h2>
				<h3 className="my-1 mt-2 text-xl text-primary">
					Full-Stack Developer at Squared
				</h3>
				<p className="text-white mb-1 leading-8 ">
					Squared is a platform that streamlines product development with tools
					for task management, goal setting, and team collaboration.
				</p>
				<ul className="text-white space-y-2 list-disc ml-5">
					<li>
						Built a Prismic CMS library – Enabled 10+ editors to manage content
						efficiently.
					</li>
					<li>
						Optimized Dev Experience – Automated setup, cut onboarding time by
						20%, improved CI/CD.
					</li>
					<li>
						Improved UI Architecture – Standardized components, reducing dev
						time by 12%.
					</li>
				</ul>
				<h3 className="my-1 mt-2 text-xl text-primary">
					React Developer at DeveloperPro
				</h3>
				<p className="text-white mb-1 leading-8 ">
					Company that helps developers find jobs and connect with other
					developers.
				</p>
				<ul className="text-white space-y-2 list-disc ml-5">
					<li>
						Mentorship - directly mentored 3 junior developers, improving their
						skills
					</li>
					<li>
						Collaboration - actively collaborated with designers and developers
						to create a better user experience
					</li>
					<li>
						Created a robust component library that improved code modularity
					</li>
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
		</section>
	);
}
