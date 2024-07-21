import { useRef } from 'react';
import BlogCard from './card';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { title } from 'process';

interface Blog {
  type: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  slug: string;
}

interface BlogCarouselProps {
  blogs: Blog[];
}

const BlogCarousel = ({ blogs }: BlogCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      carouselRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden pt-10">
      <h1 className=' absolute top-0 text-xl'>Blog</h1>
      <div 
        ref={carouselRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide no-scrollbar overscroll-y-none py-4 pl-4"
        style={{ scrollSnapType: 'x proximity' }}
      >
        {blogs.map((blog : any) => (
          <div
            key={blog.slug}
            className="flex-shrink-0 w-72 h-96" // Adjust width and height as needed
            style={{ scrollSnapAlign: 'start' }}
          >
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
      <div className=' absolute flex-row flex top-6 right-4 gap-x-2'>
        <button
          onClick={() => scroll('left')}
          className=" transform -translate-y-1/2 bg-white/50 rounded-full p-1 focus:outline-none"
        >
          <ChevronLeftIcon className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="transform -translate-y-1/2 bg-white/50 rounded-full p-1 focus:outline-none"
        >
          <ChevronRightIcon className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default BlogCarousel;