import React, { useState, useEffect } from "react";
import Driver from "./Driver";
import { useParams } from "react-router-dom";

const DriverContainer = () => {
  const { id } = useParams();

  const [driver, setDriver] = useState();
  const [driverMedia, setDriverMedia] = useState();
  const [driverResults, setDriverResults] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const index = id.indexOf("_");
  const driverId = id.substring(index + 1, id.length);

  const urls = [
    `https://en.wikipedia.org/api/rest_v1/page/summary/${id}`,
    `https://en.wikipedia.org/api/rest_v1/page/media-list/${id}`,
    `https://ergast.com/api/f1/drivers/${driverId}/results.json?limit=400`,
  ];

  useEffect(() => {
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then(checkStatus) // check the response of our APIs
          .then(parseJSON) // parse it to Json
          .catch((error) => console.log("There was a problem!", error))
      )
    ).then(([data_driver, data_media, data_results]) => {
      // assign to requested URL as define in array with array index.

      const formatedData_results = data_results.MRData.RaceTable.Races;

      setDriver(data_driver);
      setDriverMedia(data_media);
      setDriverResults(formatedData_results.reverse());
      setIsLoading(false);
    });

    function checkStatus(response) {
      if (response.ok) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    }

    function parseJSON(response) {
      return response.json();
    }
  }, []);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <Driver
          driver={driver}
          driverMedia={driverMedia.items}
          driverResults={driverResults}
        />
      )}
    </>
  );
};

export default DriverContainer;
