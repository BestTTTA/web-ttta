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
    <div className="text-center p-5">
      <h2 className="font-bold uppercase tracking-wide text-2xl">
        <div className="flex justify-center items-center gap-2">
          <span>Upcoming Events</span>
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

      <div className="flex justify-center items-center mt-10 gap-5">
        <div className="bg-gray-800 text-white p-5 text-center rounded-none w-24">
          <h3 className="text-2xl m-0">{day}</h3>
          <p className="text-lg m-0">{month}</p>
        </div>
        <div className="text-left">
          <p>Lorem Ipsum Dolor Sit Amet Consectetur.</p>
          <p>Velit Placerat Eget A Viverra Nunc Consequat.</p>
        </div>
      </div>

      <h3 className="mt-20 font-bold uppercase tracking-wide text-xl">Collaboration Partners</h3>

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

      <div className="bg-gray-100 p-10 mt-20 rounded-md">
        <h3 className="font-bold uppercase tracking-wide text-xl">Subscribe Newsletter</h3>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="flex justify-center mt-5 gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 w-72 border border-gray-300 rounded"
          />
          <button className="p-2 px-5 bg-orange-500 text-white rounded">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Page9;
