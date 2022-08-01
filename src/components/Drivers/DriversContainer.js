import React, { useState, useEffect } from "react";
import Drivers from "./Drivers";

const DriversContainer = () => {
  const [drivers, setDrivers] = useState([]);
  const [season, setSeason] = useState(2022);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://ergast.com/api/f1/${season}/drivers.json`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        setDrivers(data.MRData.DriverTable.Drivers);
        setError(null);
      } catch (err) {
        setError(err.message);
        setDrivers(null);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [season]);

  return <>{isLoading ? "Loading..." : <Drivers drivers={drivers} />}</>;
};

export default DriversContainer;
