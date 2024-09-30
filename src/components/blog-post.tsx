'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { useTheme } from '@/context/themeContext';
import LoadingFallback from './loader-fallback';

interface BlogPostContentProps {
  slug: string;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ slug }) => {
  const { isDarkMode } = useTheme();
  const [blogPost, setBlogPost] = useState<{ title: string; Content: React.ComponentType } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        // Import the MDX file dynamically
        const modules = await import(`@/posts/blog/${slug}.mdx`);
        setBlogPost({
          title: modules.metadata?.title || slug,
          Content: modules.default, // Set the default export as a React component
        });
      } catch (error) {
        console.error(`Error loading blog post: ${slug}`, error);
        notFound();
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (isLoading) {
    return <LoadingFallback />;
  }

  if (!blogPost) {
    return notFound();
  }

  const { Content } = blogPost;

  return (
    <div className={`flex justify-center  min-h-screen`}>
      <div className="w-full max-w-3xl text-left">
        {/* Render the MDX content as a React component */}
        <Content />
      </div>
    </div>
  );
};

export default BlogPostContent;
