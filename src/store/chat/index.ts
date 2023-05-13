import { useState } from 'react';
import { createStore } from 'hox';
import _ from 'underscore';
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { scrollIntoViewById } from '@/utils';
import apis from "@/apis";

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

export const [useChatStore, ChatStoreProvider] = createStore(() => {
    const [chatMessages, setChatMessages] = useState(initialChats);
    const [inputMsg, setInputMsg] = useState("");
    const sendMessage = _.debounce(async (msg: any) => {
        if (!msg) return;
        const newChatMsg = [
          ...chatMessages,
          { message: { content: msg }, who: "user" },
        ];
        setChatMessages(newChatMsg.concat({ who: "ai", loading: true, type: ChatTypes.SESSION }));
        scrollIntoViewById(`chat-${newChatMsg.length}`);
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
              // if the server emits an error message, throw an exception
              // so it gets handled by the onerror callback below:
              console.timeEnd("fetchEventSource");
              console.log('msg: ', msg)
            },
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
      
      const addNewMessage = (msg: MessageType) => {
          setChatMessages(chatMessages.concat(msg))
      }
    return {
        chatMessages,
        inputMsg,
        setChatMessages,
        setInputMsg,
        sendMessage,
        addNewMessage,
    }
})
