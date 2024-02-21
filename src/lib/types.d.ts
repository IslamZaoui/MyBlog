type Post = {
	slug: string;
	title: string;
	description: string;
	date: string;
	tags: string[];
	readingTime: { minutes: number; words: number };
	published: boolean;
	views: string;
};

type SearchPost = Post & {
	searchTerms: string;
};

type SearchStore = {
	data: SearchPost[];
	filtered: SearchPost[];
	search: string;
};
