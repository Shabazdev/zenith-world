import React from "react";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Shark - Men's cabretta white golf glove",
    image:
      "https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/3097dc3e9589839eb8749ea5a597ef6c8f04f159?placeholderIfAbsent=true",
    price: 19.0,
    badge: "HOT",
  },
  {
    id: 2,
    name: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
    image:
      "https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/42df158a9c2b4ce3ec020949ed107e35fe1944bf?placeholderIfAbsent=true",
    price: 24.99,
    originalPrice: 40.0,
    badge: "HOT",
    discount: "-50%",
  },
  {
    id: 3,
    name: "G/FORE - Mens Left Glove Snow 2023",
    image:
      "https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/e7f572ac619bac3daa924b177aec3b212303b397?placeholderIfAbsent=true",
    price: 30.0,
    badge: "HOT",
  },
  {
    id: 4,
    name: "Utility Rover-R Double Strap Bag All Black - 2023",
    image:
      "https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/577bfaceede053800a1c434ba173c318b3f5b7bc?placeholderIfAbsent=true",
    price: 209.99,
    badge: "HOT",
  },
  {
    id: 5,
    name: "Air Jordan 1 Low G Black/Black/Iron Grey - SS23",
    image:
      "https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/d010c92f0c8cac9a06e20f61b49edeadaadd5589?placeholderIfAbsent=true",
    price: 111.99,
    originalPrice: 200.0,
    badge: "HOT",
    discount: "-50%",
  },
];

export const ProductCarousel: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-20 py-8 md:py-12">
      <div className="mb-8 md:mb-12 flex items-center justify-between">
        <h2 className="text-3xl md:text-5xl font-medium">Featured</h2>
        <div className="flex gap-2">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4">
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-48 md:w-64 group">
            {/* Product Image */}
            <div className="relative mb-3 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-video object-cover group-hover:opacity-90 transition"
              />
              {product.badge && (
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white px-2 md:px-3 py-1 rounded text-xs font-bold uppercase">
                  {product.badge}
                </div>
              )}
              {product.discount && (
                <div className="absolute top-8 left-2 md:top-12 md:left-4 bg-[#38cb89] text-white px-2 md:px-3 py-1 rounded text-xs font-bold">
                  {product.discount}
                </div>
              )}
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 md:py-3 rounded-b text-xs md:text-base font-medium opacity-0 group-hover:opacity-100 transition">
                Add to cart
              </button>
            </div>

            {/* Product Info */}
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={`${i < 5 ? "fill-black" : ""} md:w-4 md:h-4`}
                />
              ))}
            </div>
            <h3 className="font-medium text-xs md:text-sm mb-2 line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="font-medium text-sm md:text-base">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through text-xs md:text-sm">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
