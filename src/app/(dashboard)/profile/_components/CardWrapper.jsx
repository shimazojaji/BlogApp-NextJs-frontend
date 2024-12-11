import { fetchCardData } from "@/services/data";
import Card from "./Card";

async function CardWrapper() {
  const { numberOfComments, numberOfUsers, numberOfPosts } =
    await fetchCardData();
  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card title="کاربران" value={numberOfUsers} type="users" />
      <Card title="پست‌ها" value={numberOfPosts} type="posts" />
      <Card title="نظرات" value={numberOfComments} type="comments" />
    </div>
  );
}

export default CardWrapper;
