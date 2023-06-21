
import React from "react";
import styled from '@emotion/styled';
import ChatModuleTitle from "../ChatModuleTitle";

const FeedsContainer = styled.div`
    min-width: 150px;
    flex: 1;
    padding-left: 10px;
    margin-top: 16px;
    border-left: 1px solid rgba(118, 134, 171, 0.15);
`

const FeedsView = ({ chartData }: any) => {

    return (
        <FeedsContainer>
            <ChatModuleTitle title="Feeds"/>
        </FeedsContainer>
    )

};

export default FeedsView;