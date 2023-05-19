import * as React from 'react';
import styled from '@emotion/styled';


export const MyScoreContainer = styled.div`
`

export const ScoreBlockContainer = styled.div`
  margin-top: 24px;
  background: rgba(118, 134, 171, 0.05);
  border: 1px solid rgba(118, 134, 171, 0.15);
  border-radius: 4px;
  padding: 16px;
  .score-header {
    display: flex;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(118, 134, 171, 0.15);
    .myscore-label {
      margin: 0 12px;
    }
    .myscore-number {
      font-size: 18px;
      color: #F36B08;
    }
  }
`

export const ScoreTitle = styled.h4`
  margin: 12px 0;
`

export const ScoreContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const ScoreBlock = styled.div`
  width: 50%;
  padding: 12px 16px;
  background: rgba(118, 134, 171, 0.1);
  border-radius: 4px;
  
  .score-block-label {
    font-family: 'PingFang SC';
    color: rgba(118, 134, 171, 0.7);
    font-size: 14px;
  }
  .score-block-text {
    font-family: 'DIN';
    font-weight: 700;
    font-size: 18px;
  }
`

export const InviteNewUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  background: rgba(118, 134, 171, 0.05);
  border: 1px solid rgba(118, 134, 171, 0.15);
  border-radius: 4px;
  padding: 16px;
  .comming-soon {
    background: rgba(118, 134, 171, 0.15);
    border-radius: 4px;
    padding: 4px 12px;
    color: rgba(118, 134, 171, 0.7);
  }
`