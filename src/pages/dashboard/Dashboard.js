import { Card, CardContent, CardHeader, Paper } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";

import { OrderReport } from "./OrderReport";
import { DashboardCard } from "./DashboardCard";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

export function Dashboard() {
  const [monthlySalesData, setMonthlySalesData] = useState();
  const cardData = [
    {
      heading: "Daily Earnings",
      value: 45,
      icon: <AttachMoneyOutlinedIcon></AttachMoneyOutlinedIcon>,
    },
    {
      heading: "Daily Earnings",
      value: 45,
      icon: <AttachMoneyOutlinedIcon></AttachMoneyOutlinedIcon>,
    },
    {
      heading: "Daily Earnings",
      value: 45,
      icon: <AttachMoneyOutlinedIcon></AttachMoneyOutlinedIcon>,
    },
    {
      heading: "Daily Earnings",
      value: 45,
      icon: <AttachMoneyOutlinedIcon></AttachMoneyOutlinedIcon>,
    },
  ];
  useEffect(() => {
    // Fetch data from API
    setMonthlySalesData({
      Jan: 4,
      Feb: 3,
      March: 0,
      Apr: 10,
      May: 50,
      Jun: 60,
      July: 90,
      Aug: 100,
      Sept: 0,
      Oct: 30,
      Nov: 35,
      Dec: 22,
    });
  });

  return (
    <>
      <div className="d-flex justify-content-between">
        {cardData.map((data) => {
          return <DashboardCard
            heading={data.heading}
            value={data.value}
            icon={data.icon}
          ></DashboardCard>;
        })}
      </div>
      <br></br>
      <div className="row gap-5">
        <Card className="col-7">
          <CardHeader title="Sales Report"></CardHeader>
          <CardContent>
            {monthlySalesData && (
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: Object.keys(monthlySalesData),
                  },
                ]}
                series={[{ data: Object.values(monthlySalesData) }]}
                width={500}
                height={300}
                colors={["red"]}
              />
            )}
          </CardContent>
        </Card>
        <OrderReport></OrderReport>
      </div>
    </>
  );
}
