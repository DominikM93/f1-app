import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { StyledPaperChart, StyledStackResults } from "./styles";

const CustomPieChart = ({ data, type }) => {
  let chartData = [];

  if (type === "constructors") {
    chartData = data.map((constructor) => {
      return {
        name: constructor.Constructor.name,
        value: parseInt(constructor.points),
        color: randomRgbColor(),
      };
    });
  } else if (type === "drivers") {
    chartData = data.map((driver) => {
      return {
        name: driver.Driver.familyName,
        value: parseInt(driver.points),
        color: randomRgbColor(),
      };
    });
  }

  function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);

    let color = `rgb(${r},${g},${b})`;
    return color;
  }

  return (
    <StyledPaperChart>
      <StyledStackResults direction="row">
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <ul>
          {chartData.map((entry, index) => (
            <li style={{ color: entry.color }} key={index}>
              {entry.name}
            </li>
          ))}
        </ul>
      </StyledStackResults>
    </StyledPaperChart>
  );
};

export default CustomPieChart;
