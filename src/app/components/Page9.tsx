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
    <div className="text-center p-5 md:mt-32 mt-16">
      <h2 className="font-bold uppercase tracking-wide text-[20px] md:text-[24px]">
        <div className="flex justify-center items-center gap-2">
          <span>Upcoming Events</span>
          <svg width="24" height="24" className="md:w-[30px] md:h-[30px]" viewBox="0 0 24 24" fill="#F57819" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="none" />
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM19 19H5V10h14v9zm0-11H5V5h14v3z" />
          </svg>
        </div>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8 md:mt-16 gap-5 px-4">
        <div className="bg-[#2b3a50] text-white p-4 md:p-5 rounded-none w-[100px] text-center">
          <h3 className="m-0 text-xl md:text-2xl">{day}</h3>
          <p className="m-0 text-base md:text-lg">{month}</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base">Lorem Ipsum Dolor Sit Amet Consectetur.</p>
          <p className="text-sm md:text-base">Velit Placerat Eget A Viverra Nunc Consequat.</p>
        </div>
      </div>
      <h3 className="mt-32 md:mt-64 uppercase tracking-wide text-[16px] md:text-[18px]">Collaboration Partners</h3>
      <div className="grid grid-cols-2 md:flex md:flex-row justify-center mt-5 gap-5 md:gap-10 items-center">
        <div>
          <Image src={Jewellery} alt="Tiger Jewellery" width={100} height={50} className="w-auto md:w-[150px]" />
        </div>
        <div>
          <Image src={Origgin} alt="Origgin" width={100} height={50} className="w-auto md:w-[150px]" />
        </div>
        <div>
          <Image src={Kentech} alt="Kentech" width={100} height={50} className="w-auto md:w-[150px]" />
        </div>
        <div>
          <Image src={SUT} alt="Partner" width={100} height={50} className="w-auto md:w-[150px]" />
        </div>
      </div>
      <div className="bg-[#f4f4f4] p-5 md:p-10 mt-10 md:mt-20">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="font-bold text-xl md:text-2xl text-center md:text-left mb-4 md:mb-8">Subscribe Newsletter</h3>
          <p className="text-gray-600 mb-4 text-center md:text-left text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 border border-gray-300 rounded-none w-full md:w-[300px] focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="w-full md:w-auto p-2 px-5 bg-orange-500 text-white border-none cursor-pointer rounded-none">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9;
