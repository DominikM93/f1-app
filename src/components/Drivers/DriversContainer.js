import React, { useState, useEffect, useContext } from "react";
import Drivers from "./Drivers";
import SeasonsContext from "../Context/SeasonsContext";

const DriversContainer = () => {
  const [drivers, setDrivers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { season } = useContext(SeasonsContext);

  useEffect(() => {
    const getDrivers = async () => {
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

    getDrivers();
  }, [season]);

  return <>{isLoading ? "Loading..." : <Drivers drivers={drivers} />}</>;
};

export default DriversContainer;
