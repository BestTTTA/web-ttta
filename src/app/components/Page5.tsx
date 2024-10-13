import { FC } from "react";
import Image from "next/image";
import Avatar from "./image/Palm.jpg";
import arrow from "./image/Arrow.png";

const Page5: FC = () => {
    return (
        <div className="container mx-auto px-16 py-16 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center mb-8">
                <div className="flex items-center mb-8">
                </div>
            </div>
            <div className="flex flex-col md:flex-row max-w-7xl">
                <div className="md:w-1/2 mt-8 md:mt-0 md:mr-16">
                    <h1 className="text-4xl font-bold mb-4 text-center">TOKAMAK</h1>
                    <div className="text-orange-500 text-3xl font-bold text-right">-----</div>
                    <p className="text-gray-700 mb-8">
                        Lorem Ipsum Dolor Sit Amet Consectetur. Viae Arcu Maecenas Eu <br />
                        Lacus Donec Risus Eu. Placerat Nisl Turpis Neque Sed. A Ullamcorper. <br />
                        Fringilla Lacus In Interdum Tirtique Molestie Commodo Ullamcorper. <br />
                        Tellus Fermentum Ullamcorper Venenatis Praesent Neque Dapibus
                        Cursus Fames Eget. At Nunc Maecenas Et Pretium Risus Sed.
                    </p>
                    <div className="text-gray-400 mt-4 text-right">
                        <p>14 July 2023</p>
                    </div>
                    <div className="flex items-center">
                        <button className="mt-4 text-black hover:underline flex items-center" title="ไปยังหนัา...">
                            Read More
                            <Image src={arrow} alt="arrow" width={20} height={10} className="ml-2" />
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center">
                    <Image
                        src={Avatar}
                        alt="KENTECH"
                        objectFit="cover"
                        className="w-full h-auto z-10"
                    />
                </div>
            </div>
        </div>
    );
};

export default Page5;
