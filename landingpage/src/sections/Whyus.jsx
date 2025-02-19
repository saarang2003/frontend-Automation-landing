import { ShineBorder } from "@/components/magicui/shine-border";
import { UserRoundCog } from "lucide-react";
import React from "react";


function Whyus() {
  return (
    <div className="flex flex-col w-full justify-between mx-auto p-12 border-2 border-gray-800">
      <h1 className="text-3xl font-inter font-bold text-center">
        Why Choose Us?
      </h1>
      <h1 className="text-xl font-inter tracking-tight text-gray-500 mt-4 text-center">
        Transform Complexity into Simplicity
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 gap-x-6 lg:grid-cols-4  mt-6 w-full justify-center">
  {/* Card 1 */}
  <div className="flex justify-center">
    <ShineBorder className="relative w-[300px] h-[300px] rounded-lg shadow-lg p-0" color={["#A07CFE", "#FE8FB5", "#6046CF"]}>
      <div className="w-full h-full flex flex-col gap-1 text-center p-5 bg-[#F6F7F9] border border-gray-50 rounded-lg shadow-xl">
        <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#6046CF] shadow-lg">
          <UserRoundCog size={30} />
        </div>
        <h1 className="text-left mt-4 text-3xl font-bold font-inter">Custom Built</h1>
        <p className="text-left mt-3 text-slate-700">
          Expertly designed and developed to align with your specific business requirements, ensuring a seamless and efficient workflow.
        </p>
      </div>
    </ShineBorder>
  </div>

  {/* Card 2 */}
  <div className="flex justify-center">
    <ShineBorder className="relative w-[300px] h-[300px] rounded-lg shadow-lg p-0" color={["#A07CFE", "#FE8FB5", "#6046CF"]}>
      <div className="w-full h-full flex flex-col text-center p-5 bg-[#F6F7F9] border border-gray-50 rounded-lg shadow-xl">
        <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#6046CF] shadow-lg">
          <UserRoundCog size={30} />
        </div>
        <h1 className="text-left mt-4 text-3xl font-bold font-inter">Seamless Integration</h1>
        <p className="text-left mt-3 text-slate-700">
          Seamlessly integrates with your current infrastructure, ensuring smooth compatibility.
        </p>
      </div>
    </ShineBorder>
  </div>

  {/* Card 3 */}
  <div className="flex justify-center">
    <ShineBorder className="relative w-[300px] h-[300px] rounded-lg shadow-lg p-0" color={["#A07CFE", "#FE8FB5", "#6046CF"]}>
      <div className="w-full h-full flex flex-col text-center p-5 bg-[#F6F7F9] border border-gray-50 rounded-lg shadow-xl">
        <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#6046CF] shadow-lg">
          <UserRoundCog size={30} />
        </div>
        <h1 className="text-left mt-4 text-3xl font-bold font-inter">Future Proof</h1>
        <p className="text-left mt-3 text-slate-700">
          Engineered for scalability, ensuring seamless adaptation as your business expands, evolves, and reaches new heights of success.
        </p>
      </div>
    </ShineBorder>
  </div>

  {/* Card 4 */}
  <div className="flex justify-center">
    <ShineBorder className="relative w-[300px] h-[300px] rounded-lg shadow-lg p-0" color={["#A07CFE", "#FE8FB5", "#6046CF"]}>
      <div className="w-full h-full flex flex-col text-center p-5 bg-[#F6F7F9] border border-gray-50 rounded-lg shadow-xl">
        <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#6046CF] shadow-lg">
          <UserRoundCog size={30} />
        </div>
        <h1 className="text-left mt-4 text-3xl font-bold font-inter">Expert Team</h1>
        <p className="text-left mt-3 text-slate-700">
          Backed by a history of success, we consistently deliver innovative automation software that enhances efficiency and drives business growth.
        </p>
      </div>
    </ShineBorder>
  </div>
</div>




    </div>
  );
}

export default Whyus;
