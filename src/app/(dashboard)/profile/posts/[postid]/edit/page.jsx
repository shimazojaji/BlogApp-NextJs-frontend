import { getPostById } from "@/services/postServices";
import BreadCrumbs from "@/ui/BreadCrumbs";
import CreatePostForm from "../../create/_/CreatePostForm";
import NotFound from "./not-found";

async function EditPage({ params }) {
  const { postid: postId } = params;
  const { post } = await getPostById(postId);

  if (!post) {
    NotFound();
  }

  return (
    <div>
      <BreadCrumbs
        breadcrumbs={[
          {
            label: "پست‌ها",
            href: "/profile/posts",
          },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post} />
    </div>
  );
}
export default EditPage;
