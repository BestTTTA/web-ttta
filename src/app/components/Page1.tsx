import { FC } from "react";
import Image from "next/image";
import Avatar from "./image//Avatar1.jpg";

const Page1: FC = () => {
  return (
    <main className="bg-zinc-900 text-white flex flex-col items-center justify-center min-h-screen w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-8 md:px-16 py-8 md:py-16 max-w-7xl mx-auto w-full">
        <div className="text-center lg:text-left">
          <p className="text-orange-500 text-base sm:text-lg mb-4">
            ACADEMY FOR THE NEW GENERATION OF STARTUPS
          </p>
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 lg:mb-16 leading-tight">
              MOVE <br />
              THAILAND <br />
              CHANGE THE <br />
              WORLD
            </h1>
          </div>
          <div className="flex items-center mb-8 justify-center lg:justify-start">
            <div className="h-16 sm:h-20 w-0.5 bg-orange-500 mr-4"></div>
            <p className="text-sm sm:text-base">
              We are challenged to both study and work to experience <br className="hidden sm:block" />
              firsthand the life of a startup
            </p>
          </div>
          <button className="px-4 sm:px-6 py-3 sm:py-4 text-sm bg-white text-black rounded-none shadow-sm hover:-translate-y-1 hover:scale-100 hover:bg-orange-500 transition-all duration-200 ease-in-out" title="ไปยังหน้า...">
            LEARN MORE
          </button>
        </div>
        <div className="relative w-full aspect-[4/3] mt-8 lg:mt-0">
          <Image 
            src={Avatar} 
            alt="Earth in space" 
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
            priority
          />
        </div>
      </div>
    </main>
  );
};

export default Page1;