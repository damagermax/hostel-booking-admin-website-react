import { useMemo } from "react";

export const roomColumns = useMemo(
  () => [
    {
      name: "Room No.",
      selector: (row) => row.room,
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
      selector: (row) => row.type,
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
      selector: (row) => row.facilities,
      style: {
        color: "rgba(0,0,0,.54)",
      },
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
  ],
  []
);
