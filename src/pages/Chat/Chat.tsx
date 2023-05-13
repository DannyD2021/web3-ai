import React from "react";
import styled from '@emotion/styled';
import ChatLines from "./ChatLines";
import _ from 'underscore'
import { SendIcon } from "@/components/icons";
import ChatQuickMenu from "./components/ChatQuickMenu";
import { useChatStore } from "@/store/chat";


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

const Chat = () => {
  const { chatMessages, inputMsg, setInputMsg, sendMessage } = useChatStore();

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
