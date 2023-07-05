import React from "react";
import styled from "@emotion/styled";

export const ChatWrappper = styled.div`
  width: 800px;
  height: 100%;
  padding: 16px;
`;

export const ChatLinesContainer = styled.div`
  width: 100%;
  height: calc(100% - 25.5px);
  color: #fff;
  font-size: 14px;
  font-weight: 400;
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



export const ContentBlock = styled.div`
  width: 95%;
  gap: 20px;
  margin-bottom: 16px;
  clear: both;
  &.ai {
    float: left;
  }
  &.user {
    float: right;
  }
`;

export const ChatLabel = styled.div`
  text-align: center;
  margin-bottom: 5px;
  font-family: 'LanaPixel';
  color: rgba(118, 134, 171, 0.7);
  &.ai {
    text-align: left;
  }
  &.user {
    text-align: right;
  }
`;

export const ChatAnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 4px 4px 4px 0px;
  text-align: left;
  &.ai {
    background: rgba(118, 134, 171, 0.15);
  }
  &.user {
    background: #3765EF;
  }
`;

export const ChatContent = styled.div`
  word-break: break;
  word-wrap: break-word;
`;

export const RecommendsContainer = styled.div`
  background: rgba(55, 101, 239, 0.05);
  border: 1px solid #2E4564;
  border-radius: 4px;
  float: left;
  clear: both;
  margin-bottom: 16px;

  h4 {
    padding: 8px 12px 0 12px;
  }
  
  .popular-refresh {
    cursor: pointer;
    margin-left: 5px;
  }

  .recommend-content {
    padding: 8px;
    padding-left: 30px;
    border-bottom: 1px solid #2E4564;
    cursor: pointer;
    position: relative;
    color: #3765EF;

    .fire {
      position: absolute;
      color: #F36B08;
      left: 4px;
    }
  }
`

export const ChartIframe = styled.iframe`
  margin-top: 10px;
  border-top: 0.5px solid rgba(118, 134, 171, 0.5);
  background: #2b374c;
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ThumbsContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
`

export const ThumbsBlock = styled.span`
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

    &.actived {
      color: #3765EF;
    }
  }
`