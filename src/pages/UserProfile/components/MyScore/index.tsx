import * as React from 'react';
import styled from '@emotion/styled';
import { MyScoreIcon } from '@/components/icons';
import { 
  MyScoreContainer,
  ScoreTitle,
  ScoreBlock,
  ScoreContainer
} from './MyScore.styles';

export default function MyScore() {
    return (
        <MyScoreContainer>
            <div className='score-header'>
              <MyScoreIcon/>
              <span className='myscore-label'>My Scores</span>
              <span className='myscore-number'>8888</span>
            </div>
            <ScoreTitle>Data Evaluation</ScoreTitle>
            <ScoreContainer>
              <ScoreBlock>
                <div className='score-block-label'>Obtained today</div>
                <div className='score-block-text'>8000</div>
              </ScoreBlock>
              <ScoreBlock>
                <div className='score-block-label'>Accumulated Score</div>
                <div className='score-block-text'>8000</div>
              </ScoreBlock>
            </ScoreContainer>
            <ScoreTitle>Chart Reference</ScoreTitle>
            <ScoreContainer>
              <ScoreBlock>
                <div className='score-block-label'>Obtained today</div>
                <div className='score-block-text'>8000</div>
              </ScoreBlock>
              <ScoreBlock>
                <div className='score-block-label'>Accumulated Score</div>
                <div className='score-block-text'>8000</div>
              </ScoreBlock>
            </ScoreContainer>
        </MyScoreContainer>
    );
}
