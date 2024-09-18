import React, { useEffect, useRef } from "react";
import {
  UsersIcon,
  ActivityIcon,
  CreditCardIcon,
  ShoppingCartIcon,
} from "../../Assets/Svg";
import { Chart, registerables } from "chart.js";
import { StockTable } from "../SubComponents";
import { CurrentStock } from "../../Utililties/Constents";

Chart.register(...registerables);

const Card = ({ children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md max-h-[150px]">
    {children}
  </div>
);

const StockDashboard = () => {
  const path = CurrentStock;
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    let barChartInstance;
    let pieChartInstance;

    if (barChartRef.current) {
      barChartInstance = new Chart(barChartRef.current, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Sales",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    if (pieChartRef.current) {
      pieChartInstance = new Chart(pieChartRef.current, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Out Stock ",
              data: [21, 19, 45, 32, 2, 39, 45, 32, 42, 39, 49, 45],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (barChartInstance) {
        barChartInstance.destroy();
      }
      if (pieChartInstance) {
        pieChartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <main className="flex-1">
        <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">
                Current Stock
              </h3>
              <UsersIcon className="h-6 w-6 text-gray-500" />
            </div>
            <div className="h-full w-full">
              <div className="text-4xl font-bold">1,234</div>
              <p className="text-gray-500 text-sm">
                <span className="text-green-400 font-semibold">+5.2%</span> from
                last month
              </p>
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">
                Outbound Stock
              </h3>
              <ShoppingCartIcon className="h-6 w-6 text-gray-500" />
            </div>
            <div>
              <div className="text-4xl font-bold">789</div>
              <p className="text-gray-500 text-sm">
                <span className="text-green-400 font-semibold">+3.1%</span> from
                last month
              </p>
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">
                Total Revenue
              </h3>
              <CreditCardIcon className="h-6 w-6 text-gray-500" />
            </div>
            <div>
              <div className="text-4xl font-bold">$45,231</div>
              <p className="text-gray-500 text-sm">
                <span className="text-green-400 font-semibold">+8.4%</span> from
                last month
              </p>
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">
                Inbound Stock
              </h3>
              <ActivityIcon className="h-6 w-6 text-gray-500" />
            </div>
            <div>
              <div className="text-4xl font-bold">124</div>
              <p className="text-gray-500 text-sm">
                <span className="text-green-400 font-semibold">+12.7% </span>
                from last month
              </p>
            </div>
          </Card>
        </div>
        <div className="p-6 grid grid-cols-1 justify-evenly w-full">
          <StockTable path={path} />
        </div>
      </main>
    </div>
  );
};

export { StockDashboard };
