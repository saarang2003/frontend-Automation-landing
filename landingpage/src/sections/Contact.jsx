import React from "react";

function Contact() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between mx-auto p-12 border-2 border-gray-400">
      {/* Left Content (Headings) */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-inter mt-4 font-bold">
          Ready to Automate Your Success?
        </h1>
        <h1 className="text-xl mt-2">
          Let's build the future of your business together
        </h1>
      </div>

      {/* Right Content (Form) */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <form action="post" className="flex flex-col">
          <input
            type="text"
            placeholder="Enter your full Name"
            className="w-full border-2 border-gray-500 bg-[#D9D9D9] text-[#302D2D] rounded-full p-4 mt-6"
          />
          <input
            type="text"
            placeholder="Enter your full Name"
            className="w-full border-2 border-gray-500 bg-[#D9D9D9] text-[#302D2D] rounded-full p-4 mt-6"
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
