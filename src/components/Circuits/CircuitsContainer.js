import React, { useState, useEffect, useContext } from "react";
import Circuits from "./Circuits";
import SeasonsContext from "../Context/SeasonsContext";

const CircuitsContainer = () => {
  const [circuits, setCircuits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { season } = useContext(SeasonsContext);

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
