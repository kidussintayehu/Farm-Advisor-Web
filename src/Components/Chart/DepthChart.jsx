import React from "react";
import Chart from "chart.js";

export default function DepthChart() {
  React.useEffect(() => {
    let config = {
      type: "bar",
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
          // {
          //   label: new Date().getFullYear(),
          //   backgroundColor: "#6c42f5",
          //   borderColor: "#6c42f5",
          //   data: [30, 78, 56, 34, 100, 45, 13],
          //   fill: false,
          //   barThickness: 50,
          // },
          {
            label: "Snow Depth (cm)",
            fill: false,
            backgroundColor: "#1e0278",
            borderColor: "#1e0278",
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 50,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Preciptation Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "middle",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: true,
              position: "top",
              scaleLabel: {
                display: false,
                labelString: "Week",
              },
              // gridLines: {
              //   borderDash: [2],
              //   borderDashOffset: [2],
              //   color: "rgba(33, 37, 41, 0.3)",
              //   zeroLineColor: "rgba(33, 37, 41, 0.3)",
              //   zeroLineBorderDash: [2],
              //   zeroLineBorderDashOffset: [2],
              // },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              // gridLines: {
              //   borderDash: [2],
              //   drawBorder: false,
              //   borderDashOffset: [2],
              //   color: "rgba(33, 37, 41, 0.2)",
              //   zeroLineColor: "rgba(33, 37, 41, 0.15)",
              //   zeroLineBorderDash: [2],
              //   zeroLineBorderDashOffset: [2],
              // },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart-2").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
        {/* <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              {/* <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Performance
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Total orders
              </h2> */}
            {/* </div>
          </div>
        </div> */} 
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-450-px">
            <canvas id="bar-chart-2"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
