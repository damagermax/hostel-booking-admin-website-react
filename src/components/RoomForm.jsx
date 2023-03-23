import React, { useRef, useState } from "react";
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
import Checkbox from "./Checkbox";
import InputFiled from "./InputFiled";

const RoomForm = ({ handelModal }) => {
  const [floorOptions, setFloorOptions] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedHostel, setSelectedHostel] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [room, setRoom] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);
  const formRef = useRef(null);

  // get hostel data
  const [hostelDoc, loading, error] = useCollectionData(
    collection(db, "hostels")
  );

  const hostelsOption = [
    hostelDoc?.map((data) => ({
      value: data.name,
      label: data.name,
    })),
  ];

  // get selected hotel floors
  const GetFloors = async (hostel) => {
    setSelectedFloor(null);
    setSelectedHostel({ value: hostel, label: hostel });

    setRoom({
      ...room,
      hostel: hostel,
    });

    const floorQuery = query(
      collection(db, "hostels"),
      where("name", "==", `${hostel}`)
    );

    try {
      const floorSnapshot = await getDocs(floorQuery);
      const data = floorSnapshot.docs.map((doc) => ({
        floors: doc.data().floors,
      }));

      const numOfFloor = data[0] ? data[0]["floors"] : null;
      const options = generateHostelFloors(numOfFloor);
      setFloorOptions(options);
    } catch (e) {
      console.log(e);
    }
  };

  // generate hostel floors with ordinal position [st, nd,rd th]
  const generateHostelFloors = (numOfFloors) => {
    if (numOfFloors === 0) {
      return [
        {
          value: "Ground floor",
          label: "Ground floor",
        },
      ];
    }

    const suffixes = {
      0: "Ground ",
      1: "st ",
      2: "nd ",
      3: "rd  ",
    };
    const arr = [""];
    const result = [];
    for (let i = 0; i < numOfFloors; i++) {
      arr.push(i + 1);
      const num = arr[i];
      const suffix = suffixes[i + 0] || "th  ";
      result.push(`${num}${suffix} floor`);
    }

    return result.map((d) => ({ value: d, label: d }));
  };

  // create room object
  const createRoom = (e) => {
    e.preventDefault();

    if (!selectedFloor || !selectedGender || !selectedHostel) {
      toast.error("Please fill in all fields");
      return;
    }
    const newRoom = {
      ...room,
      ["number"]: e.target[0].value,
      ["price"]: e.target[1].value,
      ["capacity"]: e.target[2].value,
      ["bedsleft"]: e.target[2].value,
      ["features"]: {
        Bathroom: e.target[6].checked,
        Bunkedbed: e.target[7].checked,
        Kitchen: e.target[8].checked,
        Wardrobe: e.target[9].checked,
        Wifi: e.target[10].checked,
      },
    };

    setRoom(newRoom);
    SaveRoomToDb(newRoom);
  };

  // save roomObject to database
  const SaveRoomToDb = async (newRoom) => {
    setIsSubmiting(true);
    try {
      const roomRef = doc(collection(db, "rooms"));
      await setDoc(roomRef, { ...newRoom, id: roomRef.id });
      toast.success("Data saved successful");
      resetFields();
      setIsSubmiting(false);
    } catch (e) {
      toast.error("Sorry somthing went wrong");
      setIsSubmiting(false);
    }
  };

  const resetFields = () => {
    formRef.current.reset();
    setSelectedHostel(null);
    setSelectedGender(null);
    setSelectedFloor(null);
    setRoom(null);
  };

  return (
    <div>
      <hr className="my-4" />
      <form
        id="form"
        onSubmit={createRoom}
        ref={formRef}
        className="px-4 text-[.8rem] my-8"
      >
        <div className="grid grid-cols-2 gap-3">
          <InputFiled
            placeholder="Room Number"
            name="number"
            isDeisable={isSubmiting}
          />
          <InputFiled
            placeholder="(GHS) Price"
            name="price"
            isDeisable={isSubmiting}
          />
          <InputFiled
            placeholder="Room Capacity"
            name="number"
            isDeisable={isSubmiting}
          />
          <Select
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
            placeholder="Select Gender"
            value={selectedGender}
            isDisabled={isSubmiting}
            onChange={(choice) => {
              setSelectedGender({ value: choice.value, label: choice.value });
              setRoom({ ...room, ["gender"]: choice.value });
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 my-2 ">
          <Select
            options={hostelsOption[0]}
            placeholder="Select Hotel..."
            value={selectedHostel}
            isDisabled={isSubmiting}
            onChange={(choice) => {
              GetFloors(choice.value);
            }}
          />
          <Select
            options={floorOptions}
            value={selectedFloor}
            isDisabled={isSubmiting}
            onChange={(choice) => {
              setRoom({ ...room, floor: choice.value });
              setSelectedFloor({ value: choice.value, label: choice.value });
            }}
            placeholder="Select Floor..."
          />
        </div>

        <div className="mt-6">
          <Checkbox
            label={"Bunked bed"}
            value={"bunkedbed"}
            isDeisable={isSubmiting}
          />
          <Checkbox
            label={"Bathroom"}
            value={"Bathroom"}
            isDeisable={isSubmiting}
          />

          <Checkbox
            label={"Wardrobe"}
            value={"Wardrobe"}
            isDeisable={isSubmiting}
          />
          <Checkbox
            label={"Kitchen"}
            value={"Kitchen"}
            isDeisable={isSubmiting}
          />
          <Checkbox label={"Wifi"} value={"Wifi"} isDeisable={isSubmiting} />
        </div>
      </form>
      <hr className="my-4" />

      <div className="flex gap-2 justify-end text-[0.8rem] text-white px-6">
        <button
          disabled={isSubmiting}
          onClick={handelModal}
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

export default RoomForm;
