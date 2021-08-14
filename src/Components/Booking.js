import React from "react";
import "../App.css";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useState } from "react";

function Booking() {
  const officesRegions = ["Yerwada", "Magarpatta", "Mumbai", "Pune"];
  const floors = [1, 2, 3, 4, 5, 6];

  const [searchDetails, setSearchDetails] = useState({
    date: "",
    officeRegion: "",
    floor: 0,
  });

  const SubmitHandle = (e) => {
    //e.preventDefaults();
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
        <form className="row" action="" onSubmit={SubmitHandle}>
          <div className="col">
            <label htmlFor="date" className="d-block">
              Date
            </label>
            <input style={{ width: "100%" }} value={searchDetails.date} onChange={handleInput} type="date" name="date" id="date" />
          </div>

          <div className="col">
            <label htmlFor="officeRegion" className="d-block">
              Office
            </label>
            <input type="text" value={searchDetails.officeRegion} name="officeRegion" onChange={handleInput} id="officeRegion" />
          </div>

          <div className="col">
            <label htmlFor="floor" className="d-block">
              Floor
            </label>
            <input type="text" value={searchDetails.floor} name="floor" onChange={handleInput} id="floor" />
          </div>

          <div className="col" style={{}}>
            <button style={{}} className="submitButton" type="submit">
              <span style={{ paddingRight: "20px" }}>Search</span>
              <ArrowForwardIcon style={{ fill: "white" }} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booking;
/*

*/
