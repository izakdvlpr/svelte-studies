import { error } from "@sveltejs/kit";

import { type Post, posts } from "../data";

export interface BlogSlugLoadData {
	post: Post;
}

export function load({ params }): BlogSlugLoadData {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) {
		throw error(404);
	}

	return {
		post,
	};
}
