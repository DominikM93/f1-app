import { useState, useEffect, useContext } from "react";
import SeasonsContext from "../components/Context/SeasonsContext";

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { season } = useContext(SeasonsContext);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [season]);

  return { data, error, isLoading };
};
