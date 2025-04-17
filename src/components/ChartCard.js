import React from "react";
import "./chatCard.css";

const ChartCard = ({ chat }) => {
  return (
    <div className="chatCard-Container">
      <div className="left-section">
        <img src={chat.imageURL} alt="profile" width={"30px"} height={"30px"} />
        <div>
          <div style={{ fontSize: "small" }}>{chat.title}</div>
          <div style={{ fontSize: "small" }}>{chat.orderId}</div>
        </div>
      </div>

      <div className="right-section">
        <text>{chat.latestMessageTimestamp}</text>
      </div>
    </div>
  );
};

export default ChartCard;
