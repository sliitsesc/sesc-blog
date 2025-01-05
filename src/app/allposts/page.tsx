import Container from "../_components/container";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export default function BlogListing() {
  const blogPosts = getAllPosts();

  return (
    <Container>
      <div className="text-center mb-12 mt-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-2 md:mb-4">
          Featured Posts
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
          Explore our latest insights, tutorials, and updates from the world of
          software engineering. Stay informed and inspired!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <Link href={`/posts/${post.slug}`}>
              <Image
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            </Link>

            <div className="p-6 flex-grow flex flex-col">
              <h2 className="text-2xl font-bold mb-2 text-dark-blue">
                <Link href={`/posts/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                <span className="flex items-center">
                  <Image
                    src={post.author.picture}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="rounded-full mr-2"
                  />
                  By {post.author.name}
                </span>
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/archive"
          className="inline-block bg-dark-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          View All Articles
        </Link>
      </div>
    </Container>
  );
}
