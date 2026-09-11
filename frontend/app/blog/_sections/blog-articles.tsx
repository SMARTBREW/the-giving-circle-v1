"use client";

import { useState } from "react";
import FadeInSection from "@/components/fade-in-section";
import PageSection from "@/components/page-section";
import SectionIntro from "@/components/section-intro";
import FilterChips from "@/components/filter-chips";
import BlogCard from "@/components/blog-card";
import {
  BLOG_ARTICLES,
  BLOG_ARTICLES_INTRO,
  BLOG_FILTER_ALL,
  getBlogCategories,
} from "@/constants";

export default function BlogArticles() {
  const [filter, setFilter] = useState(BLOG_FILTER_ALL);
  const categories = getBlogCategories();
  const options = [BLOG_FILTER_ALL, ...categories];
  const visible =
    filter === BLOG_FILTER_ALL
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((article) => article.category === filter);

  return (
    <PageSection id="guides" tone="gray">
      <SectionIntro
        eyebrow={BLOG_ARTICLES_INTRO.eyebrow}
        title={BLOG_ARTICLES_INTRO.title}
        subtitle={BLOG_ARTICLES_INTRO.subtitle}
      />

      <div className="mt-8 w-full sm:mt-10 lg:mt-12">
        <FilterChips options={options} value={filter} onChange={setFilter} />
      </div>

      <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 md:gap-8 lg:gap-10 min-[90rem]:mt-12 min-[90rem]:grid-cols-3 min-[90rem]:gap-8">
        {visible.map((article) => (
          <FadeInSection key={article.id} className="h-full">
            <BlogCard article={article} />
          </FadeInSection>
        ))}
      </div>
    </PageSection>
  );
}
