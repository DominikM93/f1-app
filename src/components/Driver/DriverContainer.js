import React, { useState, useEffect } from "react";
import Driver from "./Driver";
import { useParams } from "react-router-dom";

const DriverContainer = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { id } = useParams();

  const [driver, setDriver] = useState();
  const [driverInfo, setDriverInfo] = useState();
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
    `http://ergast.com/api/f1/drivers/${driverId}.json`,
  ];

  useEffect(() => {
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then(checkStatus) // check the response of our APIs
          .then(parseJSON) // parse it to Json
          .catch((error) => console.log("There was a problem!", error))
      )
    ).then(([data_driver_info, data_media, data_results, data_driver]) => {
      // assign to requested URL as define in array with array index.

      const formatedData_results = data_results.MRData.RaceTable.Races;

      setDriverInfo(data_driver_info);
      setDriverMedia(data_media);
      setDriverResults(formatedData_results.reverse());
      setDriver(data_driver);
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

  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);

  const indexOfLastItem = currentPage * rowPerPage;
  const indexOfFirstItem = indexOfLastItem - rowPerPage;
  let currentItems;
  let totalPages = 0;

  if (!isLoading) {
    currentItems = driverResults.slice(indexOfFirstItem, indexOfLastItem);
    totalPages = Math.ceil(driverResults.length / rowPerPage);
  }

  const changePage = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <Driver
          driverInfo={driverInfo}
          driverMedia={driverMedia.items}
          driverResults={currentItems}
          driver={driver.MRData.DriverTable.Drivers[0]}
          currentPage={currentPage}
          changePage={changePage}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default DriverContainer;
