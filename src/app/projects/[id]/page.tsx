'use server';

interface Post {
  id: string;
  title: string;
}

interface PostProps {
  post: Post;
}

// Use generateStaticParams to replace getStaticPaths
export async function generateStaticParams() {
  const posts: Post[] = [
  ];

  return posts.map((post) => ({
    id: post.id,
  }));
}

// Use a dynamic segment to fetch data based on `id`
export default async function PostPage({ params }: { params: { id: string } }) {
  const posts: Post[] = [
  ];

  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>Post ID: {post.id}</p>
    </>
  );
}
