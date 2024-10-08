import { FC } from "react";
import Image from "next/image";
import Avatar from "./image/Avatar2.jpg";
import arrow from "./image/Arrow.png";

const Page2: FC = () => {
  return (
    <div className="container mx-auto px-16 py-16 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row max-w-7xl">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">THE TIGER TEAM ACADEMY</h1>
          <div className="flex items-center mb-32">
            <div className="bg-orange-500 w-4 h-4 mr-2"></div>
            <p>ABOUT US</p>
          </div>
          <div>
            <h1 className="text-orange-500 text-2xl font-bold">Robot</h1>
          </div>
          <p className="text-gray-700">
            The Tiger Team Academy "About" The Tiger Team Academy put <br />
            great emphasis on grooming our fellow students to become <br />
            entrepreneurs in technology business through direct <br />
            involvement with innovation - driven research projects with <br />
            famous university faculty members, and also with our <br />
            affiliated companies in knowledge - based business to solve <br />
            real problems of the industry...
          </p>
          <button className="mt-4 text-black hover:underline flex items-center">
            Read More
            <Image src={arrow} alt="arrow" width={20} height={10} />
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-16">
          <div className="relative w-full h-auto">
            <div className="absolute"></div>
            <Image
              src={Avatar}
              alt="Tiger Team Academy"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;