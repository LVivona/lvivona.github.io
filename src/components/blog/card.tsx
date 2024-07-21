import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  type: string;
  src: string;
  alt: string;
  height: number;
  width: number;
  description: string;
  slug: string;
  title : string;
}

const BlogCard = ({ type, src, alt, height, width, description, slug, title }: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="relative rounded-lg overflow-hidden group">
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          className="rounded-lg opacity-70 transform transition duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {type}
        </div>
        <div className="absolute left-0 bottom-1 w-full text-left transition-opacity duration-300 ">
          <p className="text-white font-semibold text-md px-4 py-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;