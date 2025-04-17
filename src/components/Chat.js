import React, { useState } from "react";
import ChartCard from "./ChartCard";
import ChatView from "./ChatView";
import "./chat.css";

const ChatHeader = ({ chats, setChatData }) => {
  const sortByTitle = () => {
    const sortedData = chats.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setChatData([...sortedData]);
  };

  const sortByOrderId = () => {
    const sortedData = chats.sort((a, b) => {
      return a.orderId.localeCompare(b.orderId);
    });
    setChatData([...sortedData]);
  };
  return (
    <div>
      <div>
        <span onClick={sortByTitle} style={{ cursor: "pointer" }}>
          Filter by Title
        </span>
        <span> / </span>
        <span onClick={sortByOrderId} style={{ cursor: "pointer" }}>
          Order Id
        </span>
      </div>
      <div>
        <input placeholder="start typing to serch" style={{ border: "none" }} />
      </div>
    </div>
  );
};

const Chat = ({ chats }) => {
  const [chatData, setChatData] = useState(chats);

  const [openChatView, setChatView] = useState(false);
  const [chatViewData, setChatViewData] = useState();

  const handleCardClick = (chat) => {
    setChatView(true);
    setChatViewData(chat);
  };
  return (
    <div className="chat-container">
      <div
        className="chatlist-container"
        style={{ width: openChatView ? "50%" : "100%" }}
      >
        <ChatHeader setChatData={setChatData} chats={chatData} />
        <div>
          {chatData.map((chat) => {
            return (
              <div
                onClick={() => handleCardClick(chat)}
                style={{ cursor: "pointer" }}
              >
                <ChartCard chat={chat} />
              </div>
            );
          })}
        </div>
      </div>
      {openChatView ? <ChatView data={chatViewData} /> : null}
    </div>
  );
};

export default Chat;
