
import React, { useState, useEffect, useRef } from "react";
import { convertNewLines } from '@/utils'
import DotLoading from "@/components/DotLoading";
import apis from "@/apis";
import { 
  ChatLinesContainer,
  ContentBlock,
  ChatLabel,
  ChatAnswerContainer,
  ChatContent,
  RecommendsContainer,
 } from './ChatLInes.styles';
 import { MessageType } from "./index";

const ChatConfig: any = {
  ai: {
    className: "ai",
    label: "W3AI",
  },
  user: {
    className: "user",
    label: "You",
  },
};

const mockRecommends = [
  {
    "title": "Stripe tackles 'cold start problem' with the launch of fiat-to-crypto onramp",
    "url": "https://cointelegraph.com/news/stripe-tackles-cold-start-problem-with-the-launch-of-fiat-to-crypto-onramp",
    "published": 1683426678,
    "category": "latest-news",
    "leadText": "Web3 companies can utilize the Stripe-hosted fiat-to-crypto onramp to allow their customers to buy crypto at the “precise moment they need it.”"
  },
  {
    "title": "Memecoin sends BTC fees to the moon, miner profits top $50B and more: Hodler’s Digest, April 30-May 6",
    "url": "https://cointelegraph.com/news/https://cointelegraph.com/magazine/memecoin-sends-btc-fees-to-the-moon-miner-profits-top-50b-and-more-hodlers-digest-april-30-may-6/",
    "published": 1683408554,
    "category": "magazine",
    "leadText": "Memecoin hype fuels Bitcoin transaction costs, BTC miners block rewards surpass $50 billion and AI’s “Godfather” warns of technology dangers.\n"
  },
  {
    "title": "Kazakhstan collected $7M in crypto mining taxes in 2022",
    "url": "https://cointelegraph.com/news/kazakhstan-collected-7m-in-crypto-mining-taxes-in-2022",
    "published": 1683405392,
    "category": "latest-news",
    "leadText": "Crypto miners paid millions of dollars in energy fees last year following the regulation of the fiscal burden of mining activities. "
  }
]


const MsgBlock = ({ msg, id } : { msg: MessageType, id: string }) => {
  const { who, message, loading } = msg || {};
  const { content, sql, chartIds } = message || {};
  const className = ChatConfig[who].className;
  return (
    <ContentBlock className={className} id={id}>
      <ChatLabel className={className}>
        {ChatConfig[who].label}
      </ChatLabel>
      <ChatAnswerContainer className={className}>
        {content && <ChatContent dangerouslySetInnerHTML={{ __html: convertNewLines(content) }} />}
        {loading && <DotLoading text="W3AI is thinking"/>}
      </ChatAnswerContainer>
    </ContentBlock>
  )
}

const ChatLines = ({ chatMsgs }: { chatMsgs: MessageType[] }) => {
  const [recommends, setRecommends] = useState<any>([]);
  useEffect(() => {
    apis.recommends().then((res: any) => setRecommends(res.data || []))
  }, [])
  return (
    <ChatLinesContainer>
      <MsgBlock msg={chatMsgs[0]} id="chat-0"/>
      <RecommendsContainer>
        {recommends?.map((reco: any, index: number) => <div key={index}  className="recommend-content">{reco.title}</div>)}
      </RecommendsContainer>
      {chatMsgs?.slice(1)?.map((msg, index) => <MsgBlock msg={msg} key={index} id={`chat-${index+1}`}/>)}
    </ChatLinesContainer>
  );
};

export default ChatLines;
