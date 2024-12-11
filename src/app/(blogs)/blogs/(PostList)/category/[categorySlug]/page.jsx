import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";
async function Category({ params, searchParams }) {
  const { categorySlug } = params;

  const queries = `${queryString.stringify(
    searchParams
  )}&categorySlug=${categorySlug}`;
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const {posts} = await getPosts(queries, options);
  const { search } = searchParams;

  return (
    <div>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0 ? (
            <p className="text-lg text-secondary-600">{`هیچ پستی با این مشخصات یافت نشد`}</p>
          ) : (
            `نشان دادن ${posts.length} نتیجه برای`
          )}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </div>
  );
}
export default Category;
