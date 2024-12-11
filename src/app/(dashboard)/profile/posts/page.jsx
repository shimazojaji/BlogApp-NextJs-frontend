import { Suspense } from "react";
import PostTable from "./_/componenets/PostTable";
import FallBack from "@/ui/FallBack";
import Search from "@/ui/Search";
import { CreatePost } from "./_/componenets/Buttons";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";
import { getPosts } from "@/services/postServices";

async function Page({ searchParams }) {
  const query = queryString.stringify(searchParams);
  const { totalPages } = await getPosts(query);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست پست‌ها</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<FallBack />} key={query}>
        <PostTable query={query} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Page;
