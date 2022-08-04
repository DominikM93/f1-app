import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // homepage idea calandar or countdown to next race
  useEffect(() => {
    navigate("/drivers");
  }, []);

  return <></>;
};

export default Home;
