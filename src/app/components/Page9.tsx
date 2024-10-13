import React from 'react';
import Image from 'next/image';
import Jewellery from './image/Jewellery.png';
import Origgin from './image/Origgin.png';
import Kentech from './image/Kentech.png';
import SUT from './image/SUT.png';

const today = new Date();
const day = today.getDate();
const month = today.toLocaleString('default', { month: 'long' });

const Page9 = () => {
  return (
    <div className="text-center p-5 mt-32">
      <h2 className="font-bold uppercase tracking-wide text-[24px]">
        <div className="flex justify-center items-center gap-2">
          <span>Upcoming Events</span>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#F57819" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="none" />
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM19 19H5V10h14v9zm0-11H5V5h14v3z" />
          </svg>
        </div>
      </h2>
      <div className="justify-items-start flex items-center mt-16 gap-5 ml-80">
        <div className="bg-[#2b3a50] text-white p-5 rounded-none w-[100px] text-center">
          <h3 className="m-0 text-2xl">{day}</h3>
          <p className="m-0 text-lg">{month}</p>
        </div>
        <div className="text-left">
          <p>Lorem Ipsum Dolor Sit Amet Consectetur.</p>
          <p>Velit Placerat Eget A Viverra Nunc Consequat.</p>
        </div>
      </div>
      <h3 className="mt-64 uppercase tracking-wide text-[18px]">Collaboration Partners</h3>
      <div className="flex justify-center mt-5 gap-10 items-center">
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
      <div className="bg-[#f4f4f4] p-10 mt-20">
        <h3 className="font-bold text-2xl text-left mb-8 ml-32">Subscribe Newsletter</h3>
        <p className="text-gray-600 mb-4 text-left ml-32">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br />
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="gap-2 -mt-16 ml-80">
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 border border-gray-300 rounded-none w-[300px] focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="p-2 px-5 bg-orange-500 text-white border-none cursor-pointer rounded-none">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page9;
