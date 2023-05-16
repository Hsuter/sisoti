import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import Chart from "chart.js/auto";
const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "rgba(0, 113, 189, 0.2)", // Customize the background color
        borderColor: "rgba(0, 113, 189, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false,

    scales: {
      yAxis: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="overflow-x-scroll">
      <Row className="flex flex-nowrap ">
        <Title level={2} className="">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <div className="w-[500vw] h-[500px] overflow-x-scroll ">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
