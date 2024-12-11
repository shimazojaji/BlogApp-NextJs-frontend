import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";

// export const revalidate = 10;
// export const experimental_ppr = true; // STATIC + DYNAMIC => PPR

async function BlogPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);

  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const {posts} = await getPosts(queries, options);
  return <PostList posts={posts} />;
}
export default BlogPage;
