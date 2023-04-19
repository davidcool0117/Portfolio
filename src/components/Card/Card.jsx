import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, detail1, detail2, detail3, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <div>{detail}</div>
      <div>{detail1}</div>
      <span>{detail2}</span>
      <span>{detail3}</span>
    </div>
  );
};

export default Card;
