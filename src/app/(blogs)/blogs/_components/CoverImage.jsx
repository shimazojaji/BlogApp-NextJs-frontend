import Image from "next/image";
import Link from "next/link";

function CoverImage({ title, coverImageUrl, slug }) {
  return (
    <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-6">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          // sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          className=" object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
          quality={90}
        />
      </Link>
    </div>
  );
}
export default CoverImage;
