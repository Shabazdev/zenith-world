import React from 'react';

export const HomeHero: React.FC = () => {
  return (
    <div
      className="w-full min-h-[820px] bg-cover bg-center px-20 py-48 flex items-center"
      style={{
        backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/620177adf3e549dab55eb230a072e30b/4150ff5925883fac27bacb0e7e960c2aed342b5a?placeholderIfAbsent=true)',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-2xl">
        <h1 className="text-7xl font-medium leading-tight mb-8 text-white">
          More than<br />
          just a game.<br />
          It's a lifestyle.
        </h1>
        <p className="text-2xl text-white mb-8 leading-relaxed">
          Whether you're just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.
        </p>
        <button className="bg-[#38cb89] text-black font-medium px-14 py-3 rounded-lg hover:opacity-90 text-lg">
          Shopping Now
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
