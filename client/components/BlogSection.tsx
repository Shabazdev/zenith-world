import React from "react";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Air Jordan x Travis Scott Event",
    image:
      "https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/a1e146ff7178c0130c93d82e1a1c578da17c47ac?placeholderIfAbsent=true",
  },
  {
    title: "The timeless classics on the green",
    image:
      "https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/9978944cb1cedca6a678f6efc4cf0a4228574a4b?placeholderIfAbsent=true",
  },
  {
    title: "The 2023 Ryder Cup",
    image:
      "https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/02998d345ba27cca2998e7486f06e0a82a82c138?placeholderIfAbsent=true",
  },
];

export const BlogSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-20 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-medium">Latest Articles</h2>
        <button className="flex items-center gap-2 text-black font-medium border-b border-black pb-1 hover:opacity-70 text-sm md:text-base">
          View More
          <ArrowRight size={16} className="md:w-5 md:h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {articles.map((article) => (
          <div key={article.title} className="group">
            <div className="mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 md:h-64 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">
              {article.title}
            </h3>
            <button className="flex items-center gap-2 text-black font-medium border-b border-black pb-1 hover:opacity-70 text-sm md:text-base">
              Read More
              <ArrowRight size={16} className="md:w-5 md:h-5" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
