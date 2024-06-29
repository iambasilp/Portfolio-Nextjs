import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt:
      "Learn the basics of React Hooks and how to use them in your applications.",
    image: "/images/react-hooks.jpg",
    link: "/blog/react-hooks",
  },
  {
    id: 2,
    title: "Next.js for Beginners",
    excerpt:
      "A comprehensive guide to get started with Next.js and build powerful web applications.",
    image: "/images/nextjs-beginners.jpg",
    link: "/blog/nextjs-beginners",
  },
  {
    id: 3,
    title: "JavaScript ES6 Features",
    excerpt:
      "Explore the new features introduced in JavaScript ES6 and how they can improve your code.",
    image: "/images/js-es6.jpg",
    link: "/blog/js-es6",
  },
];

const BlogCard = ({ title, excerpt, image, link }) => (
  <div className="bg-white dark:bg-black-100 rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{excerpt}</p>
      <Link href={link}>
        <div className="text-blue-500 dark:text-blue-100 flex items-center">
          Read More <FaArrowRight className="ml-2" />
        </div>
      </Link>
    </div>
  </div>
);

const BlogPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center text-black dark:text-white">
          Latest Blog Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
