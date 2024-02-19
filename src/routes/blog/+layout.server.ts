import { type Post, posts } from "./data";

export interface BlogLoadData {
	posts: Pick<Post, "slug" | "title">[];
}

export function load(): BlogLoadData {
	return {
		posts: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
		})),
	};
}
