import { FC } from "react";
import Image from "next/image";
import Avatar from "./image//Avatar1.jpg";

const Page1: FC = () => {
  return (
    <main className="bg-zinc-900 text-white flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start p-16 max-w-7xl">
        <div>
          <p className="text-orange-500 text-lg">
            ACADEMY FOR THE NEW GENERATION OF STARTUPS
          </p>
          <div>
            <h1 className="leading-loose sm:text-7xl font-bold mb-16 leading-normal">
              MOVE <br />
              THAILAND <br />
              CHANGE THE <br />
              WORLD
            </h1>
          </div>
          <div className="flex items-center mb-8">
            <div className="h-20 w-0.5 bg-orange-500 mr-4"></div>
            <p>
              We are challenged to both study and work to experience <br />
              firsthand the life of a startup
            </p>
          </div>
          <button className="bg-white text-black hover:bg-orange-500 px-6 py-3 rounded-none">
            LEARN MORE
          </button>
        </div>
        <div style={{ position: 'relative', width: '700px', height: '600px' }}>
          <Image
            src={Avatar}
            alt="Earth in space"
            style={{ width: '700px', height: '664px', objectFit: 'cover', overflow: 'hidden' }}
            sizes="(max-width: 1080px) 100vw, (max-width: 1920px) 100vw, 100vw"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
};

export default Page1;