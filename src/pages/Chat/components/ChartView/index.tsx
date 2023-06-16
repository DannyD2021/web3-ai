import React from "react";
import styled from '@emotion/styled';
import _ from "underscore";
import { Line } from '@ant-design/plots';

const ChartViewContainer = styled.div`
    margin-top: 10px;
    padding: 10px;
    background: rgba(55, 101, 239, 0.05);
    text-align: center;
    h2 {
        color: #8296d1;
        margin-bottom: 15px;
    }
`


const lineData = {
    "chart_id": 288,
    "type": "chart",
    "title": "ChartCustom NFT Floor Tracker",
    "render_type": "line",
    "render_options": {
        "sortX": true,
        "xAxis": {
            "type": "-",
            "title": {
                "text": ""
            },
            "tickFormat": ""
        },
        "yAxis": [
            {
                "type": "-",
                "title": {
                    "text": "Price (ETH)"
                }
            }
        ],
        "legend": {
            "enabled": false
        },
        "series": {
            "percentValues": false
        },
        "reverseX": false,
        "numberFormat": "0.00",
        "columnMapping": {
            "Day": "x",
            "Time": "x",
            "Time Interval": "x",
            "Floor (Approx)": "y",
            "Floor Price Ξ": "y"
        },
        "seriesOptions": {
            "Floor (Approx)": {
                "type": "area",
                "yAxis": 0,
                "zIndex": 0
            }
        },
        "valuesOptions": {},
        "showDataLabels": false,
        "globalSeriesType": "line"
    },
    "data": [
        {
            "Time Interval": "2021-06-30T00:00:00+00:00",
            "Volume Ξ": 436.2504204183215898,
            "Floor Price Ξ": 0.07
        },
        {
            "Time Interval": "2021-07-01T00:00:00+00:00",
            "Volume Ξ": 234.4223984531985889,
            "Floor Price Ξ": 0.067
        },
        {
            "Time Interval": "2021-07-02T00:00:00+00:00",
            "Volume Ξ": 126.2050680386772336,
            "Floor Price Ξ": 0.0553
        },
        {
            "Time Interval": "2021-07-03T00:00:00+00:00",
            "Volume Ξ": 41.3146717641353939,
            "Floor Price Ξ": 0.053
        },
        {
            "Time Interval": "2021-07-04T00:00:00+00:00",
            "Volume Ξ": 40.3115495693165303,
            "Floor Price Ξ": 0.049
        },
        {
            "Time Interval": "2021-07-05T00:00:00+00:00",
            "Volume Ξ": 70.1775439060451407,
            "Floor Price Ξ": 0.04
        },
        {
            "Time Interval": "2021-07-06T00:00:00+00:00",
            "Volume Ξ": 22.0940635773107597,
            "Floor Price Ξ": 0.0488
        },
        {
            "Time Interval": "2021-07-07T00:00:00+00:00",
            "Volume Ξ": 41.6046669740563740,
            "Floor Price Ξ": 0.04991
        },
        {
            "Time Interval": "2021-07-08T00:00:00+00:00",
            "Volume Ξ": 15.4069055077018367,
            "Floor Price Ξ": 0.0605
        },
        {
            "Time Interval": "2021-07-09T00:00:00+00:00",
            "Volume Ξ": 21.0877440616146936,
            "Floor Price Ξ": 0.059
        },
        {
            "Time Interval": "2021-07-10T00:00:00+00:00",
            "Volume Ξ": 11.5725165231055101,
            "Floor Price Ξ": 0.0641
        },
        {
            "Time Interval": "2021-07-11T00:00:00+00:00",
            "Volume Ξ": 12.6712165231055101,
            "Floor Price Ξ": 0.062400000000000004
        },
        {
            "Time Interval": "2021-07-12T00:00:00+00:00",
            "Volume Ξ": 16.4999954129885269,
            "Floor Price Ξ": 0.059
        },
        {
            "Time Interval": "2021-07-13T00:00:00+00:00",
            "Volume Ξ": 31.6202752745252696,
            "Floor Price Ξ": 0.0698
        },
        {
            "Time Interval": "2021-07-14T00:00:00+00:00",
            "Volume Ξ": 18.8006165231055101,
            "Floor Price Ξ": 0.065
        },
        {
            "Time Interval": "2021-07-15T00:00:00+00:00",
            "Volume Ξ": 22.3988407595830150,
            "Floor Price Ξ": 0.06712
        },
        {
            "Time Interval": "2021-07-16T00:00:00+00:00",
            "Volume Ξ": 40.3112211694404074,
            "Floor Price Ξ": 0.069
        },
        {
            "Time Interval": "2021-07-17T00:00:00+00:00",
            "Volume Ξ": 13.2056312517608578,
            "Floor Price Ξ": 0.07289028620988725
        },
    ]
}

const ChartView = ({ chartData }: any) => {
    const { data = [], title, render_options = {}, render_type } = chartData || lineData;
    const { columnMapping } = render_options || {};
    const columns = Object.keys(data[0]);
    const renderChart = () => {
        if (render_type === 'line') {
            const columnMappingX = [];
            const columnMappingY = [];
            for (let key in columnMapping){
                if (columnMapping[key] === 'x') {
                    columnMappingX.push(key);
                }
                if (columnMapping[key] === 'y') {
                    columnMappingY.push(key);
                } 
            }
            const xField = _.intersection(columns, columnMappingX)[0];
            const yField = _.intersection(columns, columnMappingY)[0];
            const config = {
                data,
                xField,
                yField,
                // seriesField: 'category',
                // xAxis: {
                //   type: 'time',
                // },
                // yAxis: {
                // },
              };
            
            return <Line {...config}/>
        }
        return ''
    }
    return (
        <ChartViewContainer>
            {title && <h2>{title}</h2>}
            {renderChart()}
        </ChartViewContainer>
    )

};

export default ChartView;
