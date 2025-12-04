import React from 'react';

export const SaleBanner: React.FC = () => {
  return (
    <div className="w-full flex">
      {/* Left Image */}
      <div className="w-1/2">
        <img
          src="https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/5251d9278708bfe7aa02d9f9de15beced3513f63?placeholderIfAbsent=true"
          alt="Sale Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-1/2 bg-black text-white flex items-center justify-center px-20 py-20">
        <div className="max-w-2xl">
          <p className="text-[#38cb89] text-sm font-bold uppercase mb-4">Limited Edition</p>
          <h2 className="text-5xl font-medium mb-4">Hurry up! 30% OFF</h2>
          <p className="text-xl mb-8">Find clubs that are right for your game</p>

          {/* Timer */}
          <div className="mb-8">
            <p className="mb-4 text-sm">Offer expires in:</p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-white text-black w-16 h-16 flex items-center justify-center rounded text-3xl font-medium mb-2">
                  02
                </div>
                <p className="text-sm">Days</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white text-black w-16 h-16 flex items-center justify-center rounded text-3xl font-medium mb-2">
                  12
                </div>
                <p className="text-sm">Hours</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white text-black w-16 h-16 flex items-center justify-center rounded text-3xl font-medium mb-2">
                  45
                </div>
                <p className="text-sm">Minutes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white text-black w-16 h-16 flex items-center justify-center rounded text-3xl font-medium mb-2">
                  05
                </div>
                <p className="text-sm">Seconds</p>
              </div>
            </div>
          </div>

          <button className="bg-[#38cb89] text-black font-medium px-10 py-3 rounded-lg hover:opacity-90">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
