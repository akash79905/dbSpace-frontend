import OfficeMap from "./office";
import React, { useEffect, useState } from "react";
import "../App.css";

function Map() {
  const data = [
    {
      id: 1,
      chairDirection: "east",
      x: 1,
      y: 1,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "laptop", specification: "Laptop Dell Inspiron 15 5000" },
        // { type: "phone", specification: "Cisco Phone IP 7960G/7940G" },
        { type: "chair-na", specification: "817L Kare Ergonomic Office Chair" },
        // { type: "drawer", specification: "Simple drawer" },
        { type: "Booking Status", specification: "Booked" },
      ],
    },
    {
      id: 2,
      chairDirection: "east",
      x: 1,
      y: 3,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        // {
        //   type: "cpu",
        //   specification: "Dual core 2.4 GHz, 16 GB RAM, 256 GB HD",
        // },
        // { type: "monitor", specification: "HP V197 18.5-inch" },
        // { type: "keyboard", specification: "HP Ultrathin Wireless Keyboard" },
        // { type: "phone", specification: "Cisco Phone IP 7960G/7940G" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        // { type: "mouse", specification: "HP USB 2 Button Optical Mouse" },
        // { type: "drawer", specification: "Simple drawer" },
        { type: "Booking Status", specification: "Vacant" },
      ],
    },
    {
      id: 3,
      chairDirection: "east",
      x: 1,
      y: 5,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        {
          type: "cpu",
          specification: "Dual core 2.4 GHz, 16 GB RAM, 256 GB HD",
        },
        { type: "monitor", specification: "HP V197 18.5-inch" },
        { type: "keyboard", specification: "HP Ultrathin Wireless Keyboard" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "mouse", specification: "HP USB 2 Button Optical Mouse" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 4,
      chairDirection: "west",
      x: 3,
      y: 1,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "laptop", specification: "Laptop Dell Inspiron 15 5000" },
        { type: "phone", specification: "Cisco Phone IP 7960G/7940G" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 5,
      chairDirection: "west",
      x: 3,
      y: 3,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "laptop", specification: "Laptop Dell Inspiron 15 5000" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 6,
      chairDirection: "west",
      x: 3,
      y: 5,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 7,
      chairDirection: "east",
      x: 5,
      y: 1,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "laptop", specification: "Laptop Dell Inspiron 15 5000" },
        // { type: "phone", specification: "Cisco Phone IP 7960G/7940G" },
        { type: "chair-na", specification: "817L Kare Ergonomic Office Chair" },
        // { type: "drawer", specification: "Simple drawer" },
        { type: "Booking Status", specification: "Booked" },
      ],
    },
    {
      id: 8,
      chairDirection: "east",
      x: 5,
      y: 3,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        // {
        //   type: "cpu",
        //   specification: "Dual core 2.4 GHz, 16 GB RAM, 256 GB HD",
        // },
        // { type: "monitor", specification: "HP V197 18.5-inch" },
        // { type: "keyboard", specification: "HP Ultrathin Wireless Keyboard" },
        // { type: "phone", specification: "Cisco Phone IP 7960G/7940G" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        // { type: "mouse", specification: "HP USB 2 Button Optical Mouse" },
        // { type: "drawer", specification: "Simple drawer" },
        { type: "Booking Status", specification: "Vacant" },
      ],
    },
    {
      id: 9,
      chairDirection: "east",
      x: 5,
      y: 5,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        {
          type: "cpu",
          specification: "Dual core 2.4 GHz, 16 GB RAM, 256 GB HD",
        },
        { type: "monitor", specification: "HP V197 18.5-inch" },
        { type: "keyboard", specification: "HP Ultrathin Wireless Keyboard" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "mouse", specification: "HP USB 2 Button Optical Mouse" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 10,
      chairDirection: "west",
      x: 7,
      y: 1,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "laptop", specification: "Laptop Dell Inspiron 15 5000" },
        { type: "phone", specification: "Cisco Phone IP 7960G/7940G" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 11,
      chairDirection: "west",
      x: 7,
      y: 3,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "laptop", specification: "Laptop Dell Inspiron 15 5000" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 12,
      chairDirection: "west",
      x: 7,
      y: 5,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 13,
      chairDirection: "east",
      x: 9,
      y: 1,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "laptop", specification: "Laptop Dell Inspiron 15 5000" },
        // { type: "phone", specification: "Cisco Phone IP 7960G/7940G" },
        { type: "chair-na", specification: "817L Kare Ergonomic Office Chair" },
        // { type: "drawer", specification: "Simple drawer" },
        { type: "Booking Status", specification: "Booked" },
      ],
    },
    {
      id: 14,
      chairDirection: "east",
      x: 9,
      y: 3,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        // {
        //   type: "cpu",
        //   specification: "Dual core 2.4 GHz, 16 GB RAM, 256 GB HD",
        // },
        // { type: "monitor", specification: "HP V197 18.5-inch" },
        // { type: "keyboard", specification: "HP Ultrathin Wireless Keyboard" },
        // { type: "phone", specification: "Cisco Phone IP 7960G/7940G" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        // { type: "mouse", specification: "HP USB 2 Button Optical Mouse" },
        // { type: "drawer", specification: "Simple drawer" },
        { type: "Booking Status", specification: "Vacant" },
      ],
    },
    {
      id: 15,
      chairDirection: "east",
      x: 9,
      y: 5,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        {
          type: "cpu",
          specification: "Dual core 2.4 GHz, 16 GB RAM, 256 GB HD",
        },
        { type: "monitor", specification: "HP V197 18.5-inch" },
        { type: "keyboard", specification: "HP Ultrathin Wireless Keyboard" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "mouse", specification: "HP USB 2 Button Optical Mouse" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 16,
      chairDirection: "west",
      x: 11,
      y: 1,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "laptop", specification: "Laptop Dell Inspiron 15 5000" },
        { type: "phone", specification: "Cisco Phone IP 7960G/7940G" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 17,
      chairDirection: "west",
      x: 11,
      y: 3,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "laptop", specification: "Laptop Dell Inspiron 15 5000" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 18,
      chairDirection: "west",
      x: 11,
      y: 5,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
  ];

  const [tables, updateTables] = useState(data);

  return (
    <div className="map">
      <OfficeMap
        data={tables}
        onSelect={(desk) => {
          console.log(desk);

          const arr = [];
          tables.forEach((t) => {
            if (t.id === desk.id) {
              t.equipments.forEach((e) => (e.type === "chair" ? (e.type = "chair-na") : null));
            }
            arr.push(t);
          });

          updateTables(arr);
        }}
        editMode={true}
        showNavigator={true}
        horizontalSize={5}
        verticalSize={3}
      />
    </div>
  );
}

export default Map;
