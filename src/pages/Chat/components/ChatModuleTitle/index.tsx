
import React from "react";
import styled from '@emotion/styled';

const ChatModuleTitleContainer = styled.h4`
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    .left {
        display: inline-block;
        width: 4px;
        height: 16px;
        background: #3765EF;
        border-radius: 11px;
        margin-right: 8px;
    }
`

const ChatModuleTitle = ({ title }: { title: string }) => {

    return (
        <ChatModuleTitleContainer>
            <span className="left" />
            {title}
        </ChatModuleTitleContainer>
    )

};

export default ChatModuleTitle;