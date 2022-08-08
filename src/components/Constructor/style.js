import { Paper, Stack, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "60%",
  margin: "20px auto",
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

export const StyledImage = styled("img")(({ theme }) => ({
  height: "fit-content",
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

export const StyledStack = styled(Stack)(({ theme }) => ({
  justifyContent: "space-between",
  padding: "0 30px",
}));
