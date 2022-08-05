import { TableCell } from "@mui/material";
import { styled } from "@mui/material/styles";

export const styles = {
  tableContainer: {
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: "10px 5px 5px lightGrey",
    marginBottom: "30px",
    marginTop: "10px",
  },
  tableHead: {
    backgroundColor: "lightGrey",
  },
  grid: {
    paddingLeft: "20px",
  },
  img: {
    width: "200px",
  },
};

export const MyTabelCell = styled(TableCell)(() => ({
  padding: "5px",
  textAlign: "center",
}));
