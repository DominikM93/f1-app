import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // homepage idea calandar or countdown to next race

  /* const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2af5e59140msh26daaefcb935b90p1cc964jsn114e9184daf3",
      "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
    },
  };

  fetch("https://api-formula-1.p.rapidapi.com/seasons", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err)); */

  useEffect(() => {
    navigate("/drivers");
  }, []);

  return <></>;
};

export default Home;
