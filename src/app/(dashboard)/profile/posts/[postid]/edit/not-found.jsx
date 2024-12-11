import React from "react";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
  
      <p> پستی با این مشخصات پیدا نشد</p>
      <link
        href="/profile/posts"
        className="mt-4 rounded-md bg-primary-500 px-4 py-2 text-sm text-white transition-colors hover:bg-primary-100"
      >
        برگشت
      </link>
    </main>
  );
}
