import React from "react";
import { useState } from "react";
import "../App.css";
import dateFormat from "dateformat";
import BookingItemCard from "./BookingItemCard";
import Booking from "./Booking";
import Information from "./Information";
import Map from "./Map";

function Homepage() {
  return (
    <div className="row pt-5 justify-content-center">
      <div className="col-3 pr-3 ">
        <Information />
      </div>
      <div style={{ width: "10px" }} />

      <div className="col-8 mr-3">
        <Booking />
        <Map />
      </div>
    </div>
  );
}

export default Homepage;
