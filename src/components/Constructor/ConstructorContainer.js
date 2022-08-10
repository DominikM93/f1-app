import React from "react";
import Constructor from "./Constructor";
import { useFetchDataOptions } from "../../Hooks/useFetchData";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ConstructorContainer = () => {
  const { name } = useParams();
  const url = `https://api-formula-1.p.rapidapi.com/teams?search=${name}`;
  const { data, error, isLoading } = useFetchDataOptions(url);

  let found = true;

  if (data === undefined) found = false;

  const { t } = useTranslation("constructors");

  return (
    <>
      {found ? (
        isLoading ? (
          "Loading..."
        ) : (
          <Constructor constructor={data} />
        )
      ) : (
        <Typography variant="h4">
          {t("no_info_found")} {name}
        </Typography>
      )}
    </>
  );
};

export default ConstructorContainer;
