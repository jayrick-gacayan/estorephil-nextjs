"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import Link from "next/link";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
export default function DashboardChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Cancelled Orders",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0],
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        borderColor: "rgba(255, 0, 0, 1)",
        borderWidth: 2,
      },
      {
        label: "Pending Sellers",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(255, 140, 0, 0.2)",
        borderColor: "rgba(255, 140, 0, 1)",
        borderWidth: 2,
      },
      {
        label: "Completed Orders",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderColor: "rgba(0, 255, 0, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: { legend: false },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
    elements: {
      line: {
        fill: false, // This ensures that the area under the line is not filled
      },
    },
    maintainAspectRatio: false, // To allow the background color to fill the entire container
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Background color for the entire chart
  };

  return (
    <div className="flex justify-between ">
      <div className="bg-white  flex gap-8 flex-col border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 w-[73rem]">
        <div className="">ORDERS MADE</div>
        <div className="h-[290px] w-[700px]">
          <Line data={data} options={options as any} />
        </div>
      </div>
      <div className="bg-white w-[23rem] h-[11.5rem] p-5 flex flex-col gap-3 border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm">
        <div>Pending Sellers</div>
        <div className="pl-5 text-blue-500">
          <div>
            <Link className="" href={""}>
              Jezz Store
            </Link>
          </div>
          <div>
            <Link className="" href={""}>
              Koda Foodies
            </Link>
          </div>
          <div>
            <Link className="" href={""}>
              asdasdsad
            </Link>
          </div>
          <div>
            <Link className="" href={""}>
              Encarnacion652+6
            </Link>
          </div>
        </div>
        <div className=" text-end text-xs text-blue-500">
          <Link href={""}>View More</Link>
        </div>
      </div>
    </div>
  );
}
