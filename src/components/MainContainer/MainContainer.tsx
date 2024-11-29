import React from "react";
import "./MainContainer.css";
import ChatBox from "../ChatBox/ChatBox";
import ChatList from "../ChatList/ChatList";

type Props = {};

function MainContainer(props: Props) {
  return (
    <main>
      <ChatList />
      <ChatBox />
    </main>
  );
}

export default MainContainer;
