
import React from "react";
import styled from '@emotion/styled';
import ChatModuleTitle from "../ChatModuleTitle";

const HistoryContainer = styled.div`
    min-width: 150px;
    flex: 1;
    padding-left: 10px;
    margin-top: 16px;
    border-right: 1px solid rgba(118, 134, 171, 0.15);
`

const HistoryView = ({ chartData }: any) => {

    return (
        <HistoryContainer>
            <ChatModuleTitle title="History"/>
        </HistoryContainer>
    )

};

export default HistoryView;