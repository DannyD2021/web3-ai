import { useState } from 'react';
import { createStore } from 'hox';
import _ from 'underscore';
import { fetchEventSource } from "@microsoft/fetch-event-source";

export enum ChatTypes {
  SESSION,
  TRADE,
}

export interface MessageType {
  who: string;
  message?: {
    content?: string;
    chartIds?: number[];
    sql?: string;
    messageId?: number;
  };
  loading?: boolean
  type?: ChatTypes
}

export const initialChats: MessageType[] = [
  {
    who: "ai",
    message: {
      content: `Hi, I'm Web3 Analytics AI, your Web3 assistant. Feel free to ask me anything about Web3 & Crypto market.`,
    },
    type: ChatTypes.SESSION
  }
];

const ctrl = new AbortController();
class RetriableError extends Error { };
class FatalError extends Error { };

export const [useChatStore, ChatStoreProvider] = createStore(() => {
  const [chatloading, setChatLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState(initialChats);
  const [inputMsg, setInputMsg] = useState("");

  const addNewMessage = (msg: MessageType | MessageType[]) => {
    const newMsgs = chatMessages.concat(msg);
    setChatMessages(newMsgs);
    setTimeout(() => {
      const msgSize = newMsgs.length;
      const lastChatDivId = newMsgs[msgSize-1].type === ChatTypes.SESSION ? `chat-${newMsgs.length - 1}` : `chat-${newMsgs.length}`;
      const lastOffsetTop = document.getElementById(lastChatDivId)?.offsetTop || 0;
      document.getElementById('chat-container')?.scrollTo({ top: lastOffsetTop, behavior: 'smooth' });
    });
  }

  const sendMessage = _.debounce(async (msg: any) => {
    if (!msg || chatloading) return;
    setChatLoading(true);
    setInputMsg("");
    const originMsgs = [...chatMessages];
    const newUserMsg: MessageType = { message: { content: msg }, who: "user", type: ChatTypes.SESSION };
    const newAIMsg: MessageType = { message: { content: '' },  who: "ai", loading: true, type: ChatTypes.SESSION };
    addNewMessage([newUserMsg, newAIMsg])
    // handle chatgpt
    await fetchEventSource('/gw/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: msg
      }),
      signal: ctrl.signal,
      onmessage(msg) {
        if (msg.event === 'FatalError') {
          throw new FatalError(msg.data);
        }
        if (msg.event === 'chatgpt') {
          const msgData = JSON.parse(msg.data);
          Object.assign(newAIMsg, {
            loading: false,
            message: { content: newAIMsg?.message?.content + msgData }
          });
          setChatMessages(originMsgs.concat(newUserMsg, newAIMsg));
        }
        if (msg.event === 'chart') {
          const msgData = JSON.parse(msg.data);
          newAIMsg!.message!.chartIds = msgData;
          setChatMessages(originMsgs.concat(newUserMsg, newAIMsg));
        }
        if (msg.event === 'db') {
          const msgData = JSON.parse(msg.data);
          newAIMsg!.message!.messageId = msgData.messageId;
          setChatMessages(originMsgs.concat(newUserMsg, newAIMsg));
        }
      },
      onclose() {
        setChatLoading(false);
      },
      onerror(err) {
        setChatLoading(false);
        console.log('EventSource err: ', err);
      },
      openWhenHidden: false
    });
  }, 500);
  return {
    chatMessages,
    inputMsg,
    setChatMessages,
    setInputMsg,
    sendMessage,
    addNewMessage,
    chatloading
  }
})
