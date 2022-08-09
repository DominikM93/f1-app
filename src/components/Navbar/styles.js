import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export const StyledImg = styled("img")(({ theme }) => ({
  width: "80px",
  height: "80px",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px",
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#1976d2",
  paddingBottom: "40px",
  width: "200px",
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "rgba(0, 0, 0, 0)",
    height: "fit-content",
  },
}));

export const StyledToolbar = styled(Toolbar)({
  height: "65px",
});

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  height: "80px",
  paddingTop: "20px",
}));

export const StyledLanguageIcon = styled(LanguageIcon)(({ theme }) => ({
  color: "white",
}));

export const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiList-root": {
    padding: "5px",
    textAlign: "center",
  },
  "& span": {
    fontWeight: "bold",
  },
}));
