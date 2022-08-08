import { Link, Paper, Stack, styled, TableCell, TableRow } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "80%",
  margin: "0 auto",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "60%",
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "4px",
  },
  textAlign: "center",
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  borderRadius: theme.shape.borderRadius,
}));

export const StyledTableRowData = styled(TableRow)(({ theme }) => ({
  cursor: "pointer",
}));

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
});
