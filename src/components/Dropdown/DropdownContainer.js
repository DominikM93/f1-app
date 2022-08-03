import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import SeasonsContext from "../Context/SeasonsContext";

const DropdownContainer = () => {
  const { seasons, changeSeason } = useContext(SeasonsContext);

  return (
    <>
      <Dropdown items={seasons} changeSeason={changeSeason} />
    </>
  );
};

export default DropdownContainer;
