import React, { useState } from "react";
import styled from '@emotion/styled';
import { TextField, Button } from "@mui/material";
import ChatLines from "./ChatLines";
// import { ChatGPTApi } from "metabase/services";
import _ from 'underscore'
import { scrollIntoViewById } from "@/utils";
import { SendIcon, MenuIcon } from "@/components/icons";


export interface MessageType {
  who: string;
  message: {
    content?: string;
    chartIds?: number[];
    sql?: string;
    recommends?: any[],
  };
  key?: string | number,
}

const initialChats: MessageType[] = [
  {
    who: "ai",
    message: {
      content: `Hi, I am Web3 Analytics Events AI, feel free to ask me anything about HK Web3 events.\n你好，你可以直接用中文提问关于香港Web3活动的信息`,
      recommends: [`tripe tackles 'cold start problem' with the launch of fiat-to-crypto onramp`, `tripe tackles 'cold start problem' with the launch of fiat-to-crypto onramp`, `tripe tackles 'cold start problem' with the launch of fiat-to-crypto onramp`],
    },
  },
  {
    who: "user",
    message: {
      content: `Greetings, my name is M2. I am a professional artificial assistant with extensive knowledge and real-time updates in digital finance. `,
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



const Chat = ({ setStartChat }: any) => {
  const [chatMessages, setChatMessages] = useState(initialChats);
  const [inputMsg, setInputMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const clearChat = () => {
    setInputMsg('');
    setChatMessages(initialChats);
  };

  const sendMessage = _.debounce(async (msg: any) => {
    setLoading(true);
    const newChatMsg = [
      ...chatMessages,
      { message: { content: msg }, who: "user" },
    ];
    if (newChatMsg.length > 1) {
      setStartChat?.(true);
    }
    setChatMessages(newChatMsg);
    scrollIntoViewById(`chat-${newChatMsg.length - 1}`)
    // const chatAnswer = await ChatGPTApi.hkChat({ 
    //   prompt: msg,
    //   useGoogle: msg.startsWith('/google'),
    // }).then(
    //   (res: any) => res?.data,
    // );
    // setChatMessages([
    //   ...newChatMsg,
    //   {
    //     who: "bot",
    //     message: {
    //       content: chatAnswer,
    //     },
    //   },
    // ]);
    setInputMsg("");
    setLoading(false);
  }, 500);
  return (
    <ChatContainer>
      <ChatLines chatMsgs={chatMessages} loading={loading}/>
      <InputContainer>
        <InputBlock>
          <MenuIcon/>
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
        <SendIcon onClick={(e: any) => {
            sendMessage(inputMsg);
        }}/>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
