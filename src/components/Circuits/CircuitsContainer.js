import React, { useContext } from "react";
import Circuits from "./Circuits";
import SeasonsContext from "../Context/SeasonsContext";
import { useFetchData } from "../../Hooks/useFetchData";

const CircuitsContainer = () => {
  const { season } = useContext(SeasonsContext);
  const url = `https://ergast.com/api/f1/${season}/circuits.json`;

  const { data, error, isLoading } = useFetchData(url);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <Circuits circuits={data.MRData.CircuitTable.Circuits} />
      )}
    </>
  );
};

export default CircuitsContainer;
