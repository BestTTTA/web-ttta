import { FC } from "react";

const Page7: FC = () => {
  return (
    <div className="container mx-auto text-center py-10">
      {/* ส่วนหัวของหน้า */}
      <div className="mb-10">
        <div className="w-6 h-6 bg-orange-500 mx-auto mb-4"></div> {/* ไอคอนสีส้มด้านบน */}
        <h1 className="text-3xl font-bold">WHAT DO WE OFFER FOR YOU?</h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      
      {/* ส่วนของบริการ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service 1 */}
        <div className="text-center">
          <img src="/path-to-entrepreneur-icon.png" alt="Entrepreneur" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Entrepreneur</h3>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Service 2 */}
        <div className="text-center">
          <img src="/path-to-education-icon.png" alt="Education" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Education</h3>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Service 3 */}
        <div className="text-center">
          <img src="/path-to-secure-icon.png" alt="Secure" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Secure</h3>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Service 4 */}
        <div className="text-center">
          <img src="/path-to-giving-icon.png" alt="Endless Giving" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Endless Giving</h3>
          <p className="text-red-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Page7;
