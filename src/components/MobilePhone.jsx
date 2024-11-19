import React from "react";
import phoneMockup from "../assets/phone-mockup.png";
import "./MobilePhone.css";

const MobilePhone = () => {
  return (
    <div className="phone-container">
      <img
        src={phoneMockup}
        alt="App Mockup"
        className="phone-mockup"
      />
    </div>
  );
};

export default MobilePhone;
