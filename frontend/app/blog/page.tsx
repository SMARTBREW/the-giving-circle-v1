import type { Metadata } from "next";
import BlogHero from "./_sections/blog-hero";
import BlogArticles from "./_sections/blog-articles";
import BlogReach from "./_sections/blog-reach";
import BlogCta from "./_sections/blog-cta";

export const metadata: Metadata = {
  title: "Blog | The Giving Circle",
  description:
    "Practical, trust-first giving guides for families, students, and donors across India: 80G, verified NGOs, Young Champions, and collective impact.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogArticles />
      <BlogReach />
      <BlogCta />
    </>
  );
}
