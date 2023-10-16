import React from "react";
import { FaUser, FaComments, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

async function suggestionsFormAction(data:FormData){
  "use server"
  console.log(data)
  const formDataObject:{ [key: string]: string } = {};

  for (let pair of data.entries()) {
    const key = pair[0];
    const value = pair[1];
    formDataObject[key] = typeof value === 'string' ? value : '';
  }

  console.log(formDataObject)
}

function Suggestion() {
  return (
    <div className="p-6 rounded-lg max-w-lg lg:max-w-lg mx-auto min-h-full flex flex-col mt-14 items-center">
      <div className="text-center mb-6 flex flex-col items-center ">
        <FaUser className="text-pink-500 text-5xl mb-2 border rounded-full border-pink-100" />
        <h2 className="text-xl font-semibold text-ellipsis whitespace-nowrap">Provide Your Suggestion</h2>
        <p className="text-sm font-mono mt-2 text-gray-500 tracking-wide px-5">
          I am always looking for ways to improve UEAB tools App. If you have
          any suggestions, please let me know.
        </p>
      </div>
      <form action={suggestionsFormAction} className="w-full flex items-center flex-col">
        <div className="mb-4 w-[80%]">
          <label className='ml-6 whitespace-nowrap' htmlFor="name">Your Name</label>
          <div className="flex items-center">
            <FaUser className="text-pink-500 text-lg mr-2" />
            <input
            name="name"
              type="text"
              id="name"
              placeholder="Enter your name"
              className="flex-1 py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
            />
          </div>
        </div>
        
        <div className="mb-4 w-[80%]">
          <label className="ml-6 whitespace-nowrap" htmlFor="whatsapp">WhatsApp Number</label>
          <div className="flex items-center">
            <FaWhatsapp className="text-pink-500 text-lg mr-2" />
            <input
            name="whatsappNumber"
              type="text"
              id="whatsapp"
              placeholder="Enter your WhatsApp number"
              className="flex-1 py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
            />
          </div>
        </div>

        <div className="mb-4 w-[80%]">
          <label className="ml-6 whitespace-nowrap" htmlFor="suggestion">Your Suggestion</label>
          <div className="flex items-center">
            <FaComments className="text-pink-500 text-lg mr-2" />
            <textarea
            name="suggestion"
              id="suggestion"
              placeholder="Enter your suggestion..."
              className="flex-1 py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-black-500 flex items-center w-full"
          >
            <FaPaperPlane className="mr-2" />
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Suggestion;
