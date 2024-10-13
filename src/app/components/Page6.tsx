import { FC } from "react";

const Page4: FC = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-between p-0">
      <div className="flex-1 pr-5">
        <h1 className="text-4xl font-bold mb-8 ml-32">The Tiger Team Academy</h1>
        <p className="ml-32">
          Lorem ipsum dolor sit amet consectetur. Quis sapien sagittis at mattis ornare eros nec amet aliquet.
          Sit quis nullam viverra sed tempor condimentum vivamus mattis.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/EpldEx6XrAI?list=RDEpldEx6XrAI"
          title="Video"
          className="border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
};

export default Page4;