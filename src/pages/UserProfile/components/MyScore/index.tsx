import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import apis from '@/apis';
import { MyScoreIcon, CompleteScoreIcon } from '@/components/icons';
import {
  MyScoreContainer,
  ScoreBlockContainer,
  ScoreTitle,
  ScoreBlock,
  ScoreContainer,
  InviteNewUserContainer
} from './MyScore.styles';

export default function MyScore() {
  const [scores, setScores] = useState<any>({});
  useEffect(() => {
    apis.userScore().then(res => {
      setScores(res.data || {});
    })
  }, []);
  return (
    <MyScoreContainer>
      <ScoreBlockContainer>
        <div className='score-header'>
          <MyScoreIcon />
          <span className='myscore-label'>My Scores</span>
          <span className='myscore-number'>{scores.total_chat_score}</span>
        </div>
        <ScoreTitle>Data Evaluation</ScoreTitle>
        <ScoreContainer>
          <ScoreBlock>
            <div className='score-block-label'>Obtained today</div>
            <div className='score-block-text'>{scores.daily_chat_score}</div>
          </ScoreBlock>
          <ScoreBlock>
            <div className='score-block-label'>Accumulated Score</div>
            <div className='score-block-text'>{scores.total_chat_score}</div>
          </ScoreBlock>
        </ScoreContainer>
        <ScoreTitle>Chart Reference</ScoreTitle>
        <ScoreContainer>
          <ScoreBlock>
            <div className='score-block-label'>Obtained today</div>
            <div className='score-block-text'>--</div>
          </ScoreBlock>
          <ScoreBlock>
            <div className='score-block-label'>Accumulated Score</div>
            <div className='score-block-text'>--</div>
          </ScoreBlock>
        </ScoreContainer>
      </ScoreBlockContainer>
      <ScoreBlockContainer>
        <div className='score-header'>
          <CompleteScoreIcon />
          <span className='myscore-label'>Complete tasks and earn score</span>
        </div>
        <ScoreTitle>Complete email binding</ScoreTitle>
        <ScoreContainer>
          <ScoreBlock>
            <div className='score-block-label'>Earn score</div>
            <div className='score-block-text'>0</div>
          </ScoreBlock>
          <ScoreBlock>
            <div className='score-block-label'>Completion progress</div>
            <div className='score-block-text'>0/1</div>
          </ScoreBlock>
        </ScoreContainer>
      </ScoreBlockContainer>
      <InviteNewUserContainer>
        <span>Invite new users</span>
        <span className='comming-soon'>Coming soon...</span>
      </InviteNewUserContainer>
    </MyScoreContainer>
  );
}
