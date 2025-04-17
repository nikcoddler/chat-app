import React from "react";
import ChatInboxView from "./ChatInboxView";

const EmptyView = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Send a message to start chatting
    </div>
  );
};

const ChatView = ({ data }) => {
  console.log(data.messageList);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid gray",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "10px",
        }}
      >
        <img src={data.imageURL} alt="profile" width={"30px"} height={"30px"} />
        <div style={{ fontSize: "small" }}>{data.title}</div>
      </div>

      <div style={{}}>
        {data.messageList.length == 0 ? (
          <EmptyView />
        ) : (
          <ChatInboxView messages={data.messageList} />
        )}
      </div>
    </div>
  );
};

export default ChatView;
