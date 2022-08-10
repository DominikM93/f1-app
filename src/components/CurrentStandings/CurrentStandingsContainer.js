import React, { useState } from "react";
import CurrentStandings from "./CurrentStandings";
import { useFetchData } from "../../Hooks/useFetchData";

const CurrentStandingsContainer = () => {
  const [standings, setStandings] = useState(true);
  let formatedDataD;
  let formatedDataC;
  let sr;

  const {
    data: dataD,
    error: errorD,
    isLoading: isLoadingD,
  } = useFetchData("http://ergast.com/api/f1/current/driverStandings.json");

  if (!isLoadingD) {
    formatedDataD = dataD.MRData.StandingsTable.StandingsLists[0];
    sr = { season: formatedDataD.season, round: formatedDataD.round };
  }

  const {
    data: dataC,
    error: errorC,
    isLoading: isLoadingC,
  } = useFetchData(
    "https://ergast.com/api/f1/current/constructorStandings.json"
  );

  if (!isLoadingC) {
    formatedDataC =
      dataC.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
  }
  return (
    <>
      {isLoadingD || isLoadingC ? (
        "Loading..."
      ) : (
        <CurrentStandings
          drivers={formatedDataD.DriverStandings}
          constructors={formatedDataC}
          seasonRound={sr}
          standings={standings}
          setStandings={setStandings}
        />
      )}
    </>
  );
};

export default CurrentStandingsContainer;
