import React from "react";

interface Post {
  title: string;
  slug: string;
  date: string;
  description: string;
  author: string;
}

interface LatestPostsProps extends NoChildren<BasicProps<HTMLUListElement>> {
  posts: Post[];
}

const LatestPosts: React.FC<LatestPostsProps> = (props) => {
  const { posts, extraClasses, ...rest } = props;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>{post.title}</li>
      ))}
    </ul>
  );
};

export default LatestPosts;
