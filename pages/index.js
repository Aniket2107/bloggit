import Head from "next/head";
import { Categories, FeaturedPosts, PostCard, PostWidget } from "../components";

import { getPosts } from "../services";

// const posts = [
//   { title: "React testing", excerpt: "Learn react testing" },
//   { title: "React with Tailwind", excerpt: "Learn react with tailwind css" },
// ];

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Bloggit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  console.log("posts", posts);

  return {
    props: {
      posts,
    },
  };
}
