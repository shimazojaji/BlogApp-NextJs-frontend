import Table from "@/ui/Table";
import PostRow from "./PostRow";
import { getPosts } from "@/services/postServices";

const { default: Empty } = require("@/ui/Empty");

async function PostTable({query=""}) {
  const {posts} = await getPosts(query);
  if (!posts.length) return <Empty resourceName={"پستی"} />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>دسته‌بندی</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post, index) => (
          <PostRow key={post._id} post={post} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default PostTable;
