import React from "react";
import "../App.css";
import Map from "./Map";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useState } from "react";

function Booking() {
  const officesRegions = ["Yerwada", "Magarpatta", "Mumbai", "Pune"];
  const floors = [1, 2, 3, 4, 5, 6];

  const [searchDetails, setSearchDetails] = useState({
    date: "",
    officeRegion: "",
    floor: 0,
    days: 0,
  });

  const SubmitHandle = (e) => {
    console.log("called");
    alert(JSON.stringify(searchDetails));
    console.log(searchDetails);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setSearchDetails({ ...searchDetails, [name]: value });
  };

  return (
    <div>
      <div style={{ height: "100px" }}>
        <form className="row mt-5">
          <div className="col">
            <label htmlFor="date" className="d-block text-secondary mb-2 bold">
              DATE
            </label>
            <input className="bold" style={{ width: "100%" }} value={searchDetails.date} onChange={handleInput} type="date" name="date" id="date" />
          </div>

          <div className="col">
            <label htmlFor="officeRegion" className="d-block text-secondary mb-2 bold ">
              OFFICE
            </label>
            <input className="bold" type="dropdown" value={searchDetails.officeRegion} name="officeRegion" onChange={handleInput} id="officeRegion" />
          </div>

          <div className="col">
            <label htmlFor="floor" className="d-block text-secondary mb-2 bold">
              FLOOR
            </label>
            <input className="bold" type="text" value={searchDetails.floor} name="floor" onChange={handleInput} id="floor" />
          </div>

          <div className="col">
            <div className="submitButton" type="submit" onClick={SubmitHandle}>
              <span style={{ paddingRight: "10px" }}>Search</span>
              <ArrowForwardIcon style={{ fill: "white" }} />
            </div>
          </div>
        </form>

        <Map />

        <div className="mt-2 row">
          <div className="text-secondary bold col-3 text-center mt-2 pt-1"> SELECTED DESK</div>
          <div className="col">
            <div style={{ paddingLeft: "-15px" }} className="box-color bold text-center">
              37
            </div>
          </div>

          <div className="text-secondary bold col mt-2 pt-1"> NO. OF DAYS</div>
          <input className="bold col box-color" type="number" value={searchDetails.days} name="days" onChange={handleInput} id="days" />

          <div className="col"></div>
          <div className="col">
            <button className="text-white bold" style={{ width: "100px", height: "40px", borderRadius: "20px", backgroundColor: "#006400" }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
/*

*/
