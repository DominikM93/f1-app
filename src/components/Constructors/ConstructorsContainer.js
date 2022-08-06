import React, { useContext } from "react";
import Constructors from "./Constructors";
import SeasonsContext from "../Context/SeasonsContext";
import { useFetchData } from "../../Hooks/useFetchData";

const ConstructorsContainer = () => {
  const { season } = useContext(SeasonsContext);
  const url = `https://ergast.com/api/f1/${season}/constructors.json`;

  const { data, error, isLoading } = useFetchData(url);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <Constructors
          constructors={data.MRData.ConstructorTable.Constructors}
        />
      )}
    </>
  );
};

export default ConstructorsContainer;
