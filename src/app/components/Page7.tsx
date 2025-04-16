import { FC } from "react";
import Image from "next/image";
import Entrepreneur from "./image/entrepreneur.png";
import Education from "./image/mortarboard.png";
import Secure from "./image/secure.png";
import EndlessGiving from "./image/love.png";

const Page7: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col items-center">
        <div className="bg-orange-500 w-3 h-3 sm:w-4 sm:h-4 mb-3 sm:mb-4"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center">WHAT DO WE OFFER FOR YOU?</h2>
        <div className="w-8 sm:w-12 h-1 bg-orange-500 mb-6 sm:mb-8"></div>
        <p className="text-sm sm:text-base text-gray-700 text-center max-w-xl sm:max-w-2xl mb-8 sm:mb-12 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl">
          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
              <Image src={Entrepreneur} alt="Entrepreneur" width={32} height={32} className="w-8 sm:w-10 h-8 sm:h-10" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">Entrepreneur</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
              <Image src={Education} alt="Education" width={32} height={32} className="w-8 sm:w-10 h-8 sm:h-10" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">Education</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
              <Image src={Secure} alt="Secure" width={32} height={32} className="w-8 sm:w-10 h-8 sm:h-10" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">Secure</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
              <Image src={EndlessGiving} alt="Endless Giving" width={32} height={32} className="w-8 sm:w-10 h-8 sm:h-10" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">Endless Giving</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
