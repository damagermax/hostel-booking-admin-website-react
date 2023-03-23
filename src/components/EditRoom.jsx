import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import EditRoomForm from "./EditRoomForm";

const EditRoom = ({ handelModal, show, selectedRow }) => {
  return (
    <div>
      <div
        className={
          show
            ? "modal w-full h-full absolute inset-0 flex items-center"
            : "hidden"
        }
      >
        <div className="bg-white py-6 w-[500px] border rounded-[4px] mx-auto">
          <div className="grid px-6 grid-cols-2">
            <h2>Update Room</h2>
            <AiOutlineClose
              className=" justify-self-end"
              onClick={handelModal}
            />
          </div>

          <EditRoomForm handelModal={handelModal} selectedRow={selectedRow} />
        </div>
      </div>
    </div>
  );
};

export default EditRoom;
