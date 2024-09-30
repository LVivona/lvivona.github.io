
import fs from 'fs'
import path from 'path';
import BlogPostContent from '@/components/blog-post';
import Navbar from '@/components/navbar';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  
  return (
    <main className='dark:bg-black bg-white'>
    <article className="max-w-4xl mx-auto py-7 overscroll-none space-y-10">
        <Navbar visibleDelay={100}/>
        <BlogPostContent slug={params.slug} />
    </article>
    </main>
  );
}

export function generateStaticParams() {
  // This function remains the same as in your original code
  const BLOG_DIR = path.join(process.cwd(), 'src', 'posts', 'blog');
  const filenames = fs.readdirSync(BLOG_DIR);
  return filenames
    .filter((filename : string) => filename.endsWith('.mdx'))
    .map((filename : string) => ({
      slug: filename.replace(/\.mdx$/, ''),
    }));
}