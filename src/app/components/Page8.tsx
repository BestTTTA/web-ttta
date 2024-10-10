'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Man from './image/Man1.png';
import Man1 from './image/Man2.png';
import Girl from './image/Girl1.png';
import Girl1 from './image/Girl2.png';
import Girl2 from './image/Girl3.png';
import './App.css';

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
    setCurrentProfile((prev) =>
      prev === profiles.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentProfile((prev) =>
      prev === 0 ? profiles.length - 1 : prev - 1
    );
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div className="heading-container">
        <div className="orange-box"></div>
        <h1 className="heading-text">Quotes from Successful People</h1>
      </div>

      {/* Profile Carousel */}
      <div className="profile-carousel">
        {/* Left Arrow */}
        <div className="arrow-left" onClick={handlePrev}>
          ←
        </div>

        {/* Profile Pictures */}
        <div className="profile-container">
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className={`profile ${
                index === currentProfile ? 'active' : ''
              }`}
            >
              <Image
                src={profile.image}
                alt={`Profile ${index + 1}`}
                className="profile-img"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div className="arrow-right" onClick={handleNext}>
          →
        </div>
      </div>

      {/* Quote Section */}
      <div className="quote-section">
        <blockquote className="quote">
          <p>
            <strong>Stay Hungry Stay Foolish</strong>
          </p>
          <p className="quote-text">
            We should never stop learning and we should always try new things. We
            should be courageous and never be afraid to go the extra mile. We must
            have a want, we can always build something better.
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default Page8;
