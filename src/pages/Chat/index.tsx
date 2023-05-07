import React, { useState } from "react";
import styled from '@emotion/styled';
import ChatLines from "./ChatLines";
import apis from "@/apis";
import _ from 'underscore'
import { scrollIntoViewById } from "@/utils";
import { SendIcon, MenuIcon } from "@/components/icons";


export interface MessageType {
  who: string;
  message?: {
    content?: string;
    chartIds?: number[];
    sql?: string;
    recommends?: any[],
  };
  loading?: boolean
}

const initialChats: MessageType[] = [
  {
    who: "ai",
    message: {
      content: `Hi, I am Web3 Analytics Events AI, feel free to ask me anything about HK Web3 events.\n你好，你可以直接用中文提问关于香港Web3活动的信息`,
      recommends: [`tripe tackles 'cold start problem' with the launch of fiat-to-crypto onramp`, `tripe tackles 'cold start problem' with the launch of fiat-to-crypto onramp`, `tripe tackles 'cold start problem' with the launch of fiat-to-crypto onramp`],
    },
  },
];


const ChatContainer = styled.div`
  height: calc(100% - 80px);
  padding-bottom: 40px;
`;

const InputContainer = styled.div`
  width: 100vw;
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
  background-image: url('/chat-input-bg.png');
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



const Chat = () => {
  const [chatMessages, setChatMessages] = useState(initialChats);
  const [inputMsg, setInputMsg] = useState("");

  const sendMessage = _.debounce(async (msg: any) => {
    const newChatMsg = [
      ...chatMessages,
      { message: { content: msg }, who: "user" },
    ];
    setChatMessages(newChatMsg.concat({ who: "ai", loading: true }));
    scrollIntoViewById(`chat-${newChatMsg.length}`)
    const chatAnswer: any = await apis.chat({ content: msg });
    setChatMessages([
      ...newChatMsg,
      {
        who: "ai",
        message: chatAnswer,
      },
    ]);
    setInputMsg("");
  }, 500);
  return (
    <ChatContainer>
      <ChatLines chatMsgs={chatMessages} />
      <InputContainer>
        <InputBlock>
          <MenuIcon />
          <TextInput
            placeholder="Input a message..."
            value={inputMsg}
            onChange={(e: any) => {
              setInputMsg(e.target.value);
            }}
          // onPressEnter={(e: any) => {
          //   sendMessage(inputMsg);
          // }}
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
