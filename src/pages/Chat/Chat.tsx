import React, { ReactEventHandler, useEffect, useState } from "react";
import styled from '@emotion/styled';
import ChatLines from "./ChatLines";
import apis from "@/apis";
import _ from 'underscore'
import { scrollIntoViewById } from "@/utils";
import { SendIcon, MenuIcon } from "@/components/icons";
import ChatQuickMenu from "./components/ChatQuickMenu";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { useChatStore } from "@/store/chat";


export interface MessageType {
  who: string;
  message?: {
    content?: string;
    chartIds?: number[];
    sql?: string;
    messageId?: number;
  };
  loading?: boolean
}

const initialChats: MessageType[] = [
  {
    who: "ai",
    message: {
      content: `Hi, I'm Web3 Analytics AI, your Web3 assistant. Feel free to ask me anything about Web3 & Crypto market.`,
    },
  }
];


const ChatContainer = styled.div`
  height: calc(100% - 80px);
  padding-bottom: 40px;
`;

const InputContainer = styled.div`
  width: 100vw;
  max-width: 800px;
  display: flex;
  padding: 15px;
  position: absolute;
  bottom: 0;
  gap: 5px;
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #1b293e;
`;

const InputBlock = styled.div`
  height: 56px;
  background-image: url('./chat-input-bg.png');
  background-size:100% 100%;
  padding: 10px;
  flex: 1;
  display: flex;
  align-items: center;
`;

const TextInput = styled.input`
  color: #fff;
  height: 32px;
  margin-left: 5px;
  background: none;
  outline: none;
  border: none;
  caret-color: #31499b;
  flex: 1;
`;


// const ctrl = new AbortController();
// console.time('/gw/api/v1/chat/completions');
// fetchEventSource('/gw/api/v1/chat/completions', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     content: 'apple'
//   }),
//   signal: ctrl.signal,
//   onmessage(msg) {
//     // if the server emits an error message, throw an exception
//     // so it gets handled by the onerror callback below:
//     console.log('msg: ', msg)
//     // console.timeEnd('/gw/api/v1/chat/completions')
//   },
// });



const Chat = () => {
  const { chatMessages, setChatMessages } = useChatStore();
  const [inputMsg, setInputMsg] = useState("");

  const sendMessage = _.debounce(async (msg: any) => {
    if (!msg) return;
    const newChatMsg = [
      ...chatMessages,
      { message: { content: msg }, who: "user" },
    ];
    setChatMessages(newChatMsg.concat({ who: "ai", loading: true }));
    scrollIntoViewById(`chat-${newChatMsg.length}`)
    const chatAnswer: any = await apis.chat({ content: msg }).then(res => res.data);
    setChatMessages([
      ...newChatMsg,
      {
        who: "ai",
        message: chatAnswer,
      },
    ]);
    setInputMsg("");
  }, 500);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      sendMessage(inputMsg);
    }
  }
  return (
      <ChatContainer>
        <ChatLines chatMsgs={chatMessages} sendMessage={sendMessage} />
        <InputContainer>
          <InputBlock>
            <ChatQuickMenu />
            <TextInput
              placeholder="Input a message..."
              value={inputMsg}
              onChange={(e: any) => {
                setInputMsg(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </InputBlock>
          <span onClick={(e: any) => {
            sendMessage(inputMsg);
          }}>
            <SendIcon />
          </span>
        </InputContainer>
      </ChatContainer>
  );
};

export default Chat;
