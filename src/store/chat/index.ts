import { useState, useRef } from 'react';
import { createStore } from 'hox';
import _ from 'underscore';
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { LOCKED_QA } from '@/const';

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
    chartData?: any;
  };
  loading?: boolean
  type?: ChatTypes
}

export const initialChats: MessageType[] = [
  {
    who: "ai",
    message: {
      content: `Hi, I'm Web3 Analytics AI, your Web3 assistant. Feel free to ask me anything about Web3 & Crypto market.

      Telegram group: https://t.me/web3analyitcs_official
      Discord: https://discord.com/invite/ZdWPpMG9bC
      Twitter: https://twitter.com/web3_analytics
      
      Join our community to claim $WAI airdrop.
      `,
    },
    type: ChatTypes.SESSION
  }
];

// const ctrl = new AbortController();
class RetriableError extends Error { };
class FatalError extends Error { };

export const [useChatStore, ChatStoreProvider] = createStore(() => {
  const ctrlRef = useRef<any>(null);
  const [chatloading, setChatLoading] = useState(false);
  const [chatCounts, setChatCounts] = useState(0);
  const [chatMessages, setChatMessages] = useState(initialChats);
  const [inputMsg, setInputMsg] = useState("");

  const addNewMessage = (msg: MessageType | MessageType[]) => {
    const newMsgs = chatMessages.concat(msg);
    setChatMessages(newMsgs);
    setTimeout(() => {
      const msgSize = newMsgs.length;
      const lastChatDivId = newMsgs[msgSize - 1].type === ChatTypes.SESSION ? `chat-${newMsgs.length - 1}` : `chat-${newMsgs.length}`;
      const lastOffsetTop = document.getElementById(lastChatDivId)?.offsetTop || 0;
      document.getElementById('chat-container')?.scrollTo({ top: lastOffsetTop, behavior: 'smooth' });
    });
  }

  const sendMessage = _.debounce(async (msg: any) => {
    if (!msg || chatloading) return;
    ctrlRef.current = new AbortController();
    setChatLoading(true);
    setInputMsg("");
    const originMsgs = [...chatMessages];
    const newUserMsg: MessageType = { message: { content: msg }, who: "user", type: ChatTypes.SESSION };
    const newAIMsg: MessageType = { message: { content: '' }, who: "ai", loading: true, type: ChatTypes.SESSION };
    addNewMessage([newUserMsg, newAIMsg]);
    // add chat count +1
    setChatCounts(chatCounts + 1);
    // handle LockedQA
    if (msg === LOCKED_QA[0].title) {
      Object.assign(newAIMsg, {
        loading: false,
        message: { content: LOCKED_QA[0].answer }
      });
      setChatMessages(originMsgs.concat(newUserMsg, newAIMsg));
      return;
    }
    // handle chatgpt
    await fetchEventSource('/gw/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: msg
      }),
      signal: ctrlRef.current?.signal,
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
        if (msg.event === 'chart_data') {
          const chartData = JSON.parse(msg.data);
          newAIMsg!.message!.chartData = chartData;
          setChatMessages(originMsgs.concat(newUserMsg, newAIMsg));
          console.log('chartData: ', chartData);
        }
      },
      onclose() {
        setChatLoading(false);
      },
      onerror(err) {
        setChatLoading(false);
        console.log('EventSource err: ', err);
      },
      openWhenHidden: true
    });
  }, 500);

  const stopChat = () => {
    if (chatloading) {
      ctrlRef.current?.abort();
      setChatLoading(false);
      let lastChatMsg = chatMessages.pop()!;
      if (lastChatMsg.loading) {
        lastChatMsg = { message: { content: 'W3AI is aborted!' }, who: "ai", type: ChatTypes.SESSION };
      }
      setChatMessages([...chatMessages, lastChatMsg]);
    }
  }

  return {
    chatMessages,
    inputMsg,
    setChatMessages,
    setInputMsg,
    sendMessage,
    addNewMessage,
    chatloading,
    stopChat,
    chatCounts
  }
})
