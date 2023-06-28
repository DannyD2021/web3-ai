
import React from "react";
import styled from '@emotion/styled';
import ChatModuleTitle from "../ChatModuleTitle";

const FeedsContainer = styled.div`
    min-width: 150px;
    flex: 1;
    margin-top: 16px;
    padding: 0 10px;
`

const FeedsList = styled.div`
    .feeds-item {
        padding: 16px;
        background: #142132;
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

const FeedsView = ({ chartData }: any) => {

    return (
        <FeedsContainer>
            <ChatModuleTitle title="Feeds"/>
            <FeedsList>
                <div className="feeds-item">
                    <h5>Feeds Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="feeds-item">
                    <h5>Feeds Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="feeds-item">
                    <h5>Feeds Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="feeds-item">
                    <h5>Feeds Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="feeds-item">
                    <h5>Feeds Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="feeds-item">
                    <h5>Feeds Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="feeds-item">
                    <h5>Feeds Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
            </FeedsList>
        </FeedsContainer>
    )

};

export default FeedsView;