import { FC } from "react";
import Image from "next/image";
import Avatar from "./image/donut.jpg";
import arrow from "./image/Arrow.png";

const StarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="orange"
        className="w-8 h-8 mb-4"
    >
        <path d="M12 2l2.74 5.57 6.26.91-4.5 4.39 1.06 6.21L12 16.77 7.44 19.1l1.06-6.21-4.5-4.39 6.26-.91L12 2z" />
    </svg>
);

const Page4: FC = () => {
    return (
        <div className="container mx-auto px-16 py-16 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center mb-8">
            
                <StarIcon />

                <div className="flex items-center mb-8">
                    <div className="w-64 h-0.5 mb-0 bg-gray-300"></div>
                    <h2 className="font-bold text-xl px-4">TTTA Highlights</h2>
                    <div className="w-64 h-0.5 mb-0  bg-gray-300"></div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row max-w-7xl">
                <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center">
                    <Image
                        src={Avatar}
                        alt="KENTECH"
                        objectFit="cover"
                        className="w-full h-auto z-10"
                    />
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 md:ml-16">
                    <h1 className="text-4xl font-bold mb-4 text-center">KENTECH</h1>
                    <div className="text-orange-500 text-3xl font-bold">-----</div>

                    <p className="text-gray-700 mb-8">
                        Lorem ipsum dolor sit amet consectetur. Vitae arcu malesuada eu <br />
                        lacus donec risus eu placerat. Tellus ligula risus ut tincidunt inceptos <br />
                        natoque commodo ullamcorper. Tellus fermentum ullamcorper venenatis <br />
                        praesent neque.
                    </p>

                    <div className="text-gray-400 mt-4 text-right">
                        <p>5 April 2023</p>
                    </div>

                    <div className="flex items-center">
                        <button className="mt-4 text-black hover:underline flex items-center" title="ไปยังหน้า...">
                            Read More
                            <Image src={arrow} alt="arrow" width={20} height={10} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page4;
