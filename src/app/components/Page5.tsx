import { FC } from "react";
import Image from "next/image";
import Avatar from "./image/Palm.jpg";
import arrow from "./image/Arrow.png";

const Page5: FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center mb-4 sm:mb-6 lg:mb-8">
                <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                </div>
            </div>
            <div className="flex flex-col md:flex-row max-w-7xl w-full">
                <div className="w-full md:w-1/2 mt-4 sm:mt-6 md:mt-0 md:mr-8 lg:mr-16 px-4 sm:px-0">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-center md:text-left">TOKAMAK</h1>
                    <div className="text-orange-500 text-xl sm:text-2xl lg:text-3xl font-bold text-right">-----</div>
                    <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
                        Lorem Ipsum Dolor Sit Amet Consectetur. Viae Arcu Maecenas Eu 
                        Lacus Donec Risus Eu. Placerat Nisl Turpis Neque Sed. A Ullamcorper. 
                        Fringilla Lacus In Interdum Tirtique Molestie Commodo Ullamcorper. 
                        Tellus Fermentum Ullamcorper Venenatis Praesent Neque Dapibus
                        Cursus Fames Eget. At Nunc Maecenas Et Pretium Risus Sed.
                    </p>
                    <div className="text-gray-400 mt-3 sm:mt-4 text-right">
                        <p className="text-sm sm:text-base">14 July 2023</p>
                    </div>
                    <div className="flex items-center">
                        <button className="mt-3 sm:mt-4 text-black hover:underline flex items-center text-sm sm:text-base" title="ไปยังหนัา...">
                            Read More
                            <Image src={arrow} alt="arrow" width={16} height={8} className="ml-2 sm:w-[20px] sm:h-[10px]" />
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-6 sm:mt-8 md:mt-0 relative flex justify-center px-4 sm:px-0">
                    <Image
                        src={Avatar}
                        alt="KENTECH"
                        className="w-full h-auto z-10 rounded-lg shadow-lg"
                        width={500}
                        height={300}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Page5;
