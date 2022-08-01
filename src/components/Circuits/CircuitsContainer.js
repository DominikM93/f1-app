import React, { useState, useEffect } from "react";
import Circuits from "./Circuits";

const CircuitsContainer = () => {
  const [circuits, setCircuits] = useState([]);
  const [season, setSeason] = useState(2022);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://ergast.com/api/f1/${season}/circuits.json`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        setCircuits(data.MRData.CircuitTable.Circuits);
        setError(null);
      } catch (err) {
        setError(err.message);
        setCircuits(null);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [season]);

  return <>{isLoading ? "Loading..." : <Circuits circuits={circuits} />}</>;
};

export default CircuitsContainer;
