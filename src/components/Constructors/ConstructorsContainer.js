import React, { useState, useEffect } from "react";
import Constructors from "./Constructors";

const ConstructorsContainer = () => {
  const [constructors, setConstructors] = useState([]);
  const [season, setSeason] = useState(2022);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
