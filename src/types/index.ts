export interface PracticeArea {
	id: string;
	title: string;
	description: string;
	icon?: string;
}

export interface Testimonial {
	id: string;
	name: string;
	role: string;
	content: string;
	title: string;
}

export interface Attorney {
	id: string;
	name: string;
	position: string;
	specialization: string[];
	bio: string;
	image?: string;
}

export interface Statistic {
	id: string;
	value: number;
	suffix?: string;
	prefix?: string;
	label: string;
}

export interface FeatureCard {
	id: string;
	title: string;
	description: string;
	icon?: string;
}
