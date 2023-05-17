import React from "react";
import styled from '@emotion/styled';
import ChatLines from "./components/ChatLines";
import _ from 'underscore'
import { SendIcon } from "@/components/icons";
import ChatQuickMenu from "./components/ChatQuickMenu";
import { useChatStore } from "@/store/chat";


const ChatContainer = styled.div`
  height: calc(100vh - 47.5px);
  padding-bottom: 80px;
  position: relative;
`;

const InputContainer = styled.div`
  width: 100vw;
  max-width: 800px;
  display: flex;
  padding: 15px;
  position: fixed;
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
  position: relative;
  background: url('./chat_button_bg.png');
  overflow: hidden;

  .chat-button {
    display: block;
    position: absolute;
    left: 19px;
    top: 10px;
    &.rocket1 {
      animation: move 1.5s linear 0s infinite;
    }
    &.rocket2 {
      animation: move 1.5s linear 0s infinite;
      top: 60px;
    }
    @keyframes move {
      0% {
        transform: translateY(20px);
      }
      50% {
        transform: translateY(-40px);
      }
      100% {
        transform: translateY(-80px);
      }
    }
}
`;

const Chat = () => {
  const { chatMessages, inputMsg, setInputMsg, sendMessage, chatloading } = useChatStore();

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
        <ChatButtonContainer onClick={(e: any) => {
          sendMessage(inputMsg);
        }}>
          <img className={`chat-button ${chatloading ? 'rocket1' : ''}`} src="./chat_button.png"/>
          <img className={`chat-button ${chatloading ? 'rocket2' : ''}`} src="./chat_button.png"/>
        </ChatButtonContainer>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
