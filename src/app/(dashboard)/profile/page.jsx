import { Suspense } from "react";
import PostTable from "./posts/_/componenets/PostTable";
import CardWrapper from "./_components/CardWrapper";
import FallBack from "@/ui/FallBack";

async function Profile() {
  return (
    <div>
      <h1 className="text-xl mb-8 text-secondary-700">داشبورد</h1>
      <Suspense fallback={<FallBack />}>
        <CardWrapper />
      </Suspense>
      <h2 className="text-xl mb-4 text-secondary-600">آخرین پست‌ها</h2>
      <Suspense fallback={<FallBack />}>
        <PostTable query="sort=latest&limit=5" />
      </Suspense>
    </div>
  );
}
export default Profile;
