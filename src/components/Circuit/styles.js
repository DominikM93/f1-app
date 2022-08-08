import { Box, Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "60%",
  margin: "20px auto",
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

export const StyledBoxText = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  width: "70%",
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

export const StyledImage = styled("img")(({ theme }) => ({
  height: "fit-content",
  marginRight: "50px",
  marginTop: "50px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const StyledImageMobile = styled("img")(({ theme }) => ({
  height: "fit-content",
  marginRight: "50px",
  marginTop: "50px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
