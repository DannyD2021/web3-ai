import React from "react";
import styled from '@emotion/styled';

const CounterViewContainer = styled.div`
    margin-top: 10px;
    padding: 15px;
    text-align: center;
    background: rgba(55, 101, 239, 0.05);

    h2 {
        color: #8296d1;
        margin-bottom: 15px;
    }
    .counter-text {
        color: #e3722f;
        font-size: 20px;
    }
`


const counterChartData: any = {
    "chart_id": 14399,
    "type": "counter",
    "title": "24 Hour Change Wintermute's Portfolio Allocation",
    "render_options": {
        "id": 1577448,
        "type": "counter",
        "name": "Wintermute's Portfolio Value",
        "options": {
            "rowNumber": 1,
            "stringPrefix": "$",
            "stringSuffix": "",
            "stringDecimal": 2,
            "counterColName": "cumulative_24h_change"
        },
        "created_at": "2022-06-12T04:53:16.422952+00:00",
        "__typename": "visualizations"
    },
    "data": [
        {
            "time": "2023-06-16T00:00:00+00:00",
            "cumulative_eth_balance": -393586106.1981253,
            "cumulative_usdc_balance": 13578.712456957204,
            "cumulative_dydx_balance": 1895649.805868784,
            "cumulative_btrst_balance": 1727130.5528052913,
            "cumulative_mpl_balance": 563.0053359989889,
            "cumulative_lido_balance": 5780013.8038654765,
            "cumulative_aave_balance": 708.3213907492491,
            "cumulative_qrdo_balance": 226457.18747932656,
            "cumulative_ali_balance": 186.67440786013321,
            "cumulative_ctx_balance": 283068.1359961988,
            "cumulative_cube_balance": 12.025077641272219,
            "cumulative_kp3r_balance": 2130017.3943568384,
            "cumulative_elon_balance": 4075.9843640949985,
            "cumulative_other_balance": 19671495.65476095,
            "cumulative_total_balance": -361853134.93783116,
            "cumulative_24h_change": -4084069.7198778368
        },
    ]
  }

const CounterView = ({ chartData }: any) => {
    const { data = [], title, render_options = {} } = chartData || counterChartData;
    const { stringPrefix = '', stringDecimal = 2, counterColName = '' } = render_options?.options || {};
    const counterValue = data?.[0]?.[counterColName] || 0;
    return (
        <CounterViewContainer>
            {title && <h2>{title}</h2>}
            <p className="counter-text">{stringPrefix} {Number.parseFloat(counterValue).toFixed(stringDecimal)}</p>
        </CounterViewContainer>
    )

};

export default CounterView;
