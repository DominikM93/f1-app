import {
  Button,
  Paper,
  Stack,
  styled,
  TableCell,
  Typography,
} from "@mui/material";

export const StyledTypography = styled(Typography)({
  padding: "0 30px",
});

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "4px",
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "80%",
  margin: "20px auto",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "60%",
  },
  padding: "10px",
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "70%",
  margin: "0 auto",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
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

export const StyledStackCharts = styled(Stack)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "90%",
  margin: "0 auto",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
  },
}));

export const StyledButton = styled(Button)({
  backgroundColor: "#1976d2",
  color: "white",
  "&:hover": {
    backgroundColor: "#76b3ef",
  },
});
