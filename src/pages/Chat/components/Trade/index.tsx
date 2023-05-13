import React, { ReactEventHandler, useEffect, useState } from "react";
import styled from '@emotion/styled';
import _ from 'underscore'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TradeSwapIcon } from "@/components/icons";
import MenuItem from '@mui/material/MenuItem';
import './trade.css';


const TradeContainer = styled.div`
    font-family: 'Asap';
    font-weight: 500;
    h4 {
        margin-bottom: 12px;
    }
    .box {
        background: rgba(118, 134, 171, 0.15);
        border-radius: 4px;
    }
    .box-inner {
        border-top: 1px solid rgba(118, 134, 171, 0.15);
        padding: 16px;
    }

    .token-select {
        .MuiSelect-select {
            padding: 0 32px 5px 0;
        }
        .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon {
            color: rgba(167, 172, 184, 0.5);
        }
        fieldset {
            border: none;
        }
    }
`;


const InputTokenContainer = styled.div`
    display: flex;
    input {
        display: inline-block;
        width: 100px;
        background: none;
        outline: none;
        border: none;
        caret-color: #31499b;
        text-align: right;
        padding-right: 10px;
    }
    .max-amount {
        color: #F36B08;
        padding: 3px 5px; 
        border: 1px solid #F36B08;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
`;

const ReverseContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: -15px 0;
    span {
        cursor: pointer;
    }
`;

const TradeButton = styled.div`
    background: #3765EF;
    border-radius: 4px;
    margin-top: 12px;
    text-align: center;
    padding: 16px;
    cursor: pointer;
`

const TOKENS = [
    {
        icon: './token/token_usdt.png',
        label: 'USDT',
        value: 'USDT',
    }, {
        icon: './token/token_eth.png',
        label: 'ETH',
        value: 'ETH',
    }
]

const Trade = () => {
    const [trade, setTrade] = useState({
        fromToken: TOKENS[0].value,
        toToken: TOKENS[1].value,
        fromAmount: 0,
        toAmount: 0,
    });
    const handleTradeChange = (tokenField: string, tokenValue: string) => {
        setTrade({
            ...trade,
            [tokenField]: tokenValue,
        });
    };
    const reverseToken = () => {
        setTrade({
            ...trade,
            fromToken: trade.toToken,
            toToken: trade.fromToken,
        });
    }
    return (
        <TradeContainer>
            <h4>Trade</h4>
            <div className="box">
                <div className="box-inner flex justify-between">
                    <span>From</span>
                    <span>Balance: 6547.00</span>
                </div>
                <div className="box-inner flex justify-between">
                    <Select
                        className="token-select"
                        onChange={(event: SelectChangeEvent) => {
                            handleTradeChange('fromToken', event.target.value as string)
                        }}
                        value={trade.fromToken}
                    >
                        {TOKENS.map(t => (
                            <MenuItem value={t.value} key={t.value}><img src={t.icon} className="token-img" /><span className="token-label">{t.label}</span></MenuItem>
                        ))}
                    </Select>
                    <InputTokenContainer>
                        <input
                            onChange={(e: React.FormEvent<HTMLInputElement>) => handleTradeChange('fromAmount', e.currentTarget.value)}
                            value={trade.fromAmount}
                            placeholder="Please input..."/>
                        <span className="max-amount">Max</span>
                    </InputTokenContainer>
                </div>
            </div>
            <ReverseContainer>
                <span onClick={reverseToken}><TradeSwapIcon/></span>
            </ReverseContainer>
            <div className="box">
                <div className="box-inner flex justify-between">
                    <span>To</span>
                </div>
                <div className="box-inner flex justify-between">
                    <Select
                        className="token-select"
                        onChange={(event: SelectChangeEvent) => {
                            handleTradeChange('toToken', event.target.value as string)
                        }}
                        value={trade.toToken}
                    >
                        {TOKENS.map(t => (
                            <MenuItem value={t.value} key={t.value}><img src={t.icon} className="token-img" /><span className="token-label">{t.label}</span></MenuItem>
                        ))}
                    </Select>
                    <span className="flex items-center">{trade.toAmount}</span>
                </div>
            </div>
            <TradeButton>Trade</TradeButton>
        </TradeContainer>
    );
};

export default Trade;
