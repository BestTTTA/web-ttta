import { FC } from "react";
import Image from "next/image";
import Avatar from "./image/Avatar2.png";
import arrow from "./image/Arrow.png";

const Page2: FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row max-w-7xl">
        <div className="md:w-1/2 w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">THE TIGER TEAM ACADEMY</h1>
          <div className="flex items-center mb-8 md:mb-16">
            <div className="bg-orange-500 w-4 h-4 mr-2"></div>
            <p>ABOUT US</p>
          </div>
          <div>
            <h1 className="text-orange-500 text-xl md:text-2xl font-bold">----</h1>
          </div>
          <p className="text-gray-700 opacity-80">
            The Tiger Team Academy &quot;About&quot; The Tiger Team Academy puts <br />
            great emphasis on grooming our fellow students to become <br />
            entrepreneurs in technology business through direct <br />
            involvement with innovation-driven research projects with <br />
            famous university faculty members, and also with our <br />
            affiliated companies in knowledge-based business to solve <br />
            real problems of the industry...
          </p>
          <button
            className="mt-2 text-black hover:underline flex items-center"
            title="ไปยังหน้า...">Read More
            <Image src={arrow} alt="Arrow icon" width={20} height={10} />
          </button>
        </div>
        <div className="md:w-1/2 w-full mt-8 md:mt-0 md:ml-8 relative">
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute top-[280px] left-[-20px] z-[-1] bg-orange-500 w-20 h-60"></div>
            <div className="absolute top-[-20px] right-[-20px] z-[-1] bg-black w-20 h-60"></div>
            <Image src={Avatar} alt="Tiger Team Academy Avatar" layout="fill" objectFit="cover" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
