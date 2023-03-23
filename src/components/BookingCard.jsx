import React from "react";

import { FaRegBuilding } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { tableStyles } from "./TableStyle";

const BookingCard = () => {
  const col = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Room No.",
      selector: (row) => row.room,
      sortable: true,
      style: {
        color: "rgba(0,0,0,.54)",
      },
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
      name: "Tel",
      selector: (row) => row.tel,

      style: {
        color: "rgba(0,0,0,.54)",
      },
    },

    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
      style: {
        color: "rgba(0,0,0,.54)",
      },
    },
    {
      name: "Amount",
      selector: (row) => row.price,
      sortable: true,
      style: {
        color: "rgba(0,0,0,.54)",
      },
    },
  ];

  const data = [
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
    {
      id: 2,
      name: "Maxwell Takyi",
      hostel: "Main Block ",
      room: "RM 20",
      tel: "024 6624 593",
      date: "02-07-2030",
      price: "GH 300",
    },
  ];
  return (
    <div className="bg-white">
      <DataTable
        columns={col}
        data={data}
        customStyles={tableStyles}
        pagination={true}
      ></DataTable>
    </div>
  );
};

export default BookingCard;
