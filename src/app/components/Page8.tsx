'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Man from './image/Man1.png';
import Man1 from './image/Man2.png';
import Girl from './image/Girl1.png';
import Girl1 from './image/Girl2.png';
import Girl2 from './image/Girl3.png';

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
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.orangeBox}></div> {/* Move this above the heading */}
      <div style={styles.headingContainer}>
        <h1 style={styles.headingText}>Quotes from Successful People</h1>
      </div>

      {/* Profile Carousel */}
      <div style={styles.profileCarousel}>
        {/* Left Arrow */}
        <div style={styles.arrowLeft} onClick={handlePrev}>
          ←
        </div>

        {/* Profile Pictures */}
        <div style={styles.profileContainer}>
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              style={{
                ...styles.profile,
                border: index === currentProfile ? '4px solid #F57819' : '2px solid lightgray',
              }}
            >
              <Image
                src={profile.image}
                alt={`Profile ${index + 1}`}
                style={styles.profileImg}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div style={styles.arrowRight} onClick={handleNext}>
          →
        </div>
      </div>

      {/* Quote Section */}
      <div style={styles.quoteSection}>
        <blockquote style={styles.quote}>
          <p style={styles.quoteTitle}><strong>Stay Hungry Stay Foolish</strong></p>
          <p style={styles.quoteText}>
            We should never stop learning and we should always try new things. We
            should be courageous and never be afraid to go the extra mile. We must
            have a want, we can always build something better.
          </p>
        </blockquote>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
  },
  orangeBox: {
    width: '40px',
    height: '40px',
    backgroundColor: '#F57819', // Updated color
    margin: '0 auto 20px auto', // Center and add space below
  },
  headingContainer: {
    marginBottom: '20px',
  },
  headingText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  profileCarousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  arrowLeft: {
    cursor: 'pointer',
    fontSize: '24px',
    marginRight: '10px',
    color: 'gray',
  },
  profileContainer: {
    display: 'flex',
    gap: '10px',
  },
  profile: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    transition: 'border 0.3s ease',
  },
  profileImg: {
    borderRadius: '50%',
    objectFit: 'cover',
  },
  arrowRight: {
    cursor: 'pointer',
    fontSize: '24px',
    marginLeft: '10px',
    color: 'gray',
  },
  quoteSection: {
    marginTop: '20px',
  },
  quote: {
    fontStyle: 'italic',
    color: '#555',
  },
  quoteTitle: {
    fontSize: '22px',
    marginBottom: '10px',
  },
  quoteText: {
    fontSize: '16px',
    color: '#777',
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default Page8;
