import React, { useState } from "react";
import styled from '@emotion/styled';
import ChatLines from "./components/ChatLines";
import _ from 'underscore'
import ChatQuickMenu from "./components/ChatQuickMenu";
import { useChatStore } from "@/store/chat";
import { isDesktop } from 'react-device-detect';
import History from "./components/History";
import Feeds from "./components/Feeds";
import { useAccount } from 'wagmi';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const ChatContainer = styled.div<{ isDesktop?: boolean }>`
  height: calc(100vh - 90px);
  margin-top: 40px;
  padding-bottom: 55px;
  position: relative;
  display: flex;
`;

const InputContainer = styled.div<{ isDesktop?: boolean }>`
  width: 100vw;
  max-width: 780px;
  display: flex;
  padding: 15px;
  position: fixed;
  bottom: ${props => (props.isDesktop ? '10px' : '0')};
  gap: 5px;
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0);
  background: #242433;
`;

const InputBlock = styled.div`
  height: 56px;
  background-image: url('./chat-input-bg.png');
  background-size: 100% 100%;
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
  const { chatMessages, inputMsg, setInputMsg, sendMessage, chatloading, stopChat, chatCounts } = useChatStore();
  const { address, isConnected } = useAccount();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const checkChatCounts = () => {
    if (!isConnected && chatCounts > 3) {
      handleOpen();
      return;
    }
  }

  const handleKeyDown = (event: any) => {
    checkChatCounts();
    if (event.key === 'Enter') {
      sendMessage(inputMsg);
    }
  }

  const handleChat = () => {
    checkChatCounts();
    if (chatloading) {
      stopChat();
    } else {
      sendMessage(inputMsg);
    }
  }
  return (
    <ChatContainer isDesktop={isDesktop}>
      {isDesktop && <History />}
      <ChatLines chatMsgs={chatMessages} sendMessage={sendMessage} />
      {isDesktop && <Feeds />}
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Chat tips"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Please Login to access W3AI and get 100 $WAI!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Got it!
          </Button>
        </DialogActions>
      </Dialog>
    </ChatContainer>
  );
};

export default Chat;
