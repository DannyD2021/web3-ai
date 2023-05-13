import { useState } from 'react'
import { createStore } from 'hox'

export enum ChatTyps {
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
    type?: ChatTyps
}

export const initialChats: MessageType[] = [
    {
        who: "ai",
        message: {
            content: `Hi, I'm Web3 Analytics AI, your Web3 assistant. Feel free to ask me anything about Web3 & Crypto market.`,
        },
        type: ChatTyps.SESSION
    }
];


export const [useChatStore, ChatStoreProvider] = createStore(() => {
    const [chatMessages, setChatMessages] = useState(initialChats);
    return {
        chatMessages,
        setChatMessages,
    }
})
