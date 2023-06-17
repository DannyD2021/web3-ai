import React from "react";
import styled from '@emotion/styled';
import _ from "underscore";
import { lineData, areaData } from "./mockData";
import ReactECharts from 'echarts-for-react';

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

const ChartView = ({ chartData }: any) => {
    const { data = [], title, render_options = {}, render_type } = chartData || areaData;
    const { columnMapping, seriesOptions, yAxis, legend } = render_options || {};
    const columns = Object.keys(data[0]);
    const renderChart = () => {
        if (['area', 'line'].includes(render_type)) {
            let seriesNames = Object.keys(seriesOptions);
            const columnMappingX = [];
            const columnMappingY = [];
            for (let key in columnMapping) {
                if (columnMapping[key] === 'x') {
                    columnMappingX.push(key);
                }
                if (columnMapping[key] === 'y') {
                    columnMappingY.push(key);
                }
            }
            
            const xField = _.intersection(columns, columnMappingX)[0];
            // speical case, seriesOptions's key is not in columns
            seriesNames = _.intersection(columns, seriesNames);
            if (seriesNames.length === 0) {
                seriesNames = _.intersection(columns, columnMappingY);
            }
            
            const yAxisFormat = yAxis.map((axis: any, index: number) => {
                return {
                    type: 'value',
                    name: axis.title.text,
                    position: index % 2 === 0 ? 'left' : 'right',
                    alignTicks: true,
                    axisLine: {
                        show: true,
                    },
                }
            });
            // handle data
            const axisDatas = data.reduce((prev: any, item: any) => {
                // xAxis data
                if (!prev[xField]) {
                    prev[xField] = [];
                }
                prev[xField].push(item[xField]);

                // series data
                seriesNames.forEach((seriesNames => {
                    if (!prev[seriesNames]) {
                        prev[seriesNames] = [];
                    }
                    prev[seriesNames].push(item[seriesNames]);
                }))
                return prev;
            }, {})
            // config series
            const series: any = [];
            seriesNames.forEach((seriesName) => {
                const seriesConfig = seriesOptions[seriesName];
                series.push({
                    name: seriesName,
                    type: 'line',
                    areaStyle: seriesConfig?.type === 'area' ? {} : null,
                    yAxisIndex: seriesConfig?.yAxis || 0,
                    data: axisDatas[seriesName]
                })
            })
            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {
                    data: seriesNames,
                    show: legend?.enabled,
                    textStyle: {
                        color: '#fff',
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        data: axisDatas[xField],
                    }
                ],
                yAxis: yAxisFormat,
                series,
            };
            console.log('option: ', option);
            return <ReactECharts option={option} />
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
