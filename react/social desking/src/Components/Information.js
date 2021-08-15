import { React } from "react";
import { useState } from "react";
import "../App.css";
import dateFormat from "dateformat";
import BookingItemCard from "./BookingItemCard";

const Information = (update) => {
  const [bookings, setBookings] = useState([
    { officeRegion: "Yerwada", StartDate: 1628965800000, DeskNo: "27", Floor: "7", City: "Pune", EndDate: 1628965845600 },
    { officeRegion: "Yerwada", StartDate: 1629397800000, DeskNo: "27", Floor: "7", City: "Pune", EndDate: 1628965845600 },
    { officeRegion: "Magarpatta", StartDate: 1629829800000, DeskNo: "27", Floor: "7", City: "Pune", EndDate: 1628965845600 },
    { officeRegion: "Yerwada", StartDate: 1628965800000, DeskNo: "27", Floor: "7", City: "Pune", EndDate: 1628965845600 },
    { officeRegion: "Yerwada", StartDate: 1629397800000, DeskNo: "27", Floor: "7", City: "Pune", EndDate: 1628965845600 },
    { officeRegion: "Magarpatta", StartDate: 1629829800000, DeskNo: "27", Floor: "7", City: "Pune", EndDate: 1628965845600 },
    { officeRegion: "Yerwada", StartDate: 1628965800000, DeskNo: "27", Floor: "7", City: "Pune", EndDate: 1628965845600 },
    { officeRegion: "Yerwada", StartDate: 1629397800000, DeskNo: "27", Floor: "7", City: "Pune", EndDate: 1628965845600 },
    { officeRegion: "Magarpatta", StartDate: 1629829800000, DeskNo: "27", Floor: "7", City: "Pune", EndDate: 1628965845600 },
  ]);

  const [showComponent, setShowComponent] = useState(false);
  const [index, setIndex] = useState(0);

  let BookingItemClick = (idx) => {
    setIndex(idx);
    setShowComponent(true);
  };

  return (
    <div>
      <BookingItemCard showComponent={showComponent} setShowComponent={setShowComponent} booking={bookings[index]} />

      <h1 className="title bold" style={{ color: "#001BAB" }}>
        dbSpace
      </h1>

      <div className="text-secondary mt-5 mb-3" style={{ fontWeight: "bold" }}>
        YOUR UPCOMING BOOKINGS
      </div>

      <div className="bookingList" style={{ height: "250px" }}>
        {bookings.map((item, idx) => (
          <button onClick={() => BookingItemClick(idx)} key={idx} className="bookingItem">
            <span style={{ paddingLeft: "15px", fontWeight: "bold" }}>{item.officeRegion},</span> {dateFormat(item.StartDate, " dS mmmm  yyyy")}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "50px", color: "#001BAB", fontWeight: "bold" }}>dbSpace SMART TEAMS</div>

      <div className="mt-2 bookingItem" style={{ paddingLeft: "15px" }}>
        Akash Jain, 18th Auguest
      </div>
    </div>
  );
};

export default Information;
