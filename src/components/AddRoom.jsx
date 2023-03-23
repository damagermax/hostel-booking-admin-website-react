import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import RoomForm from "./RoomForm";
const AddRoom = ({ showModal, handelModal }) => {
  return (
    <div>
      <button
        className=" bg-blue-600 text-white py-2 px-3 text-[0.75rem] rounded-md hover:bg-blue-700 "
        onClick={handelModal}
      >
        + Add Room
      </button>

      <div
        className={
          showModal
            ? "modal w-full h-full absolute inset-0 flex items-center"
            : "hidden"
        }
      >
        <div className="bg-white py-6 w-[500px] border rounded-[4px] mx-auto">
          <div className="grid px-6 grid-cols-2">
            <h2>Add Room</h2>
            <AiOutlineClose
              className=" justify-self-end"
              onClick={handelModal}
            />
          </div>
          <RoomForm handelModal={handelModal} />
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
