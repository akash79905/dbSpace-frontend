import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import dateFormat from "dateformat";
import "../App.css";
import ArrowDownwardSharpIcon from "@material-ui/icons/ArrowDownwardSharp";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";

const Background = styled.div`
  width: 100%;
  height: 100%;
  margin-left: -55px;
  margin-right: -50px;
  margin-top: -50px;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 450px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 25px;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
`;

function BookingItemCard({ showComponent, setShowComponent, booking }) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showComponent ? 1 : 0,
    transform: showComponent ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowComponent(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showComponent) {
        setShowComponent(false);
        console.log("I pressed");
      }
    },
    [setShowComponent, showComponent]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showComponent ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showComponent}>
              <h2 style={{ color: "#001BAB", fontWeight: "bold", width: "100%", textAlign: "center", paddingTop: "15px" }} className="title ">
                dbSpace
              </h2>

              <h4 style={{ color: "#006400", fontWeight: "bold", width: "100%", textAlign: "center", paddingTop: "15px" }} className="title ">
                Your Upcoming Booking
              </h4>

              <div className="row mt-4">
                <h4 className="col" style={{ color: "#001BAB", textAlign: "end" }}>
                  Desk No.
                </h4>
                <div style={{ width: "2px" }}></div>
                <h4 className="col"> {booking.DeskNo} </h4>
              </div>

              <div className="row mt-2">
                <h4 className="col" style={{ color: "#001BAB", textAlign: "end" }}>
                  Floor
                </h4>
                <div style={{ width: "2px" }}></div>
                <h4 className="col"> {booking.Floor} </h4>
              </div>

              <div className="row mt-2">
                <h4 className="col" style={{ color: "#001BAB", textAlign: "end" }}>
                  Location
                </h4>
                <div style={{ width: "2px" }}></div>
                <h4 className="col"> {booking.officeRegion + ", " + booking.City} </h4>
              </div>

              <div className="row mt-2">
                <h4 className="col" style={{ color: "#001BAB", textAlign: "end" }}>
                  Start Date
                </h4>
                <div style={{ width: "2px" }}></div>
                <h4 className="col"> {dateFormat(booking.StartDate, "dd-mm-yyyy")}</h4>
              </div>

              <div className="row mt-2">
                <h4 className="col" style={{ color: "#001BAB", textAlign: "end" }}>
                  End Date
                </h4>
                <div style={{ width: "2px" }}></div>
                <h4 className="col">{dateFormat(booking.EndDate, "dd-mm-yyyy")} </h4>
              </div>
              <h6 style={{ width: "100%", textAlign: "center" }} className="mt-4">
                Please contact your Floor Manager for Support
              </h6>

              <div className="row mt-5">
                <div className="col ">
                  <button className="cardButton pr-3" style={{ backgroundColor: "#001BAB", float: "right" }}>
                    <span style={{ paddingRight: "10px" }}>Download</span>
                    <ArrowDownwardSharpIcon style={{ fill: "white" }} />
                  </button>
                </div>

                <div className="col">
                  <button className="cardButton pl-4" style={{ backgroundColor: "#A80000" }}>
                    <span style={{ paddingRight: "10px" }}>Cancel</span>
                    <CloseSharpIcon style={{ fill: "white" }} />
                  </button>
                </div>
              </div>

              <CloseModalButton aria-label="Close modal" onClick={() => setShowComponent((prev) => !prev)} />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}

export default BookingItemCard;
