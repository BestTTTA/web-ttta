import { FC } from "react";
import Image from "next/image";
import Avatar from "./image/Avatar3.png";
import arrow from "./image/Arrow.png";

const Page3: FC = () => {
  return (
    <div className="bg-gray-100 mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-20 flex flex-col items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row max-w-7xl relative">
        <div className="md:w-1/2 w-full mt-8 md:mt-0 md:mr-32 relative z-20">
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute top-[280px] left-[-20px] z-[-1] bg-orange-500 w-20 h-60"></div>
            <div className="absolute top-[-20px] right-[-20px] z-[-1] bg-black w-20 h-60"></div>
            <Image src={Avatar} alt="Earth in space" className="w-[500px] h-[500px] object-cover z-2" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 100vw" width={500} height={500} />
          </div>
        </div>
        <div className="md:w-1/2 w-full relative z-10">
          <div className="flex items-center mb-8 md:mb-16">
            <div className="bg-orange-500 w-4 h-4 mr-2"></div>
            <p>VISION</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold uppercase"> Vision & Mission</h1>
          </div>
          <div>
            <h1 className="text-orange-500 text-xl md:text-2xl font-bold">----</h1>
          </div>
          <p className="text-gray-700 opacity-80">
            The truth of the matter is that the folks at the academy — with these <br />
            unparalleled opportunities — are working extremely hard to upgrade  <br />
            Thailand from a factor-and-efficiency-driven to an innovation-driven  <br />
            economy so that Thailand could one day produce knowledge-based  <br />
            instead of commodity-based products for the world...
          </p>
          <button className="mt-2 text-black hover:underline flex items-center" title="ไปยังหน้า...">
            Read More
            <Image src={arrow} alt="arrow" width={20} height={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
