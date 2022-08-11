import { Paper, Stack, styled, TableCell } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "4px",
  },
}));

export const StyledPaper2 = styled(Paper)(({ theme }) => ({
  width: "80%",
  margin: "10px 20px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    margin: "10px auto",
  },
  [theme.breakpoints.up("lg")]: {
    width: "60%",
  },
  padding: "10px",
  height: "fit-content",
}));

export const places = [
  {
    backgroundColor: "gold",
  },
  {
    backgroundColor: "silver",
  },
  {
    backgroundColor: "#fb7f37",
  },
];
