import React, { useContext } from "react";
import Drivers from "./Drivers";
import SeasonsContext from "../Context/SeasonsContext";
import { useFetchData } from "../../Hooks/useFetchData";
import { useNavigate } from "react-router-dom";

const DriversContainer = () => {
  const { season } = useContext(SeasonsContext);
  const url = `https://ergast.com/api/f1/${season}/drivers.json`;
  const { data, error, isLoading } = useFetchData(url);

  const navigate = useNavigate();
  const goToDriver = (id) => {
    console.log(navigate(id));
  };

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <Drivers
          drivers={data.MRData.DriverTable.Drivers}
          goToDriver={goToDriver}
        />
      )}
    </>
  );
};

export default DriversContainer;
