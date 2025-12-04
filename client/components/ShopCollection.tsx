import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ShopCollection: React.FC = () => {
  return (
    <section className="w-full bg-white px-20 py-12">
      <h2 className="text-5xl font-medium mb-12">Shop Collection</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Large Card */}
        <div className="lg:row-span-2 relative overflow-hidden rounded-lg min-h-[664px] bg-gradient-to-b from-blue-200 to-blue-100 flex items-end p-12">
          <img
            src="https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/353e4067b9f2295043145768dd97ab09018462fa?placeholderIfAbsent=true"
            alt="Juniors Set"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10">
            <h3 className="text-4xl font-medium mb-3">Juniors Set</h3>
            <button className="flex items-center gap-2 text-black font-medium border-b border-black pb-1 hover:opacity-70">
              Collections
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Small Cards Stack */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-lg min-h-80 bg-gradient-to-b from-pink-200 to-pink-100 flex items-end p-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/cc5301a6f9dc29c0810f910596e0be75a3b8100d?placeholderIfAbsent=true"
              alt="Men's Set"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10">
              <h3 className="text-4xl font-medium mb-3">Men's Set</h3>
              <button className="flex items-center gap-2 text-black font-medium border-b border-black pb-1 hover:opacity-70">
                Collections
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-lg min-h-80 bg-gradient-to-b from-purple-200 to-purple-100 flex items-end p-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/d99b9dc5e775e7d4f575472a2d67a47792b2e43e?placeholderIfAbsent=true"
              alt="Women's Set"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10">
              <h3 className="text-4xl font-medium mb-3">Women's Set</h3>
              <button className="flex items-center gap-2 text-black font-medium border-b border-black pb-1 hover:opacity-70">
                Collections
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCollection;
