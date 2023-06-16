
import React, { useState, useEffect, useRef } from "react";
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
  ThumbsBlock,
  FooterContainer
} from './ChatLines.styles';
import { ChatTypes, MessageType } from "@/store/chat";
import { ANALYTICS_HOST } from "@/const";
import { THUMB_TYPES } from "@/apis/types";
import Trade from "../Trade";
import TableView from "../TableView";
import ChartView from "../ChartView";
import CounterView from "../CounterView";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CopyToClipboardButton from "@/components/CopyToClickButton";

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

const MsgBlock = ({ msg, id }: { msg: MessageType, id: number }) => {
  const { address, isConnected } = useAccount();
  const { who, message, loading, type } = msg || {};
  const { content, messageId, chartIds = [], chartData } = message || {};
  const className = ChatConfig[who].className;
  const showThumbs = isConnected && messageId && id > 1 && who === 'ai' && !loading;
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
      return <Trade />
    }
    return (
      <>
        {content && <ChatContent dangerouslySetInnerHTML={{ __html: convertNewLines(content) }} />}
        {loading && <DotLoading text="W3AI is thinking" />}
        {chartIds?.length > 0 && <ChartIframe height={chartIds.length * 450 + 0.5} src={`${ANALYTICS_HOST}/public/charts?chart_ids=${chartIds.join(',')}`} />}

        {showThumbs && (
          <FooterContainer>
            <CopyToClipboardButton text={content} />
            <ThumbsContainer>
              <ThumbsBlock onClick={() => onThumbs(THUMB_TYPES.DOWN)}><ThumbDownAltIcon className={`icon ${thumbs.thumbDown ? 'actived' : ''}`} /></ThumbsBlock>
              <ThumbsBlock onClick={() => onThumbs(THUMB_TYPES.UP)}><ThumbUpAltIcon className={`icon ${thumbs.thumbUp ? 'actived' : ''}`} /></ThumbsBlock>
            </ThumbsContainer>
          </FooterContainer>
        )}
        {(chartData && chartData.type === 'table') && <TableView chartData={chartData} />}
        {(chartData && chartData.type === 'chart') && <ChartView chartData={chartData} />}
        {(chartData && chartData.type === 'chart') && <CounterView chartData={chartData} />}
        {/* <CounterView chartData={chartData} /> */}
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
  const mutationRef = useRef<any>();
  const [recommends, setRecommends] = useState<any>([]);
  useEffect(() => {
    apis.recommends().then((res: any) => setRecommends(res.data || []))

    // auto scroll
    if (mutationRef.current) {
      const observer = new MutationObserver(() => {
        mutationRef.current.scrollTo({ top: mutationRef.current.scrollHeight, behavior: "smooth", })
      });
      observer.observe(mutationRef.current, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
      });
      return () => observer.disconnect();
    }
  }, [])
  return (
    <ChatLinesContainer id="chat-container" ref={mutationRef}>
      <MsgBlock msg={chatMsgs[0]} id={1} />
      <RecommendsContainer>
        {recommends?.map((reco: any, index: number) => (
          <div
            onClick={() => sendMessage(reco.title)}
            key={index}
            className="recommend-content">
            {index === 0 && <span className="fire"><LocalFireDepartmentIcon fontSize="small" /></span>}
            {reco.title}
          </div>
        ))}
      </RecommendsContainer>
      {chatMsgs?.slice(1)?.map((msg, index) => <MsgBlock msg={msg} key={index} id={index + 2} />)}
    </ChatLinesContainer>
  );
};

export default ChatLines;
