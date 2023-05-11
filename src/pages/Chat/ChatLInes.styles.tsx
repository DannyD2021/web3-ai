import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

export const ChatLinesContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
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
  min-width: 55%;
  max-width: 95%;
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

  .recommend-content {
    padding: 12px;
    border-bottom: 1px solid #2E4564;
    cursor: pointer;
  }
`

export const ChartIframe = styled.iframe`
  margin-top: 10px;
  border-top: 0.5px solid rgba(118, 134, 171, 0.5);
  background: #2b374c;
`;