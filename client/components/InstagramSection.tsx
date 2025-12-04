import React from "react";

export const InstagramSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-20 py-12 md:py-20 text-center">
      <p className="text-xs md:text-sm font-bold uppercase text-gray-500 mb-2 md:mb-4">
        newsfeed
      </p>
      <h2 className="text-3xl md:text-5xl font-medium mb-2 md:mb-4">
        Instagram
      </h2>
      <p className="text-base md:text-lg text-gray-700 mb-2 md:mb-4">
        Follow us on social media for more discount & promotions
      </p>
      <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8">
        @3legant_official
      </p>

      <img
        src="https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/901bdbd729336200ba6ec534c35d8cf2328d1960?placeholderIfAbsent=true"
        alt="Instagram Feed"
        className="w-full"
      />
    </section>
  );
};

export default InstagramSection;
