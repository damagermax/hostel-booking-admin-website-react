import React, { useState, useRef, useEffect } from "react";
import Checkbox from "./Checkbox";
import InputFiled from "./InputFiled";
import Select from "react-select";
import {
  collection,
  query,
  where,
  setDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firbase/config";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditRoomForm = ({ handelModal, selectedRow }) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const formRef = useRef(null);

  const [room, setRoom] = useState({
    floorOptions: [],
    hostelOptions: [],
    updatatedRoom: {},
  });

  useEffect(() => {
    setRoom({
      ...room,
      number: selectedRow.number,
      price: selectedRow.price,
      capacity: selectedRow.capacity,
      selectedFloor: {
        value: selectedRow.floor,
        label: selectedRow.floor,
      },
      selectedHostel: {
        value: selectedRow.hostel,
        label: selectedRow.hostel,
      },
      selectedGender: {
        value: selectedRow.gender,
        label: selectedRow.gender,
      },
      features: selectedRow.features,
    });
  }, [selectedRow]);

  const resetAllFeild = () => {
    setRoom({
      ...room,
      price: "",
      capacity: "",
      number: "",
      selectedFloor: null,
      selectedGender: null,
      selectedHostel: null,
      floorOptions: [],
      hostelOptions: [],
      features: {},
    });
  };

  const { updatatedRoom, features } = room;

  console.log(features);

  return (
    <div>
      <hr className="my-4" />
      <form id="form" ref={formRef} className="px-4 text-[.8rem] my-8">
        <div className="grid grid-cols-2 gap-3">
          <InputFiled
            placeholder="Room Number"
            name="number"
            isDeisable={isSubmiting}
            value={room.number}
          />
          <InputFiled
            placeholder="(GHS) Price"
            name="price"
            isDeisable={isSubmiting}
            value={room.price}
          />
          <InputFiled
            placeholder="Room Capacity"
            name="number"
            isDeisable={isSubmiting}
            value={room.capacity}
          />
          <Select
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
            placeholder="Select Gender"
            value={room.selectedGender}
            isDisabled={isSubmiting}
            name="flooe"
            onChange={(choice) => {
              setRoom({
                ...room,
                selectedGender: choice,
              });
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 my-2 ">
          <Select
            options={room.hostelOptions}
            placeholder="Select Hotel..."
            value={room.selectedHostel}
            isDisabled={isSubmiting}
            onChange={(choice) => {
              setRoom({
                ...room,
                selectedHostel: choice,
              });
            }}
          />
          <Select
            options={room.floorOptions}
            value={room.selectedFloor}
            isDisabled={isSubmiting}
            onChange={(choice) => {
              setRoom({
                ...room,
                selectedFloor: choice,
              });
            }}
            placeholder="Select Floor..."
          />
        </div>

        <div className="mt-6">
          <Checkbox
            label={"Bunked bed"}
            value={"Bunkedbed"}
            isDeisable={isSubmiting}
            checked={features?.Bunkedbed}
          />
          <Checkbox
            label={"Bathroom"}
            value={"Bathroom"}
            isDeisable={isSubmiting}
            checked={features?.Bathroom}
          />

          <Checkbox
            label={"Wardrobe"}
            value={"Wardrobe"}
            isDeisable={isSubmiting}
            checked={features?.Wardrobe}
          />
          <Checkbox
            label={"Kitchen"}
            value={"Kitchen"}
            isDeisable={isSubmiting}
            checked={features?.Kitchen}
          />
          <Checkbox
            label={"Wifi"}
            value={"Wifi"}
            isDeisable={isSubmiting}
            checked={features?.Wifi}
          />
        </div>
      </form>
      <hr className="my-4" />

      <div className="flex gap-2 justify-end text-[0.8rem] text-white px-6">
        <button
          disabled={isSubmiting}
          onClick={resetAllFeild}
          className="px-4 py-2 bg-gray-500 rounded-[4px] "
        >
          Close
        </button>
        <button
          disabled={isSubmiting}
          form="form"
          formAction="submit"
          className="px-4 py-2 bg-blue-700 rounded-[4px] ease-in-out "
        >
          {isSubmiting ? "Saving room..." : "Add"}
        </button>
      </div>
    </div>
  );
};

export default EditRoomForm;
