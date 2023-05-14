import { useState } from 'react';
import { createStore } from 'hox';
import _ from 'underscore';
import { fetchEventSource, EventStreamContentType } from "@microsoft/fetch-event-source";
import { scrollIntoViewById } from '@/utils';
// import apis from "@/apis";

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
  const [chatMessages, setChatMessages] = useState(initialChats);
  const [inputMsg, setInputMsg] = useState("");

  const addNewMessage = (msg: MessageType) => {
    setChatMessages(chatMessages.concat(msg))
  }

  const sendMessage = _.debounce(async (msg: any) => {
    if (!msg) return;
    const originMsgs = [...chatMessages];
    const newUserMsg = { message: { content: msg }, who: "user", type: ChatTypes.SESSION };
    const newAIMsg = { message: { content: '' },  who: "ai", loading: true, type: ChatTypes.SESSION };
    const newMsgs = originMsgs.concat(newUserMsg, newAIMsg);
    setChatMessages(newMsgs);
    scrollIntoViewById(`chat-${newMsgs.length-1}`);
    // const sse = new EventSource('/gw/api/v1/chat/completions');
    // sse.onmessage = (ev) => {
    //     console.log(ev.data);
    // };
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
            message: { content: newAIMsg.message.content + msgData }
          });
          setChatMessages(originMsgs.concat(newUserMsg, newAIMsg));
        }
        console.log('msg: ', msg);
      },
      // onclose() {
      //   // if the server closes the connection unexpectedly, retry:
      //   throw new RetriableError();
      // },
      // onerror(err) {
      //   if (err instanceof FatalError) {
      //     throw err; // rethrow to stop the operation
      //   } else {
      //     // do nothing to automatically retry. You can also
      //     // return a specific retry interval here.
      //   }
      // }
    });
    // const chatAnswer: any = await apis.chat({ content: msg }).then(res => res.data);
    // setChatMessages([
    //   ...newChatMsg,
    //   {
    //     who: "ai",
    //     message: chatAnswer,
    //   },
    // ]);
    setInputMsg("");
  }, 500);
  return {
    chatMessages,
    inputMsg,
    setChatMessages,
    setInputMsg,
    sendMessage,
    addNewMessage,
  }
})
