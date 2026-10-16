export interface ContactLink {
	label: string;
	href: string;
}

export interface Education {
	school: string;
	location: string;
	degree: string;
	graduation: string;
}

export interface SkillGroup {
	category: string;
	items: string[];
}

export interface Experience {
	role: string;
	organization: string;
	start: string;
	end: string;
	location: string;
	highlights: string[];
}

export interface Resume {
	name: string;
	contact: ContactLink[];
	education: Education[];
	skills: SkillGroup[];
	work: Experience[];
	projects: Experience[];
}

export const resume: Resume = {
	name: 'Reuben Clemens',
	contact: [
		{ label: 'rc3299@drexel.edu', href: 'mailto:rc3299@drexel.edu' },
		{
			label: 'linkedin.com/in/reubenclemens',
			href: 'https://linkedin.com/in/reuben-clemens-a136a8269'
		},
		{ label: 'reubenkimclemens.com', href: 'https://reubenkimclemens.com/' }
	],
	education: [
		{
			school: 'Drexel University',
			location: 'Philadelphia, PA',
			degree: 'B.S. in User Experience & Interaction Design',
			graduation: 'Anticipated Graduation: June 2027'
		}
	],
	skills: [
		{
			category: 'Programming Languages',
			items: ['Python', 'JavaScript', 'PHP', 'SQL', 'HTML5', 'CSS3', 'Swift']
		},
		{
			category: 'Software',
			items: [
				'Figma',
				'Unity',
				'WordPress',
				'VSCode',
				'Adobe Photoshop',
				'Adobe After Effects',
				'Microsoft Office Suite'
			]
		},
		{
			category: 'Design Skills',
			items: [
				'Responsive web design',
				'Micro-interactions',
				'Mobile app design & development',
				'Database creation',
				'Wireframing',
				'Prototyping',
				'Usability testing',
				'Journey mapping'
			]
		}
	],
	work: [
		{
			role: 'Web Designer',
			organization: 'Summer Salt Restaurant',
			start: 'March 2024',
			end: 'May 2024',
			location: 'Avalon, NJ',
			highlights: [
				'Redesigned 5+ key components in Figma including pop-up menus for restaurant website, advocating for user-friendly designs and following web design conventions',
				'Coordinated with business owners to review progress, adapting to critiques and reflecting feedback efficiently into the proposed designs'
			]
		},
		{
			role: 'UX Designer',
			organization: 'MentoMind',
			start: 'May 2025',
			end: 'Sept. 2025',
			location: 'Warrington, PA',
			highlights: [
				'Developed an interactive prototype in Figma to communicate the product vision given by the employers, aligned with their business goals',
				'Redesigned in Figma key interface elements to highlight MentoMind’s three main USPs by improving clarity and engagement'
			]
		}
	],
	projects: [
		{
			role: 'Front-end Developer',
			organization: 'Drexel University',
			start: 'September 2024',
			end: 'Present',
			location: 'Philadelphia, PA',
			highlights: [
				'Collaborating in cross-functional team of project manager, 3 UX designers, and 1 back-end developer to build a functional mobile app for local food truck, including creating database schema for the project',
				'Utilizing HTML5 and CSS3 in VSCode to create a style guide page of components and micro-interactions, as well as mobile screens including home, food, cart, and order pages',
				'Employed variables and components in Figma to create fully interactive prototype with micro-interactions, allowing users to seamlessly select and customize menu items',
				'Engaged in 5+ usability testing sessions, conducted ethnographic research, and engaged in affinity mapping and journey mapping with team to create customer-centric wireframes and prototypes'
			]
		},
		{
			role: 'Web Developer',
			organization: 'Drexel University',
			start: 'September 2024',
			end: 'Present',
			location: 'Philadelphia, PA',
			highlights: [
				'Produced a responsive, data-driven recipe website with HTML5, CSS3, and PHP, allowing users to search through 30+ recipes',
				'Created database to organize content through Excel and SQL, developing micro-interactions with CSS3 for a consistent user experience',
				'Ensured secure handling of data with validated inputs and database connections, applying best practices in server-side scripting to create a scalable and maintainable application',
				'Integrated style guide to implement cohesive color scheme and typography, creating wireframes with engaging UI'
			]
		}
	]
};
