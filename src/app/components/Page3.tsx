import { FC } from "react";
import Image from "next/image";
import Avatar from "./image/Avatar3.png";
import arrow from "./image/Arrow.png";

const Page3: FC = () => {
  return (
    <div className="bg-gray-100 container mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-64 flex flex-col items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row max-w-7xl relative"> {/* Set flex-col-reverse on small screens */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0 md:mr-16 relative z-20"> {/* Adjusted margin and z-index */}
          <div style={{ position: 'relative', width: '500px', height: '500px' }}>
            <div
              style={{
                position: 'absolute',
                top: '280px',
                left: '-20px',
                zIndex: '-1'
              }}
              className="bg-orange-500 w-20 h-60"></div>

            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                zIndex: '-1'
              }}
              className="bg-black w-20 h-60"></div>

            <Image
              src={Avatar}
              alt="Earth in space"
              style={{ width: '500px', height: '500px', objectFit: 'cover', zIndex: '2' }} // Keep higher zIndex for the image
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              width={500}
              height={500}
            />
          </div>
        </div>

        
        <div className="md:w-1/2 w-full relative z-10"> 
          <div className="flex items-center mb-8 md:mb-16">
            <div className="bg-orange-500 w-4 h-4 mr-2"></div>
            <p>VISION</p>
          </div>
          <div><h1  className="text-3xl font-bold uppercase"> Vision & Mission</h1></div>
          <div>
            <h1 className="text-orange-500 text-xl md:text-2xl font-bold">----</h1>
          </div>
          <p className="text-gray-700 opacity-80"> {/* Reduced opacity to give a layered effect */}
          The truth of the matter is that the folks at the academy — with these <br/>
          unparalleled opportunities — are working extremely hard to upgrade  <br/>
          Thailand from a factor-and-efficiency-driven to an innovation-driven  <br/>
          economy so that Thailand could one day produce knowledge-based  <br/>
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
