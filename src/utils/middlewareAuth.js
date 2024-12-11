export default async function middlewareAuth(req) {
  const accessToken = req.cookies.get("accessToken");
  const refreshToken = req.cookies.get("refreshToken");
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie:
        `${accessToken?.name}=${accessToken?.value
        }; ${refreshToken?.name}=${refreshToken?.value
        }`,
    },
  };

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    options
  )
    .then((res) => res.json())
    .then((res) => res.data);
  console.log(data)
  const { user } = data || {};
  return user;
}