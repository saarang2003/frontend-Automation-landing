import { ShineBorder } from "@/components/magicui/shine-border";
import React from "react";

function Contact() {
  return (
    <div id="contact" className="flex flex-col md:flex-row w-full justify-between mx-auto p-12 ">
      {/* Left Content (Headings) */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl mt-4 font-bold">
          Ready to Automate Your Success?
        </h1>
        <h1 className="text-sm text-[#302D2D] mt-2">
          Let's build the future of your business together
        </h1>
      </div>

      {/* Right Content (Form) */}
      <div className="md:w-1/2 mt-6 md:mt-0">
      <h1 className="text-left  text-2xl md:text-center  text-[#302D2D]  md:text-3xl font-inter font-bold">Enter Your Details</h1>
        <form action="post" className="flex flex-col">
          <input
            type="text"
            placeholder="Enter your full Name"
            className="w-full border-2 border-[#A07CFE] bg-white text-[#D3CDF9] rounded-full p-4 mt-6"
          />

          <input
            type="text"
            placeholder="Enter your email"
            className="w-full border-2  border-[#A07CFE] bg-white text-[#D3CDF9] rounded-full p-4 mt-6"
          />

          {/* Button: Centered on small screens, Left-aligned on md+ */}
          <div className="flex justify-center md:justify-start w-full">
            <button
              type="button"
              className="text-white bg-[#D3CDF9] hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center mt-6"
            >
              <p className="text-[#6046CF] hover:text-white">
                Schedule A Call Now
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;


