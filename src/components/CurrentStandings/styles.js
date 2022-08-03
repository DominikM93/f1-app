import { styled } from "@mui/material/styles";
import { TableCell } from "@mui/material";

export const styles = {
  tableContainer: {
    width: "fit-content",

    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: "10px 5px 5px lightGrey",
    marginBottom: "30px",
    marginTop: "10px",
    marginLeft: "30px",
  },
  tableHead: {
    backgroundColor: "lightGrey",
  },
  grid: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "fit-content",
    textAlign: "center",
  },
};

export const MyTabelCell = styled(TableCell)(() => ({
  padding: "5px",
  textAlign: "center",
}));
