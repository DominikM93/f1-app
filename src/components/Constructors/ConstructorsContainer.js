import React, { useState, useEffect, useContext } from "react";
import Constructors from "./Constructors";
import SeasonsContext from "../Context/SeasonsContext";

const ConstructorsContainer = () => {
  const [constructors, setConstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { season } = useContext(SeasonsContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://ergast.com/api/f1/${season}/constructors.json`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        setConstructors(data.MRData.ConstructorTable.Constructors);
        setError(null);
      } catch (err) {
        setError(err.message);
        setConstructors(null);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [season]);

  return (
    <>
      {isLoading ? "Loading..." : <Constructors constructors={constructors} />}
    </>
  );
};

export default ConstructorsContainer;
