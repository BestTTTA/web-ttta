import { FC } from "react";

const Page4: FC = () => {
  return (
    <div className="bg-gray-200" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <h1 className="text-4xl font-bold mb-8 ml-32">The Tiger Team Academy</h1>
        <p className="ml-32">
          Lorem ipsum dolor sit amet consectetur. Quis sapien sagittis at mattis ornare eros nec amet aliquet.
          Sit quis nullam viverra sed tempor condimentum vivamus mattis.
        </p>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/EpldEx6XrAI?list=RDEpldEx6XrAI"
          title="Video"
          style={{ border: 'none' }} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen 
        ></iframe>
      </div>

    </div>
  );
};

export default Page4;