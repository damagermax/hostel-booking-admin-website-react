import React, { useState } from "react";
import AddHostel from "../components/AddHostel";
import DataTable from "react-data-table-component";
import { MdOutlineModeEdit, MdOutlineDeleteForever } from "react-icons/md";

import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firbase/config";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Hostels = () => {
  const [showModal, setShowModal] = useState(false);

  const handelModal = () => {
    setShowModal(!showModal);
  };

  // get all hostels
  const hostelQuery = query(collection(db, "rooms"), orderBy("block"));
  const [roomDocs, loading, error] = useCollectionData(hostelQuery);
  console.log(roomDocs);

  const col = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "No. of Rooms",
      selector: (row) => row.rooms,
      sortable: true,
    },
    {
      name: "No. of Beds",
      selector: (row) => row.beds,
      sortable: true,
    },
    {
      name: "Floors",
      selector: (row) => row.floors,
      sortable: true,
    },
    {
      cell: () => (
        <div className="flex gap-2  text-white">
          <MdOutlineModeEdit className="bg-blue-400 rounded-sm w-[20px] h-[20px] p-[3px]" />
          <MdOutlineDeleteForever className="bg-red-400 rounded-sm w-[20px] h-[20px] p-[3px]" />
        </div>
      ),
      button: true,
      ignoreRowClick: true,
    },
  ];

  const data = [
    {
      id: 2,
      name: "Main Block",
      rooms: 200,
      beds: "400 ",
      floors: "5",
    },
    {
      id: 2,
      name: "Main Block",
      rooms: 200,
      beds: "400 ",
      floors: "5",
    },
    {
      id: 2,
      name: "Main Block",
      rooms: 200,
      beds: "400 ",
      floors: "5",
    },
  ];
  return (
    <div className="bg-white border">
      <div className="flex justify-between items-center px-4">
        <p className="py-4">Hostels</p>
        <AddHostel showModal={showModal} handelModal={handelModal} />
      </div>

      <DataTable columns={col} data={data}></DataTable>
    </div>
  );
};

export default Hostels;
