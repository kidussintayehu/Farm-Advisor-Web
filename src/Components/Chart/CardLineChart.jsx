import React from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "Monday - Today ",
          "Tuesday - May 1",
          "wednesda - May 10",
          "Thursday - May  20",
          "Friday - May 30",
          "Saturday - June 10",
          "Sunday - June 20",
        ],
        datasets: [
          {
            label: "Temprature (c)",
            backgroundColor: "#f5425d",
            borderColor: "#f5425d",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: "GDD",
            fill: false,
            backgroundColor: "#000",
            borderColor: "#000",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Temprature Charts",
          fontColor: "black",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "middle",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        scales: {
          xAxes: [
            {
              // ticks: {
              //   fontColor: "rgba(255,255,255,.7)",
              // },
              position: "top",
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Week",
                fontColor: "black",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              // ticks: {
              //   fontColor: "rgba(255,255,255,.7)",
              // },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "black",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full  mb-6 bg-white rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              {/* <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Overview
              </h6> */}
              {/* <h2 className="text-black text-xl font-semibold">Sales value</h2> */}
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}