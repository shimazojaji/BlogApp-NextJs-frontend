import BreadCrumbs from "@/ui/BreadCrumbs";
import CreatePostForm from "./_/CreatePostForm";


export default function Page() {
  return (
    <div>
        <BreadCrumbs
        breadcrumbs={[
            {
                label:"پست‌ها",
                href:"/profile/posts"
            }
            ,
            {
                label:"ایجاد پست",
                href:"/profile/posts/create",
                active:true,

            }
        ]}
        />
        <CreatePostForm/>
    </div>
  )
}

