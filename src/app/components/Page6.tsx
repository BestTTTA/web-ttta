import { FC } from "react";

const Page4: FC = () => {
  return (
    <div className="bg-gray-200" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
      <h1 className="text-4xl font-bold mb-8 ml-14">The Tiger Team Academy</h1>
        <p className="ml-16">
          Lorem ipsum dolor sit amet consectetur. Quis sapien sagittis at mattis ornare eros nec amet aliquet.
          Sit quis nullam viverra sed tempor condimentum vivamus mattis.
        </p>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
    width="500"
    height="300"
    src="https://www.youtube.com/embed/TntfD-GpPd4"
    title="Embedded Video"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>

      </div>
    </div>
  );
};

export default Page4;