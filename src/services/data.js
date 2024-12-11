import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./authService";
import { getPosts } from "./postServices";
import { getAllCommentsApi } from "./commentService";

export async function fetchCardData() {
    const cookieStore = cookies();
    const options = setCookieOnReq(cookieStore)
    // await new Promise (resolve=>setTimeout(resolve,3000))
    try {
        const data = await Promise.all([
            getAllUsersApi(options),
            getAllCommentsApi(options),
            getPosts()
        ]);
        const numberOfUsers = Number(data[0].users.length ?? "0");
        const numberOfPosts = Number(data[2].posts.length ?? "0");
        const numberOfComments = Number(data[1].commentsCount ?? "0");
        return {
            numberOfComments,
            numberOfPosts,
            numberOfUsers
        };

    } catch (error) {

        console.error( error.response.data.message); // Improved error handling
        throw new Error ("خطا در بارگذاری اطلاعات")
    }

}

// export async function fetchLatestPosts(){
//     try {
//      const posts=await getPosts("sort=latest&limit=5");
//      return posts;   
//     } catch (error) {
//         throw new Error (error?.response?.data?.message)
//     }
// }