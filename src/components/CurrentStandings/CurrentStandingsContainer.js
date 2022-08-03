import React, { useState, useEffect } from "react";
import CurrentStandings from "./CurrentStandings";

const CurrentStandingsContainer = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingC, setIsLoadingC] = useState(true);
  const [drivers, setDrivers] = useState();
  const [seasonRound, setSeasonRound] = useState();
  const [constructors, setConstructors] = useState();

  useEffect(() => {
    const getDriversStanding = async () => {
      try {
        const response = await fetch(
          "http://ergast.com/api/f1/current/driverStandings.json"
        );

        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        const formatedData = data.MRData.StandingsTable.StandingsLists[0];
        const sr = { season: formatedData.season, round: formatedData.round };
        setSeasonRound(sr);
        setDrivers(formatedData.DriverStandings);
        setError(null);
      } catch (err) {
        setError(err.message);
        setDrivers(null);
      } finally {
        setIsLoading(false);
      }
    };

    const getConstructorsStanding = async () => {
      try {
        const response = await fetch(
          "https://ergast.com/api/f1/current/constructorStandings.json"
        );

        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        const data = await response.json();
        const formatedData =
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        setConstructors(formatedData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setConstructors(null);
      } finally {
        setIsLoadingC(false);
      }
    };

    getDriversStanding();
    getConstructorsStanding();
  }, []);

  return (
    <>
      {isLoading || isLoadingC ? (
        "Loading..."
      ) : (
        <CurrentStandings
          drivers={drivers}
          constructors={constructors}
          seasonRound={seasonRound}
        />
      )}
    </>
  );
};

export default CurrentStandingsContainer;
