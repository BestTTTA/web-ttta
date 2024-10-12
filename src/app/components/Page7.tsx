import { FC } from "react";
import Image from "next/image";
import Entrepreneur from "./image/entrepreneur.png";
import Education from "./image/mortarboard.png";
import Secure from "./image/secure.png";
import EndlessGiving from "./image/love.png";

const Page7: FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center">
        <div className="bg-orange-500 w-4 h-4 mb-4"></div>
        <h2 className="text-3xl font-bold mb-4">WHAT DO WE OFFER FOR YOU?</h2>
        <div className="w-12 h-1 bg-orange-500 mb-8"></div>
        <p className="text-gray-700 text-center max-w-2xl mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Image src={Entrepreneur} alt="Entrepreneur" width={40} height={40} />
            </div>
            <h3 className="font-bold mb-2">Entrepreneur</h3>
            <p className="text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Image src={Education} alt="Education" width={40} height={40} />
            </div>
            <h3 className="font-bold mb-2">Education</h3>
            <p className="text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Image src={Secure} alt="Secure" width={40} height={40} />
            </div>
            <h3 className="font-bold mb-2">Secure</h3>
            <p className="text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Image src={EndlessGiving} alt="Endless Giving" width={40} height={40} />
            </div>
            <h3 className="font-bold mb-2">Endless Giving</h3>
            <p className="text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
