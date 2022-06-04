import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const max = props.dataPoints.reduce((acc, curr) => {
    return acc < curr.value ? curr.value : acc;
  }, 0);

  return (
    <div className="chart">
      {props.dataPoints.map((curr) => {
        return (
          <ChartBar
            key={curr.label}
            value={curr.value}
            maxValue={max}
            label={curr.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
