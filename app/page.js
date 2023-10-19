import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t-4 pt-8 border-grey-950">
        <div className="lg:col-span-9 grid xl:grid-cols-2 gap-8 col-span-1 bg-white shadow-lg rounded-lg">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-3 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 60;
