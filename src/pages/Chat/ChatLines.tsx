
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { convertNewLines } from '@/utils'
import DotLoading from "@/components/DotLoading";
import apis from "@/apis";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
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
 import { ANALYTICS_HOST } from "@/const";

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

const ThumbsContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
`

const ThumbsBlock = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;    
  width: 36px;
  height: 36px;
  background: rgba(118, 134, 171, 0.15);
  border-radius: 43px;
  cursor: pointer;
  
  .icon {
    font-size: 1.25rem;
    color: rgba(118, 134, 171, 0.5);
  }
`


const MsgBlock = ({ msg, id } : { msg: MessageType, id: number }) => {
  const { who, message, loading } = msg || {};
  const { content, sql, chartIds = [] } = message || {};
  const className = ChatConfig[who].className;
  const showThumbs = id > 1 && who === 'ai' && !loading;
  return (
    <ContentBlock className={className} id={`chat-${id}`}>
      <ChatLabel className={className}>
        {ChatConfig[who].label}
      </ChatLabel>
      <ChatAnswerContainer className={className}>
        {content && <ChatContent dangerouslySetInnerHTML={{ __html: convertNewLines(content) }} />}
        {loading && <DotLoading text="W3AI is thinking"/>}
        {chartIds?.length > 0 && <ChartIframe height={chartIds.length*450+0.5} src={`${ANALYTICS_HOST}/public/charts?chart_ids=${chartIds.join(',')}`}/> }
        {showThumbs &&  (
          <ThumbsContainer>
          <ThumbsBlock><ThumbDownAltIcon className="icon"/></ThumbsBlock>
          <ThumbsBlock><ThumbUpAltIcon className="icon"/></ThumbsBlock>
        </ThumbsContainer>
        )}
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
      <MsgBlock msg={chatMsgs[0]} id={0}/>
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
      {chatMsgs?.slice(1)?.map((msg, index) => <MsgBlock msg={msg} key={index} id={index+1}/>)}
    </ChatLinesContainer>
  );
};

export default ChatLines;
