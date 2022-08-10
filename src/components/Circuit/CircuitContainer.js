import React, { useContext } from "react";
import Circuit from "./Circuit";
import { useParams } from "react-router-dom";
import { useFetchData, useFetchDataOptions } from "../../Hooks/useFetchData";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageContext from "../Context/LanguageContext";

const CircuitContainer = () => {
  const { name } = useParams();
  const { currentLanguageCode } = useContext(LanguageContext);

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

  const urls = [
    `https://api-formula-1.p.rapidapi.com/circuits?search=${name}`,
    `https://${currentLanguageCode}.wikipedia.org/api/rest_v1/page/summary/${formatedName}`,
  ];
  const {
    data: circuit,
    error: errorCircuit,
    isLoading: isLoadingC,
  } = useFetchDataOptions(urls[0]);

  const { data, error, isLoading } = useFetchData(urls[1]);

  let found = true;

  if (circuit === undefined) found = false;

  const { t } = useTranslation("circuits");
  return (
    <>
      {found ? (
        isLoading || isLoadingC ? (
          "Loading"
        ) : (
          <Circuit circuit={circuit} data={data} />
        )
      ) : (
        <Typography variant="h4">
          {t("no_info_found")} {name}
        </Typography>
      )}
    </>
  );
};

export default CircuitContainer;
