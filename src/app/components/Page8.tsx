'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Man from './image/Man1.png';
import Man1 from './image/Man2.png';
import Girl from './image/Girl1.png';
import Girl1 from './image/Girl2.png';
import Girl2 from './image/Girl3.png';
import Vector1 from './image/Vector1.png';
import Vector2 from './image/Vector.png';
import C1 from './image/quote-icon1.png';
import C2 from './image/quote-icon2.png';

const Page8 = () => {
  const profiles = [
    { id: 1, image: Man },
    { id: 2, image: Man1 },
    { id: 3, image: Girl },
    { id: 4, image: Girl1 },
    { id: 5, image: Girl2 },
  ];

  const [currentProfile, setCurrentProfile] = useState(0);

  const handleNext = () => {
    setCurrentProfile((prev) => (prev === profiles.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentProfile((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
  };

  return (
    <div className="text-center font-sans w-full max-w-2xl mx-auto p-4 md:p-5">
      <div className="w-4 h-4 bg-orange-500 mx-auto mb-3 md:mb-5"></div>
      <div className="mb-3 md:mb-5">
        <h1 className="text-xl md:text-2xl font-bold">QUOTES FROM SUCCESSFUL PEOPLE</h1>
        <p className='text-3xl md:text-4xl text-orange-500'>----</p>
      </div>
      <div className="flex items-center justify-center mb-6 md:mb-10">
        <div onClick={handlePrev} className="cursor-pointer mr-4 md:mr-10">
          <Image src={Vector2} alt="Previous" width={50} height={50} className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-5 relative w-full max-w-[300px] md:max-w-[500px]">
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex justify-center items-center transition-transform duration-300 cursor-pointer shadow-lg ${
                index === currentProfile
                  ? 'scale-125 border-4 border-orange-500 opacity-100 z-10 drop-shadow-md'
                  : 'scale-75 border-2 border-gray-300 opacity-100 z-1'
              }`}
            >          
              <Image
                src={profile.image}
                alt={`Profile ${profile.id}`}
                width={index === currentProfile ? 120 : 80}
                height={index === currentProfile ? 120 : 80}
                className="rounded-full object-cover"
              />
            </div>
          ))}
        </div>
        <div onClick={handleNext} className="cursor-pointer ml-4 md:ml-10">
          <Image src={Vector1} alt="Next" width={50} height={50} className="w-6 h-6 md:w-8 md:h-8" />
        </div>
      </div>
      <div className="mt-4 md:mt-5 relative px-4">
        <blockquote className="italic text-gray-600 relative">
          <Image src={C1} alt="Quote icon" width={50} height={50} className="w-16 h-8 md:w-20 md:h-10" />
          <Image src={C2} alt="Quote icon" width={50} height={50} className="w-16 h-8 md:w-20 md:h-10 absolute right-0 top-16 md:top-20 z-0 opacity-50" />
          <p className="text-2xl md:text-4xl font-semibold mb-2 relative z-10">
            Stay Hungry Stay Foolish
          </p>
        </blockquote>
        <p className="text-xs md:text-sm text-gray-500 max-w-lg mx-auto text-center">
          We should never stop learning and we should always try new things. We should be courageous and never be afraid to go the extra mile. We must have a want; we can always build something better.
        </p>
      </div>
    </div>
  );
};

export default Page8;
