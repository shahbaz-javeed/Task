import { Button } from "@mui/material";
import React from "react";
import Vector from "../assets/Vector.png";

const Card = () => {
  return (
    <div className="card">
      <div className="card_img_container">
        <img src={Vector} alt="icon" />
        <h3>Holiday Inn</h3>
      </div>
        <div className="card_bottom_Container">
        <p>1.5 miles away from joblocation. </p>
      <div className="card_Bottom">
          <div className="flex_Between">
            <div className="flex_center">
            <p>Singles: $120</p>
            <p>Doubles: $145</p>
            </div>
          <Button variant="contained" className="card_button">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
