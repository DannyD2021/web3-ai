import React from "react";
import styled from '@emotion/styled';
import ChatLines from "./components/ChatLines";
import _ from 'underscore'
import ChatQuickMenu from "./components/ChatQuickMenu";
import { useChatStore } from "@/store/chat";
import { isDesktop } from 'react-device-detect';


const ChatContainer = styled.div<{ isDesktop?: boolean }>`
  height: ${props => (props.isDesktop ? 'calc(100vh - 165px)' : 'calc(100vh - 65px)')};
  margin-top: 16px;
  padding-bottom: 80px;
  position: relative;
`;

const InputContainer = styled.div<{ isDesktop?: boolean }>`
  width: 100vw;
  max-width: 800px;
  display: flex;
  padding: 15px;
  position: fixed;
  bottom: ${props => (props.isDesktop ? '100px' : '0')};;
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

  .chat-input {
    color: #fff;
    height: 32px;
    margin-left: 6px;
    padding-left: 2px;
    background: none;
    outline: none;
    border: none;
    flex: 1;
  }
`;

const ChatButtonContainer = styled.div`
  width: 56px;
  height: 56px;
  background: url('./chat_button_bg.png');
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .loading {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    background: #e3722f;

    animation: move 1s ease 0s infinite;
    @keyframes move {
      0% { transform: scale(0.8); }
      50% { transform: scale(1); }
      100% { transform: scale(1.2); }
    }
  }
`;

const Chat = () => {
  const { chatMessages, inputMsg, setInputMsg, sendMessage, chatloading, stopChat } = useChatStore();

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      sendMessage(inputMsg);
    }
  }

  const handleChat = () => {
    if (chatloading) {
      stopChat();
    } else {
      sendMessage(inputMsg);
    }
  }
  return (
    <ChatContainer isDesktop={isDesktop}>
      <ChatLines chatMsgs={chatMessages} sendMessage={sendMessage} />
      <InputContainer isDesktop={isDesktop}>
        <InputBlock>
          <ChatQuickMenu />
          <input
            className="chat-input"
            placeholder="Input a message..."
            value={inputMsg}
            onChange={(e: any) => {
              setInputMsg(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
        </InputBlock>
        <ChatButtonContainer onClick={handleChat}>
          {chatloading ? <span className="loading"/> : <img src="./chat_button.png"/>} 
        </ChatButtonContainer>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
