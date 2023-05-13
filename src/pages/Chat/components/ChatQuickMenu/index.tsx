import React, { ReactEventHandler, useEffect, useState } from "react";
import styled from '@emotion/styled';
import _ from 'underscore'
import { MenuIcon, SwapTokenIcon } from "@/components/icons";

const ChatQuickMenuContainer = styled.div`
    position: relative;
    svg {
        display: inline-block;
    }
`;

const MenuList = styled.div`
    position: absolute;
    width: 220px;
    height: 53px;
    top: -70px;
    background: #28374e;
    border-radius: 4px; 
    padding: 12px;
    display: flex;
    /* justify-content: center; */
    align-items: center; 
`;

const MenuItem = styled.div`   
    font-family: 'Asap';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    cursor: pointer;
    span {
        margin-left: 8px;
    }
`;

const ChatQuickMenu = () => {
    const [menuVisble, setMenuVisible] = useState(false);
    return (
        <ChatQuickMenuContainer>
            {menuVisble && (
                <MenuList>
                    <MenuItem>
                        <SwapTokenIcon/><span>Swap Token 交易代币</span>
                    </MenuItem>
                </MenuList>
            )}
            <span onClick={() => setMenuVisible(!menuVisble)}><MenuIcon/></span>
        </ChatQuickMenuContainer>
    );
};

export default ChatQuickMenu;
