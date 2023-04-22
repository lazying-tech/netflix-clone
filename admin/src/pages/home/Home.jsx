import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";

import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
export default function Home() {
  const Months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNThmMDBiMmU5NTliNWNiZTRhZDVkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzM1MzU1Nn0.AMAkYt-dExU-eJNazcME-Qr40lYi-n6DOq-krrB_ypM",
          },
        });

        res.data
          .sort(function (a, b) {
            return a._id - b._id;
          })
          .map((item) =>
            setUserStats((prev) => [
              ...prev,
              { name: Months[item._id - 1], newUser: item.total },
            ])
          );
      } catch (e) {
        console.log(e);
      }
    };
    getStats();
  }, [Months]);

  // console.log(userStats);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
