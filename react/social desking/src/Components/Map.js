import OfficeMap from "./office";
import React, { useState } from "react";
import "../App.css";

function Map() {
  const data = [
    {
      id: 1,
      chairDirection: "south",
      x: 0,
      y: 0,
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
      chairDirection: "south",
      x: 1,
      y: 0,
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
      chairDirection: "south",
      x: 2,
      y: 0,
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
      chairDirection: "south",
      x: 3,
      y: 0,
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
      x: 0,
      y: 1,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "laptop", specification: "Laptop Dell Inspiron 15 5000" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 6,
      chairDirection: "east",
      x: 1,
      y: 1,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 7,
      chairDirection: "north-west",
      x: 2,
      y: 1,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        {
          type: "cpu",
          specification: "Dual core 2.4 GHz, 8 GB RAM, 512 GB HD",
        },
        { type: "monitor", specification: "HP V197 18.5-inch" },
        { type: "keyboard", specification: "HP Ultrathin Wireless Keyboard" },
        { type: "phone", specification: "Cisco Phone IP 7960G/7940G" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 8,
      chairDirection: "north-east",
      x: 3,
      y: 1,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "laptop", specification: "Laptop Dell Inspiron 15 5000" },
        { type: "chair-na", specification: "817L Kare Ergonomic Office Chair" },
      ],
    },
    {
      id: 9,
      chairDirection: "west",
      x: 0,
      y: 2,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 10,
      chairDirection: "east",
      x: 1,
      y: 2,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        { type: "monitor", specification: "HP V197 18.5-inch" },
        { type: "desktop", specification: "HP CPU, keyboard and mouse" },
        { type: "phone", specification: "Cisco Phone IP 7960G/7940G" },
        { type: "chair-na", specification: "817L Kare Ergonomic Office Chair" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 11,
      chairDirection: "south-west",
      x: 2,
      y: 2,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        {
          type: "cpu",
          specification: "Dual core 2.4 GHz, 16 GB RAM, 256 GB HD",
        },
        { type: "monitor", specification: "HP V197 18.5-inch" },
        { type: "keyboard", specification: "HP Ultrathin Wireless Keyboard" },
        { type: "phone", specification: "Cisco Phone IP 7960G/7940G" },
        { type: "chair", specification: "817L Kare Ergonomic Office Chair" },
        { type: "mouse", specification: "HP USB 2 Button Optical Mouse" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 12,
      chairDirection: "south-east",
      x: 3,
      y: 2,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        {
          type: "cpu",
          specification: "Dual core 2.4 GHz, 16 GB RAM, 256 GB HD",
        },
        { type: "monitor", specification: "HP V197 18.5-inch" },
        { type: "keyboard", specification: "HP Ultrathin Wireless Keyboard" },
        { type: "chair-na", specification: "817L Kare Ergonomic Office Chair" },
        { type: "mouse", specification: "HP USB 2 Button Optical Mouse" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 13,
      chairDirection: "south-east",
      x: 13,
      y: 2,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        {
          type: "cpu",
          specification: "Dual core 2.4 GHz, 16 GB RAM, 256 GB HD",
        },
        { type: "monitor", specification: "HP V197 18.5-inch" },
        { type: "keyboard", specification: "HP Ultrathin Wireless Keyboard" },
        { type: "chair-na", specification: "817L Kare Ergonomic Office Chair" },
        { type: "mouse", specification: "HP USB 2 Button Optical Mouse" },
        { type: "drawer", specification: "Simple drawer" },
      ],
    },
    {
      id: 14,
      chairDirection: "south-east",
      x: 3,
      y: 12,
      equipments: [
        { type: "desk", specification: "Simple desk" },
        {
          type: "cpu",
          specification: "Dual core 2.4 GHz, 16 GB RAM, 256 GB HD",
        },
        { type: "monitor", specification: "HP V197 18.5-inch" },
        { type: "keyboard", specification: "HP Ultrathin Wireless Keyboard" },
        { type: "chair-na", specification: "817L Kare Ergonomic Office Chair" },
        { type: "mouse", specification: "HP USB 2 Button Optical Mouse" },
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
        onMove={console.log}
        editMode={true}
        showNavigator={true}
        horizontalSize={5}
        verticalSize={3}
      />
    </div>
  );
}

export default Map;
