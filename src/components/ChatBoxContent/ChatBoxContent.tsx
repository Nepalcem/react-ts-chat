import React from "react";
import "./ChatBoxContent.css";
import ChatBoxInput from "./ChatBoxInput/ChatBoxInput";

type Props = {};

function ChatBoxContent(props: Props) {
  return (
    <>
      <div className="chat-box-content">Chat messages:</div>
      <ChatBoxInput placeholder="Type your message" />
    </>
  );
}

export default ChatBoxContent;
