import React from 'react';
import Image from 'next/image';
import Jewellery from './image/Jewellery.png';
import Origgin from './image/Origgin.png';
import Kentech from './image/Kentech.png';
import SUT from './image/SUT.png';

const Page9 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Upcoming Events Section */}
      <h2 style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <span>Upcoming Events</span>
          {/* Calendar SVG Icon with Color #F57819 */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#F57819"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" fill="none" />
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM19 19H5V10h14v9zm0-11H5V5h14v3z" />
          </svg>
        </div>
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px', gap: '20px' }}>
        <div style={{ backgroundColor: '#2b3a50', color: '#fff', padding: '20px', borderRadius: '8px', width: '80px', textAlign: 'center' }}>
          <h3 style={{ margin: 0, fontSize: '24px' }}>14</h3>
          <p style={{ margin: 0, fontSize: '18px' }}>July</p>
        </div>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontWeight: 'bold', margin: 0, fontSize: '18px' }}>Lorem Ipsum Dolor Sit Amet Consectetur.</p>
          <p style={{ margin: 0, fontSize: '16px', color: '#555' }}>Velit Placerat Eget A Viverra Nunc Consequat.</p>
        </div>
      </div>

      {/* Collaboration Partners Section */}
      <h3 style={{ marginTop: '80px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '22px' }}>Collaboration Partners</h3>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '40px', alignItems: 'center' }}>
        <div>
          <Image src={Jewellery} alt="Tiger Jewellery" width={150} height={75} />
        </div>
        <div>
          <Image src={Origgin} alt="Origgin" width={150} height={75} />
        </div>
        <div>
          <Image src={Kentech} alt="Kentech" width={150} height={75} />
        </div>
        <div>
          <Image src={SUT} alt="Partner" width={150} height={75} />
        </div>
      </div>

      {/* Newsletter Section */}
      <div style={{ backgroundColor: '#f4f4f4', padding: '40px', marginTop: '80px', borderRadius: '8px' }}>
        <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '22px' }}>Subscribe Newsletter</h3>
        <p style={{ fontSize: '16px', color: '#666' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px' }}>
          <input type="email" placeholder="Email Address" style={{ padding: '10px', width: '300px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <button style={{ padding: '10px 20px', backgroundColor: 'orange', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Page9;
