import React, { useContext } from "react";
import Drivers from "./Drivers";
import SeasonsContext from "../Context/SeasonsContext";
import { useFetchData } from "../../Hooks/useFetchData";

const DriversContainer = () => {
  const { season } = useContext(SeasonsContext);
  const url = `https://ergast.com/api/f1/${season}/drivers.json`;

  const { data, error, isLoading } = useFetchData(url);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <Drivers drivers={data.MRData.DriverTable.Drivers} />
      )}
    </>
  );
};

export default DriversContainer;
