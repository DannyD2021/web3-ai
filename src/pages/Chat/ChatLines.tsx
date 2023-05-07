import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { convertNewLines } from '@/utils'
import { MessageType } from "./index";

const ChatLinesContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  font-weight: 500;
  position: relative;
  overflow: auto;

  .address-link {
    text-decoration: underline;
    cursor: pointer;
    &:visited, &:hover, &:active {
      color: #fff;
    }
  }
`;

const ContentBlock = styled.div`
  min-width: 55%;
  max-width: 95%;
  gap: 20px;
  margin-bottom: 15px;
  float: right;
  clear: both;
  &.ai {
    float: left;
  }
`;

const ChatLabel = styled.span`
  font-size: 12px;
  color: #bababa;
  text-align: center;
  margin-bottom: 5px;
`;

const ChatAnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  font-size: 14px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  color: #484848;
  background-color: #fff;
  text-align: left;
  &.user {
    text-align: right;
    background-color: #1890ff;
    color: #fff;
  }
`;

const ChatContent = styled.div`
  word-break:break-all;
`;

const ChartListContainer = styled.div`
  padding: 10px;
  background: #fff;
  margin: 15px 0;
`;
const ChartContainer = styled.div`
  display: inline-block;
  width: 95%;
  height: 450px;
`;

const SQLContainer = styled.div`
  position: relative;
  padding: 10px;
  pre {
    min-height: 100px;
  }
  .run_btn {
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;

const ChatConfig: any = {
  bot: {
    className: "ai",
    label: "W3AI",
  },
  user: {
    className: "user",
    label: "You",
  },
};

const ChatLines = ({ chatMsgs, loading }: { chatMsgs: MessageType[], loading: boolean }) => {
  return (
    <ChatLinesContainer>
      {chatMsgs?.map(({ who, message }, index) => {
        const { content, sql, chartIds } = message || {};
        const className = ChatConfig[who].className;
        return (
          <ContentBlock className={className} key={index} id={`chat-${index}`}>
            <ChatLabel>
              {ChatConfig[who].label}
            </ChatLabel>
            <ChatAnswerContainer className={className}>
              {content && <ChatContent dangerouslySetInnerHTML={{ __html: convertNewLines(content) }} />}
            </ChatAnswerContainer>
          </ContentBlock>
        );
      })}
      {loading && "loading..."}
    </ChatLinesContainer>
  );
};

export default ChatLines;
