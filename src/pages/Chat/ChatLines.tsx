
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
  ChartIframe,
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


const MsgBlock = ({ msg, id } : { msg: MessageType, id: string }) => {
  const { who, message, loading } = msg || {};
  const { content, sql, chartIds = [224,444] } = message || {};
  const className = ChatConfig[who].className;
  return (
    <ContentBlock className={className} id={id}>
      <ChatLabel className={className}>
        {ChatConfig[who].label}
      </ChatLabel>
      <ChatAnswerContainer className={className}>
        {content && <ChatContent dangerouslySetInnerHTML={{ __html: convertNewLines(content) }} />}
        {loading && <DotLoading text="W3AI is thinking"/>}
        {chartIds?.length && <ChartIframe height={chartIds.length*450+0.5} src={`//test.3analytics.ai/public/charts?chart_ids=${chartIds.join(',')}`}/> }
      </ChatAnswerContainer>
    </ContentBlock>
  )
}

const ChatLines = ({ chatMsgs, sendMessage }: { chatMsgs: MessageType[], sendMessage: any }) => {
  const [recommends, setRecommends] = useState<any>([]);
  useEffect(() => {
    apis.recommends().then((res: any) => setRecommends(res.data || []))
  }, [])
  return (
    <ChatLinesContainer>
      <MsgBlock msg={chatMsgs[0]} id="chat-0"/>
      <RecommendsContainer>
        {recommends?.map((reco: any, index: number) => (
          <div 
            onClick={() => sendMessage(reco.title)}
            key={index} 
            className="recommend-content">
              {reco.title}
          </div>
        ))}
      </RecommendsContainer>
      {chatMsgs?.slice(1)?.map((msg, index) => <MsgBlock msg={msg} key={index} id={`chat-${index+1}`}/>)}
    </ChatLinesContainer>
  );
};

export default ChatLines;
