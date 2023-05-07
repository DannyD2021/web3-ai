
import React, { useState, useEffect, useRef } from "react";
import { convertNewLines } from '@/utils'
import { MessageType } from "./index";
import DotLoading from "@/components/DotLoading";
import { 
  ChatLinesContainer,
  ContentBlock,
  ChatLabel,
  ChatAnswerContainer,
  ChatContent,
  RecommendsContainer,
 } from './ChatLInes.styles';

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


const MsgBlock = ({ msg } : { msg: MessageType  }) => {
  const { who, message, key } = msg || {};
  const { content, sql, chartIds } = message || {};
  const className = ChatConfig[who].className;
  return (
    <ContentBlock className={className} key={key} id={`chat-${key}`}>
      <ChatLabel className={className}>
        {ChatConfig[who].label}
      </ChatLabel>
      <ChatAnswerContainer className={className}>
        {content && <ChatContent dangerouslySetInnerHTML={{ __html: convertNewLines(content) }} />}
      </ChatAnswerContainer>
    </ContentBlock>
  )
}

const ChatLines = ({ chatMsgs, loading }: { chatMsgs: MessageType[], loading: boolean }) => {
  const [recommends, setRecommends] = useState(mockRecommends);
  return (
    <ChatLinesContainer>
      <MsgBlock msg={chatMsgs[0]} key={0}/>
      <RecommendsContainer>
        {recommends.map((reco, index) => <div key={index}  className="recommend-content">{reco.title}</div>)}
      </RecommendsContainer>
      {chatMsgs?.slice(1)?.map((msg, index) => <MsgBlock msg={msg} key={index}/>)}
      <DotLoading text="W3AI is thinking" />
    </ChatLinesContainer>
  );
};

export default ChatLines;
