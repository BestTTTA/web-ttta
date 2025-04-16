import { FC } from "react";
import Image from "next/image";
import Avatar from "./image/Avatar2.png";
import arrow from "./image/Arrow.png";

const Page2: FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-16 py-8 lg:py-16 flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-8">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">THE TIGER TEAM ACADEMY</h1>
          <div className="flex items-center mb-6 lg:mb-16">
            <div className="bg-orange-500 w-4 h-4 mr-2"></div>
            <p>ABOUT US</p>
          </div>
          <div>
            <h1 className="text-orange-500 text-lg sm:text-xl lg:text-2xl font-bold">----</h1>
          </div>
          <p className="text-gray-700 opacity-80 text-sm sm:text-base lg:text-lg whitespace-pre-line">
            The Tiger Team Academy "About" The Tiger Team Academy puts
            great emphasis on grooming our fellow students to become
            entrepreneurs in technology business through direct
            involvement with innovation-driven research projects with
            famous university faculty members, and also with our
            affiliated companies in knowledge-based business to solve
            real problems of the industry...
          </p>
          <button
            className="mt-4 text-black hover:underline flex items-center gap-2 text-sm sm:text-base"
            title="ไปยังหน้า...">
            Read More
            <Image src={arrow} alt="Arrow icon" width={20} height={10} className="w-4 sm:w-5" />
          </button>
        </div>
        <div className="lg:w-1/2 w-full relative">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="absolute top-[56%] left-[-5%] z-[-1] bg-orange-500 w-[15%] h-[40%]"></div>
            <div className="absolute top-[-5%] right-[-5%] z-[-1] bg-black w-[15%] h-[40%]"></div>
            <Image 
              src={Avatar} 
              alt="Tiger Team Academy Avatar" 
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
