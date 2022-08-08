import React from "react";
import Constructor from "./Constructor";
import { useFetchDataOptions } from "../../Hooks/useFetchData";

const ConstructorContainer = () => {
  const url = `https://api-formula-1.p.rapidapi.com/teams?search=red`;
  const { data, error, isLoading } = useFetchDataOptions(url);

  return <>{isLoading ? "Loading..." : <Constructor constructor={data} />}</>;
};

export default ConstructorContainer;
