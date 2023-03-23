import React from "react";
import BookingCard from "../components/BookingCard";

const Booking = () => {
  return (
    <div>
      <h1 className="mx-3.5 text-2xl mt-4 mb-8">Booking</h1>
      <div className="flex justify-between mx-3.5 my-4 ">
        <div class="relative  w-[30%] ">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            class="bg-white border border-gray-200 text-sm font-normal rounded-sm focus:ring-gray-500  focus:border-gray-500 block w-full pl-10 p-2  "
            placeholder="Search..."
          />
        </div>

        <button className="bg-blue-600 text-xs text-white px-6 rounded-md">
          Export csv
        </button>
      </div>

      <section>
        <BookingCard />
      </section>
    </div>
  );
};

export default Booking;
