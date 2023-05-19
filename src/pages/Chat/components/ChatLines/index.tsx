
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useAccount } from 'wagmi';
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
  ThumbsContainer,
  ThumbsBlock
 } from './ChatLines.styles';
 import { ChatTypes, MessageType } from "@/store/chat";
 import { ANALYTICS_HOST } from "@/const";
 import { THUMB_TYPES } from "@/apis/types";
 import Trade from "../Trade";

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


const MsgBlock = ({ msg, id } : { msg: MessageType, id: number }) => {
  const { address, isConnected } = useAccount();
  const { who, message, loading, type } = msg || {};
  const { content, messageId, chartIds = [] } = message || {};
  const className = ChatConfig[who].className;
  const showThumbs = isConnected && id > 1 && who === 'ai' && !loading;
  const [thumbs, setThumbs] = useState({
    thumbDown: false,
    thumbUp: false,
  });
  const onThumbs = (attitude: number) => {
    apis.attitude({
      message_id: messageId,
      attitude,
      reason: '',
    }).then(() => {
      setThumbs({
        thumbDown: attitude === THUMB_TYPES.DOWN,
        thumbUp: attitude === THUMB_TYPES.UP,
      })
    })
  }
  const renderContent = (type?: ChatTypes) => {
    if (type === ChatTypes.TRADE) {
      return <Trade/>
    }
    return (
      <>
         {content && <ChatContent dangerouslySetInnerHTML={{ __html: convertNewLines(content) }} />}
        {loading && <DotLoading text="W3AI is thinking"/>}
        {chartIds?.length > 0 && <ChartIframe height={chartIds.length*450+0.5} src={`${ANALYTICS_HOST}/public/charts?chart_ids=${chartIds.join(',')}`}/> }
        {showThumbs &&  (
          <ThumbsContainer>
            <ThumbsBlock onClick={() => onThumbs(THUMB_TYPES.DOWN)}><ThumbDownAltIcon className={`icon ${thumbs.thumbDown ? 'actived' : ''}`}/></ThumbsBlock>
            <ThumbsBlock onClick={() => onThumbs(THUMB_TYPES.UP)}><ThumbUpAltIcon className={`icon ${thumbs.thumbUp ? 'actived' : ''}`}/></ThumbsBlock>
          </ThumbsContainer>
        )}
      </>
    )
  }
  return (
    <ContentBlock className={className} id={`chat-${id}`}>
      <ChatLabel className={className}>
        {ChatConfig[who].label}
      </ChatLabel>
      <ChatAnswerContainer className={className}>
        {renderContent(type)}
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
    <ChatLinesContainer id="chat-container">
      <MsgBlock msg={chatMsgs[0]} id={1}/>
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
      {chatMsgs?.slice(1)?.map((msg, index) => <MsgBlock msg={msg} key={index} id={index+2}/>)}
    </ChatLinesContainer>
  );
};

export default ChatLines;
