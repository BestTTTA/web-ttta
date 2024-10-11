import { FC } from "react";
import Image from "next/image";
import Avatar from "./image/Avatar2.png";
import arrow from "./image/Arrow.png";

const Page2: FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row max-w-7xl">
        {/* Left Section */}
        <div className="md:w-1/2 w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">THE TIGER TEAM ACADEMY</h1>
          <div className="flex items-center mb-8 md:mb-16">
            <div className="bg-orange-500 w-4 h-4 mr-2"></div>
            <p>ABOUT US</p>
          </div>
          <div>
            <h1 className="text-orange-500 text-xl md:text-2xl font-bold">----</h1>
          </div>
          <p className="text-gray-700">
            The Tiger Team Academy puts great emphasis on grooming our fellow students to become 
            entrepreneurs in technology business through direct involvement with innovation-driven 
            research projects with famous university faculty members, and also with our affiliated 
            companies in knowledge-based business to solve real problems of the industry...
          </p>
          <button className="mt-2 text-black hover:underline flex items-center" title="Read more about the Tiger Team Academy">
            Read More
            <Image src={arrow} alt="Arrow icon" width={20} height={10} />
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0 md:ml-8">
          <div style={{ position: 'relative', width: '500px', height: '500px' }}>
            {/* Orange Background Bar */}
            <div
              style={{
                position: 'absolute',
                top: '280px',
                left: '-20px',
                zIndex: '-1',
              }}
              className="bg-orange-500 w-20 h-60"
            ></div>

            {/* Black Background Bar */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                zIndex: '-1',
              }}
              className="bg-black w-20 h-60"
            ></div>

            {/* Avatar Image */}
            <Image
              src={Avatar}
              alt="Tiger Team Academy Avatar"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
