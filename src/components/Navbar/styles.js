import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const MyLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "white",
}));

export const styles = {
  link: {
    textDecoration: "none",
    color: "white",
  },
  box: {
    backgroundColor: "#1976d2",
    paddingBottom: "40px",
  },
  imgDrawer: {
    width: "80px",
    height: "80px",
    paddingLeft: "30px",
  },
  img: {
    width: "80px",
    height: "80px",
  },
  menu: { display: { xs: "block", sm: "none" }, color: "white" },
  mobile: { display: { xs: "none", sm: "block" } },
};
