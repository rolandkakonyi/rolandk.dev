export interface ExperienceItem {
	company: string;
	role: string;
	location: string;
	dates: string;
	bullets: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
	{
		company: 'Bitmovin',
		role: 'Senior Software Engineer',
		location: 'Vienna, Austria',
		dates: 'Apr 2020 – Present',
		bullets: [
			'Contribute across feature design, implementation, and production support for Bitmovin AI Scene Analysis (video recognition/segmentation workflows).',
			'Develop and optimize Bitmovin Video Player solutions for Apple platforms (iOS/tvOS/watchOS), with a focus on stability, performance, and integration quality.',
			'Lead the React Native Player SDK to reduce integration effort for app teams and keep feature parity with native player capabilities.',
			'Subject matter expertise in HLS and FairPlay Streaming integrations.',
		],
	},
	{
		company: 'Mimo',
		role: 'iOS Developer',
		location: 'Vienna, Austria',
		dates: 'Jun 2019 – Mar 2020',
		bullets: [
			'Delivered iOS features end-to-end with an emphasis on maintainability and user experience.',
			'Partnered with product and design to iterate quickly while keeping quality high.',
		],
	},
	{
		company: 'E2 Communications GmbH',
		role: 'Mobile Application Developer',
		location: 'Vienna, Austria',
		dates: 'Aug 2014 – May 2019',
		bullets: [
			'Owned iOS app development from technical design through App Store release.',
			'Built a custom in-house push notification stack (sole contributor) serving web, iOS, and Android applications across multiple products.',
			'Supported Android development and Play Store publishing.',
			'Reduced operational friction by building deployment/CI automation and internal tooling across iOS, Android, Bash, and web.',
			'Onboarded and mentored junior developers (Git, clean code, debugging, agile practices).',
			'Coordinated development with an external contractor team (1 year) on a product with social, community, and gamification features.',
		],
	},
	{
		company: 'Webstar Csoport Kft.',
		role: 'iOS/Android Developer',
		location: 'Pécs, Hungary',
		dates: 'Nov 2012 – May 2014',
		bullets: [
			'Developed Android applications (Java/C/C++) and iOS applications (Objective‑C/Objective‑C++/C/C++).',
			'Built interactive EPUB3 content for iBooks.',
			'Worked on cross-platform mobile games using the Cocos2d‑x engine.',
		],
	},
	{
		company: 'Webstar Csoport Kft.',
		role: 'Software Developer',
		location: 'Pécs, Hungary',
		dates: 'Jan 2011 – Oct 2012',
		bullets: [
			'Built and maintained web applications and services (PHP/HTML5).',
			'Designed and managed SQL and NoSQL databases.',
			'Maintained Linux servers and supported production deployments.',
		],
	},
];
