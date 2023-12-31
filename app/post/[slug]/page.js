import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Footer,
} from "../../../components";
import { getPosts, getPostDetails } from "../../../services";
import { AdjacentPosts } from "../../../sections";

export default async function PostDetails({ params }) {
  const post = await getPostDetails(params.slug);

  return (
    <>
      <div className="container mx-auto px-5 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export const revalidate = 60;

// Fetch data at build time

//export async function getStaticProps({ params }) {
//const data = await getPostDetails(params.slug);
//return {
//props: {
//post: data,
//},
//};
//}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.

//export async function getStaticPaths() {
// const posts = await getPosts();
//return {
// paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
//fallback: true,
// };
//}

