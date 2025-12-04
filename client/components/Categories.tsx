import React from 'react';

const categories = [
  { name: 'Golf Clubs', image: 'https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/d8dbe650ca0761773059d34d31ee81d145c2ec36?placeholderIfAbsent=true' },
  { name: 'Golf Balls', image: 'https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/f8c75ba9c3782df6e47625ea193fd0319d928a8a?placeholderIfAbsent=true' },
  { name: 'Golf Bags', image: 'https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/7d51c8a43413aed2530ba8d1095c1fd0daf97f65?placeholderIfAbsent=true' },
  { name: 'Clothing & Rainwear', image: 'https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/124180a0404d74afdf992cdaf5488be8771b2541?placeholderIfAbsent=true' },
  { name: 'Footwear', image: 'https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/36a5f62bbbd615db78ab359802aea5d3ef658653?placeholderIfAbsent=true' },
  { name: 'Accessories', image: 'https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/c3d6d01e50773b6f3ce05f4ab4b8bd4393066677?placeholderIfAbsent=true' },
];

export const Categories: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-20 py-12 md:py-20">
      <h2 className="text-3xl md:text-5xl font-medium text-center mb-8 md:mb-12">Shop by Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category) => (
          <div key={category.name} className="group cursor-pointer">
            <div className="mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 md:h-64 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <h3 className="text-lg md:text-2xl font-medium text-center text-gray-900">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
