
import React from "react";
import styled from '@emotion/styled';
import ChatModuleTitle from "../ChatModuleTitle";
import Tooltip from '@mui/material/Tooltip';
import { ContactDicordIcon, ContactTwitterIcon, ContactTelegramIcon, ContactEmailIcon } from "@/components/icons";

const HistoryContainer = styled.div`
    min-width: 150px;
    flex: 1;
    padding-left: 10px;
    margin-top: 16px;
`

const HistoryList = styled.div`
    background: #142132;
    .history-item {
        padding: 16px;
        border-bottom: 1px solid rgba(118, 134, 171, 0.15);
        position: relative;
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
            font-size: 15px;
            color: rgba(255, 255, 255, 0.5)
        }
    }
`

const ContactUsContaner = styled.div`
    background: #142132;
    padding: 24px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .icon {
        margin-right: 5px;
        cursor: pointer;
    }
    .contact-us {
        margin: 10px;
    }
    .copyright {
        font-size: 14px;
        color: rgba(118, 134, 171, 0.7);
  }
`


const HistoryView = () => {
    return (
        <HistoryContainer>
            <ChatModuleTitle title="History"/>
            <HistoryList>
                <div className="history-item">
                    <h5>Question Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="history-item">
                    <h5>Question Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="history-item">
                    <h5>Question Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="history-item">
                    <h5>Question Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="history-item">
                    <h5>Question Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
                <div className="history-item">
                    <h5>Question Title</h5>
                    <p>description...</p>
                    <span className="time">2022.12.12</span>
                </div>
            </HistoryList>
            <ContactUsContaner>
                <div>
                    <a className='icon' target="_blank" href="https://t.me/web3analyitcs_official"><ContactDicordIcon/></a>
                    <a className='icon' target="_blank" href="https://discord.gg/tvgybU2x"><ContactTwitterIcon/></a>
                    <a className='icon' target="_blank" href="https://twitter.com/web3_analytics"><ContactTelegramIcon/></a>
                    <Tooltip title="contact@3analytics.io">
                        <span className='icon'><ContactEmailIcon/></span>
                    </Tooltip>
                </div>
                <div className="contact-us">Contact Us</div>
                <div className="copyright">© MyBitData Ltd. All rights reserved</div>
            </ContactUsContaner>
        </HistoryContainer>
    )

};

export default HistoryView;