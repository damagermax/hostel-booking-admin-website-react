import { collection, addDoc } from "firebase/firestore";
import { db } from "../firbase/config";
import { useState } from "react";

const HostelForm = ({ handelModal }) => {
  const [showFloor, setShowFloor] = useState(false);
  const handelShowFloor = (e) => {
    e.preventDefault();
    setShowFloor(!showFloor);
  };

  const createHotel = async (event) => {
    event.preventDefault();

    const hostel = {
      name: event.target[0].value,
      floors: event.target[2].value ? Number(event.target[2].value) : 0,
    };

    SaveToDb(event, hostel);
  };

  const SaveToDb = async (event, data) => {
    try {
      const hostelRef = await addDoc(collection(db, "hostels"), data);
      event.target[0].value = "";
      event.target[2].value = "";

      handelModal();
    } catch (e) {}
  };

  return (
    <div>
      <hr className="my-4" />
      <form
        onSubmit={createHotel}
        id="form"
        className="grid   text-[0.8rem] px-6"
      >
        <input
          type="text"
          placeholder="Name of Hostel"
          required
          className="bg-gray-200 p-2 rounded-[4px] "
        ></input>

        <button
          onClick={handelShowFloor}
          className=" justify-self-start text-blue-500 mt-2"
        >
          Add floor
        </button>
        <input
          type="number"
          min="0"
          max="15"
          placeholder="Number of Floors"
          className={
            showFloor ? "bg-gray-200 p-2 rounded-[4px] w-[50%] mt-4" : "hidden"
          }
        ></input>
      </form>
      <hr className="my-4" />
      <div className="flex gap-2 justify-end text-[0.8rem] text-white px-6">
        <button
          onClick={handelModal}
          className="px-4 py-2 bg-gray-500 rounded-[4px] "
        >
          Close
        </button>
        <button
          form="form"
          formAction="submit"
          className="px-4 py-2 bg-blue-700 rounded-[4px] "
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default HostelForm;
