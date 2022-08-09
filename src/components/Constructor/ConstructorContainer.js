import React from "react";
import Constructor from "./Constructor";
import { useFetchDataOptions } from "../../Hooks/useFetchData";
import { useParams } from "react-router-dom";

const ConstructorContainer = () => {
  const { name } = useParams();
  const url = `https://api-formula-1.p.rapidapi.com/teams?search=${name}`;
  const { data, error, isLoading } = useFetchDataOptions(url);

  return <>{isLoading ? "Loading..." : <Constructor constructor={data} />}</>;
};

export default ConstructorContainer;
