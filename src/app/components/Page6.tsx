import { FC } from "react";

const Page4: FC = () => {
  return (
    <div className="bg-gray-200 flex flex-col md:flex-row items-center justify-between p-4 md:p-0">
      <div className="w-full md:flex-1 px-4 md:pr-5">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center md:text-left md:ml-32">
          The Tiger Team Academy
        </h1>
        <p className="text-sm md:text-base text-center md:text-left md:ml-32 mb-6 md:mb-0">
          Lorem ipsum dolor sit amet consectetur. Quis sapien sagittis at mattis ornare eros nec amet aliquet.
          Sit quis nullam viverra sed tempor condimentum vivamus mattis.
        </p>
      </div>
      <div className="w-full md:flex-1 flex justify-center items-center">
        <div className="w-full max-w-[500px] aspect-video">
          <iframe
            className="w-full h-full border-none"
            src="https://www.youtube.com/embed/EpldEx6XrAI?list=RDEpldEx6XrAI"
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page4;