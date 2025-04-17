import "./App.css";
import React, { useEffect, useState } from "react";
import Chat from "./components/Chat";

function App() {
  const [chatData, setChatData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
      );

      const data = await res.json();
      setChatData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>{chatData && <Chat chats={chatData} />}</div>;
}

export default App;
