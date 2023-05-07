import React, { useState } from "react";
import styled from '@emotion/styled';
import { TextField, Button } from "@mui/material";
import ChatLines from "./ChatLines";
// import { ChatGPTApi } from "metabase/services";
import _ from 'underscore'
import { scrollIntoViewById } from "@/utils";

export interface MessageType {
  who: string;
  message: {
    content?: string;
    chartIds?: number[];
    sql?: string;
  };
}

const initialChats: MessageType[] = [
  {
    who: "bot",
    message: {
      content:
        `Hi, I am Web3 Analytics Events AI, feel free to ask me anything about HK Web3 events.\n你好，你可以直接用中文提问关于香港Web3活动的信息`,
    },
  },
];

const ChatContainer = styled.div`
  height: calc(100% - 80px);
  padding-bottom: 40px;
`;

const InputBlock = styled.div`
  width: 100vw;
  display: flex;
  padding: 15px;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  gap: 5px;
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fafafa;
  border-top: 1px solid #d9d9d9;
`;

const ChatButton = styled(Button)`
  background-color: #fa8c16 !important;
  border-color: #ffa940 !important;
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
      <InputBlock>
        <TextField
          placeholder="Input a message to start the conversation"
          value={inputMsg}
          onChange={(e: any) => {
            setInputMsg(e.target.value);
          }}
          // onPressEnter={(e: any) => {
          //   sendMessage(inputMsg);
          // }}
        />
        <Button onClick={clearChat}>Clear</Button>
        <ChatButton
          color="primary"
          onClick={(e: any) => {
            sendMessage(inputMsg);
          }}
        >
          Send
        </ChatButton>
      </InputBlock>
    </ChatContainer>
  );
};

export default Chat;
