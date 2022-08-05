import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const MyLink = styled(Link)(() => ({
  color: "black",
  textDecoration: "underline",
  textDecorationStyle: "dotted",
  textDecorationColor: "#ffb31a",
}));
