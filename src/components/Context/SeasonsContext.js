import { createContext, useState, useEffect } from "react";

const SeasonsContext = createContext();

export const SeasonsProvider = ({ children }) => {
  const [seasons, setSeasons] = useState([]);
  const [season, setSeason] = useState(2022);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const changeSeason = (season) => {
    setSeason(season);
  };

  useEffect(() => {
    const getSeasons = async () => {
      try {
        const response = await fetch(
          "https://ergast.com/api/f1/seasons.json?limit=200"
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        let data = await response.json();
        data = data.MRData.SeasonTable.Seasons;
        let dataArr = data.map((item) => {
          return item.season;
        });
        dataArr = dataArr.reverse();

        setSeasons(dataArr);
        setError(null);
      } catch (err) {
        setError(err.message);
        setSeasons(null);
      } finally {
        setIsLoading(false);
      }
    };
    getSeasons();
  }, []);

  return (
    <SeasonsContext.Provider value={{ season, seasons, changeSeason }}>
      {children}
    </SeasonsContext.Provider>
  );
};

export default SeasonsContext;
