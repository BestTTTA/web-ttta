import { FC } from "react";
import Image from "next/image";
import EarthImage from "./image/Avatar.png";

const Page1: FC = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center p-16"> 
        <div>
          <p className="text-orange-500 text-lg">
            ACADEMY FOR THE NEW GENERATION OF STARTUPS
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
            MOVE <br />
            THAILAND <br />
            CHANGE THE <br />
            WORLD
          </h1>
          <div className="flex items-center mb-6">
            <div className="h-24 w-1 bg-orange-500 mr-4"></div>
            <p>
              We are challenged to both study and work to experience
              <br />
              firsthand the life of a startup
            </p>
          </div>
          <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-none">
            LEARN MORE
          </button>
        </div>
        <div className="flex justify-center overflow-hidden">
          <Image src={EarthImage} alt="Earth in space" objectFit="cover" />
        </div>
      </div>
    </main>
  );
};

export default Page1;
