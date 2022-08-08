import React, { useEffect, useState } from "react";
import Circuit from "./Circuit";
import { useParams } from "react-router-dom";

import { circuit_data } from "../../Data/Circuit";
import { useFetchData } from "../../Hooks/useFetchData";
import { Typography } from "@mui/material";

const CircuitContainer = () => {
  const { name } = useParams();
  const [circuit, setCircuit] = useState();
  const [isLoadingApi, setIsLoadingApi] = useState(true);

  const replaceSpace = (name) => {
    let formated = "";
    for (let index = 0; index < name.length; index++) {
      let l = name.substring(index, index + 1);
      if (l === " ") l = "_";
      formated = formated + l;
    }
    return formated;
  };

  const formatedName = replaceSpace(name);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2af5e59140msh26daaefcb935b90p1cc964jsn114e9184daf3",
        "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
      },
    };

    fetch(
      `https://api-formula-1.p.rapidapi.com/circuits?search=${name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setCircuit(response.response[0]))
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoadingApi(false);
      });
  }, [name]);

  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${formatedName}`;

  const { data, error, isLoading } = useFetchData(url);

  let found = true;

  if (circuit === undefined) found = false;

  return (
    <>
      {/* {isLoading || isLoadingApi ? (
        "Loading"
      ) : (
        <Circuit circuit={circuit} data={data} />
      )} */}

      {found ? (
        isLoading || isLoadingApi ? (
          "Loading"
        ) : (
          <Circuit circuit={circuit} data={data} />
        )
      ) : (
        <Typography variant="h4">No information found on {name}</Typography>
      )}
    </>
  );
};

export default CircuitContainer;
