import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import HostelForm from "./HostelForm";

const AddHostel = ({ showModal, handelModal }) => {
  return (
    <div>
      <button
        className=" bg-blue-600 text-white py-2 px-3 text-[0.65rem] rounded-md hover:bg-blue-700 "
        onClick={handelModal}
      >
        + add Hostel
      </button>

      <div
        className={
          showModal
            ? "modal w-full h-full absolute inset-0 flex items-center"
            : "hidden"
        }
      >
        <div className="bg-white py-6 w-[400px] border rounded-[4px] mx-auto">
          <div className="grid px-6 grid-cols-2">
            <h2>Add Hostel</h2>
            <AiOutlineClose
              className=" justify-self-end"
              onClick={handelModal}
            />
          </div>

          <HostelForm handelModal={handelModal} />
        </div>
      </div>
    </div>
  );
};

export default AddHostel;
