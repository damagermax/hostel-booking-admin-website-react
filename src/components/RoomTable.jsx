import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import { useState } from "react";
import { MdOutlineDeleteForever, MdOutlineModeEdit } from "react-icons/md";
import { doc, deleteDoc } from "firebase/firestore";
import { IoIosBed, IoIosWifi } from "react-icons/io";
import { GiBathtub, GiCookingPot } from "react-icons/gi";
import { tableStyles } from "./TableStyle";
import { toast } from "react-toastify";
import { db } from "../firbase/config";
import EditRoom from "./EditRoom";

const RoomTable = ({ data, loading }) => {
  const [selectedRow, setSelectedRow] = useState({});

  const deleteRoom = async (id) => {
    try {
      await deleteDoc(doc(db, "rooms", `${id}`));
      toast.success("Deleted successful");
    } catch (e) {
      toast.error("sorry something went wrong");
    }
  };

  const [show, setShow] = useState(false);

  const handelModal = () => {
    setShow(!show);
  };

  const fe = data.map((room) => room.features);

  const columns = useMemo(
    () => [
      {
        name: "Room No.",
        selector: (row) => `Rm ${row.number} - ${row.floor}`,
        sortable: true,
      },
      {
        name: "Hostel",
        selector: (row) => row.hostel,
        sortable: true,
        style: {
          color: "rgba(0,0,0,.54)",
        },
      },
      {
        name: "Type",
        selector: (row) => `${row.capacity} in a room`,
        sortable: true,
        style: {
          color: "rgba(0,0,0,.54)",
        },
      },
      {
        name: "Beds left",
        selector: (row) => row.bedsleft,
        sortable: true,
        style: {
          color: "rgba(0,0,0,.54)",
        },
      },
      {
        name: "Gender",
        selector: (row) => row.gender,
        sortable: true,
        style: {
          color: "rgba(0,0,0,.54)",
        },
      },
      {
        name: "Facitlities",
        cell: () => (
          <div className="grid grid-cols-4 gap-2 items-center">
            <GiBathtub className=" bg-neutral-200  text-gray-700 rounded-sm w-[20px] h-[20px] p-[3px]" />
            <GiCookingPot className=" bg-neutral-200  text-gray-700 rounded-sm w-[20px] h-[20px] p-[3px]" />
            <IoIosWifi className=" bg-neutral-200  text-gray-700 rounded-sm w-[20px] h-[20px] p-[3px]" />
            <IoIosBed className=" bg-neutral-200  text-gray-700 rounded-sm w-[20px] h-[20px] p-[3px]" />
          </div>
        ),
      },
      {
        cell: (row) => (
          <div className="flex gap-2  text-white">
            <MdOutlineModeEdit
              className="bg-blue-400 rounded-sm w-[20px] h-[20px] p-[3px]"
              onClick={() => {
                setSelectedRow({ ...row });
                handelModal();
              }}
            />
            <MdOutlineDeleteForever
              onClick={() => {
                deleteRoom(row.id);
              }}
              className="bg-red-400 rounded-sm w-[20px] h-[20px] p-[3px]"
            />
          </div>
        ),
        button: true,
      },
    ],
    []
  );

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        pagination={data.length > 10}
        progressPending={loading}
        customStyles={tableStyles}
      ></DataTable>

      <EditRoom
        handelModal={handelModal}
        show={show}
        selectedRow={selectedRow}
      />
    </div>
  );
};

export default RoomTable;
