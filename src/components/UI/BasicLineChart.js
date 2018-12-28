import React from "react";
import PropTypes from "prop-types";
import ReactEcharts from "echarts-for-react";

const BasicLineChart = ({xValue, yValue})=>{
  const getOption = () => ({
    xAxis: {
      type: 'category',
      data: xValue
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: yValue,
      type: 'line'
    }]
  });
  const inlineStyle = {
    lineChart: {
      minWidth: '50rem',
      minHeight: '25rem'
    }
  }
  return (
    <div>
      {
        xValue.length === 0 || yValue.length === 0
        ? <p>暂无数据</p>
        : <ReactEcharts option={getOption()} style={inlineStyle.lineChart}/>
      }
    </div>
  );
}

BasicLineChart.propsType = {
  xValue: PropTypes.array.isRequired,
  yValue: PropTypes.array.isRequired
}

export default BasicLineChart;
