import React, { useState } from "react";
import Hostels from "../components/Hostels";
import Navbar from "../components/Navbar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import BookingCard from "../components/BookingCard";

const FeeCollection = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],

        borderWidth: 0,
      },
    ],
  };
  return (
    <div className=" bg-white   border">
      <p className="p-4">Fees collection</p>
      <hr />

      <div className="flex mt-10 items-center gap-6 p-3.5">
        <div className="w-[170px] h-[170px]">
          <Doughnut data={data} />
        </div>

        <div>
          <div className="grid grid-cols-3 gap-6 text-[.75rem]  ">
            <div>
              <p>Expected</p>
              <p className="text-[1.1rem]">$ 300000</p>
            </div>

            <div>
              <p>Collected</p>
              <p className="text-[1.1rem] text-sky-500">$ 300000</p>
            </div>

            <div>
              <p>Remaining</p>
              <p className="text-[1.1rem] text-rose-500">$ 300000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Analytics = () => {
  return (
    <div className="m-4">
      <div className="grid grid-cols-2 gap-2 my-8">
        <FeeCollection />
        <Hostels />
      </div>

      <div className="border">
        <BookingCard />
      </div>
    </div>
  );
};

export default Analytics;
