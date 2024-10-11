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

  const getProfileIndex = (index) => {
    if (index < 0) return profiles.length - 1;
    if (index >= profiles.length) return 0;
    return index;
  };

  return (
    <div style={styles.container}>
      <div style={styles.orangeBox}></div>
      <div style={styles.headingContainer}>
        <h1 style={styles.headingText}>Quotes from Successful People</h1>
      </div>

      <div style={styles.profileCarousel}>
        <div style={styles.arrowLeft} onClick={handlePrev}>
          ←
        </div>

        <div style={styles.profileContainer}>
          {/* Previous Profile */}
          <div
            style={{
              ...styles.profile,
              transform: 'scale(0.8)',
              opacity: 0.5,
              border: '2px solid lightgray',
            }}
          >
            <Image
              src={profiles[getProfileIndex(currentProfile - 1)].image}
              alt="Previous Profile"
              width={80}
              height={80}
              style={styles.profileImg}
            />
          </div>

          <div
            key={profiles[currentProfile].id}
            style={{
              ...styles.profile,
              transform: 'scale(1.5)',
              zIndex: 10,
              border: '4px solid #F57819',
            }}
          >
            <Image
              src={profiles[currentProfile].image}
              alt="Current Profile"
              width={120}
              height={120}
              style={styles.profileImg}
            />
          </div>

          {/* Next Profile */}
          <div
            style={{
              ...styles.profile,
              transform: 'scale(0.8)',
              opacity: 0.5,
              border: '2px solid lightgray',
            }}
          >
            <Image
              src={profiles[getProfileIndex(currentProfile + 1)].image}
              alt="Next Profile"
              width={80}
              height={80}
              style={styles.profileImg}
            />
          </div>
        </div>

        <div style={styles.arrowRight} onClick={handleNext}>
          →
        </div>
      </div>

      <div style={styles.quoteSection}>
        <blockquote style={styles.quote}>
          <p style={styles.quoteTitle}>
            <strong>Stay Hungry Stay Foolish</strong>
          </p>
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
    width: '20px',
    height: '20px',
    backgroundColor: '#F57819',
    margin: '0 auto 20px auto',
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    position: 'relative',
    width: '400px',
  },
  profile: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease, border 0.3s ease, opacity 0.3s ease',
    cursor: 'pointer',
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
