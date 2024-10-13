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
import C1 from './image/“.png'
import C2 from './image/”.png'

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
    <div className="text-center font-sans max-w-2xl mx-auto p-5">
      <div className="w-4 h-4 bg-orange-500 mx-auto mb-5"></div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold">QUOTES FROM SUCCESSFUL PEOPLE</h1>
      </div>
      <div className="flex items-center justify-center mb-10">
        <div onClick={handleNext} className="cursor-pointer mr-10">
          <Image src={Vector2} alt="Next" width={50} height={50} className="w-8 h-8" />
        </div>
        <div className="flex justify-center items-center gap-5 relative w-[500px]">
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className={`w-20 h-20 rounded-full overflow-hidden flex justify-center items-center transition-transform duration-300 cursor-pointer ${index === currentProfile
                ? 'scale-125 border-4 border-orange-500 opacity-100 z-10'
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
        <div onClick={handleNext} className="cursor-pointer ml-10">
          <Image src={Vector1} alt="Next" width={50} height={50} className="w-8 h-8" />
        </div>
      </div>
      <div className="mt-5">
        <blockquote className="italic text-gray-600">
        <Image src={C1} alt="Quote icon" width={50} height={50} className="w-20 h-10" />
    <p className="text-4xl font-semibold mb-2">Stay Hungry Stay Foolish</p>
    <Image
        src={C2}
        alt="Quote icon"
        width={50}
        height={50}
        className="w-20 h-10 absolute right-64 mr-48" />
        </blockquote>
        <p className="text-sm text-gray-500 max-w-lg mx-auto text-center">
          We should never stop learning and we should always try new things.
          We should be courageous and never be afraid to go the extra mile.
          We must have a want, we can always build something better.
        </p>
      </div>
    </div>
  );
};

export default Page8;
