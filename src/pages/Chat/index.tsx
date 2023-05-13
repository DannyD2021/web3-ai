import React from "react";
import Chat from "./Chat";
import { ChatStoreProvider } from "@/store/chat";

const ChatPage = () => {
  return (
    <ChatStoreProvider>
      <Chat/>
    </ChatStoreProvider>
  );
};

export default ChatPage;
