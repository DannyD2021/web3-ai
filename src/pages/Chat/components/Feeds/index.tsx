
import React from "react";
import styled from '@emotion/styled';
import ChatModuleTitle from "../ChatModuleTitle";

const FeedContainer = styled.div`
    flex: 1;
    margin-top: 16px;
    padding: 0 10px;
    .commming-soon {
        background: #1f2228;
        border-radius: 5px;
        padding-top: 30px;
        border-bottom: 1px solid rgba(118, 134, 171, 0.15);
        text-align: center;
        height: calc(100% + 50px);
    }
`

const FeedList = styled.div`
    .Feed-item {
        padding: 16px;
        background: #1f2228;
        border-radius: 5px;
        position: relative;
        margin-bottom: 15px;
        &:last-child: {
            border-bottom: none;
        }
        h5 {
            font-size: 16px;
        }

        p {
            font-size: 15px;
            color: rgba(255, 255, 255, 0.5)
        }

        .time {
            position: absolute;
            right: 16px;
            top: 16px;
            font-size: 10px;
            color: rgba(255, 255, 255, 0.5)
        }
    }
`

const FeedView = ({ chartData }: any) => {

    return (
        <FeedContainer>
            <ChatModuleTitle title="Feed"/>
            <div className="commming-soon">commming soon...</div>
            {/* <FeedList>
                <div className="Feed-item">
                    <h5>Feed Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="Feed-item">
                    <h5>Feed Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="Feed-item">
                    <h5>Feed Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="Feed-item">
                    <h5>Feed Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="Feed-item">
                    <h5>Feed Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="Feed-item">
                    <h5>Feed Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="Feed-item">
                    <h5>Feed Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
            </FeedList> */}
        </FeedContainer>
    )

};

export default FeedView;