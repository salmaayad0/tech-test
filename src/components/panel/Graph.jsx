import React from 'react'
import { Chart } from "react-google-charts";

const Graph = () => {
    const data = [
        ["user", "sayed", "2000 h"],
        ["mohmed", 100, 40],
        ["monam", 200, 400],
        ["mona", 300, 350],
        ["sayed", 500, 2000],
        ["ali", 10, 100],
      ];
      
    const options = {
        title: "Users and their hours of using",
        chartArea: { width: "50%" },
        hAxis: {
          title: "Total hours",
          minValue: 0,
        },
        vAxis: {
          title: "users",
        },
      };

  return (
    <section className='m-3'>
    <Chart
      chartType="BarChart"
      width="80%"
      height="300px"
      data={data}
      options={options}
    />
    </section>
  )
}

export default Graph