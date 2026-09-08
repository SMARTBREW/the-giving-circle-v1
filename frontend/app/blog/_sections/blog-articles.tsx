import FadeInSection from "@/components/fade-in-section";
import BlogCard from "@/components/blog-card";
import { BLOG_ARTICLES } from "@/constants";

export default function BlogArticles() {
  return (
    <section className="w-full bg-[#FFFFFF]">
      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-6 px-4 pt-6 pb-6 sm:gap-8 sm:px-8 sm:pt-12 sm:pb-12 md:grid-cols-2 md:gap-8 md:px-10 md:pt-14 md:pb-14 lg:gap-10 lg:px-12 lg:pt-16 lg:pb-16 min-[90rem]:grid-cols-3 min-[90rem]:gap-8 min-[90rem]:px-[6.25rem] min-[90rem]:pt-[5rem] min-[90rem]:pb-[5rem]">
        {BLOG_ARTICLES.map((article) => (
          <FadeInSection key={article.id} className="h-full">
            <BlogCard article={article} />
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
