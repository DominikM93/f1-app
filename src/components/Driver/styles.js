import { TableCell, styled, Stack, Paper, TableRow } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "4px",
  },
  textAlign: "center",
  paddingTop: "2px",
  paddingBottom: "2px",
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  borderRadius: theme.shape.borderRadius,
}));

export const StyledImg = styled("img")(({ theme }) => ({
  width: "250px",
}));

export const StyledStackDriver = styled(Stack)(({ theme }) => ({
  width: "73%",
  margin: "20px auto",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "85%",
  },
}));

export const StyledPaperDriver = styled(Paper)(({ theme }) => ({
  marginRight: "90px",
  padding: "0 20px",
  height: "fit-content",
  [theme.breakpoints.down("sm")]: {
    margin: "0 0 30px 0",
  },
}));

export const StyledPaperResults = styled(Paper)(({ theme }) => ({}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "lightgray",
}));
