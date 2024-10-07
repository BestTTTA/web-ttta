import { FC } from "react";
import Image from "next/image";
import EarthImage from "./image/MMIGIT-03-1.jpg"

const Page1: FC = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-4 bg-gray-900 text-white">
      <div className="w-full max-w-4xl">

        <div className="flex flex-col items-center justify-center p-16">
          <p className="text-orange-500 text-lg">ACADEMY FOR THE NEW GENERATION OF STARTUPS</p>
          <h1 className="text-6xl font-bold leading-tight text-left mb-8">
            MOVE <br />
            THAILAND <br />
            CHANGE THE <br />
            WORLD
          </h1>
          <div className="flex items-Center">
            <div className="h-32 w-1 bg-orange-500 mr-4"></div>
            <div>
              <p>We are challenged to both study and work to experience<br />
                firsthand the life of a startup
              </p>
              <button className="bg--500 hover:bg-orange-600 px-6 py-3 rounded-lg">
            LEARN MORE
          </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-96 h-96">
        <Image src={EarthImage} alt="Earth in space" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
    </div>
  );
};

export default Page1;
