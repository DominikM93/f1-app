import { Box, styled } from "@mui/material";

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  backgroundColor: "rgb(230, 230, 230)",
}));

export const StyledBoxWrap = styled(Box)(({ theme }) => ({
  paddingTop: "60px",
  paddingBottom: "5rem",
}));
