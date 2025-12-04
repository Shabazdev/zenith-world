import React from "react";

export const SaleBanner: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Left Image */}
      <div className="hidden md:block w-1/2">
        <img
          src="https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/5251d9278708bfe7aa02d9f9de15beced3513f63?placeholderIfAbsent=true"
          alt="Sale Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 bg-black text-white flex items-center justify-center px-4 md:px-20 py-12 md:py-20">
        <div className="max-w-2xl">
          <p className="text-[#38cb89] text-xs md:text-sm font-bold uppercase mb-3 md:mb-4">
            Limited Edition
          </p>
          <h2 className="text-3xl md:text-5xl font-medium mb-3 md:mb-4">
            Hurry up! 30% OFF
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            Find clubs that are right for your game
          </p>

          {/* Timer */}
          <div className="mb-6 md:mb-8">
            <p className="mb-3 md:mb-4 text-xs md:text-sm">Offer expires in:</p>
            <div className="flex gap-2 md:gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-white text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded text-2xl md:text-3xl font-medium mb-2">
                  02
                </div>
                <p className="text-xs md:text-sm">Days</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded text-2xl md:text-3xl font-medium mb-2">
                  12
                </div>
                <p className="text-xs md:text-sm">Hours</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded text-2xl md:text-3xl font-medium mb-2">
                  45
                </div>
                <p className="text-xs md:text-sm">Minutes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded text-2xl md:text-3xl font-medium mb-2">
                  05
                </div>
                <p className="text-xs md:text-sm">Seconds</p>
              </div>
            </div>
          </div>

          <button className="bg-[#38cb89] text-black font-medium px-6 md:px-10 py-2 md:py-3 rounded-lg hover:opacity-90 text-sm md:text-base">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
