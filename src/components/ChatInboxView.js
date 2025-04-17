import React from "react";

const MessageCard = ({ message }) => {
  return <div></div>;
};
const ChatInboxView = ({ messages }) => {
  return (
    <div>
      {messages.map((msg) => {
        return <MessageCard message={msg} />;
      })}
    </div>
  );
};

export default ChatInboxView;
