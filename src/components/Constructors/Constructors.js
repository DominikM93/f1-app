import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Box,
} from "@mui/material";
import DropdownContainer from "../Dropdown/DropdownContainer";
import {
  StyledPaper,
  StyledTableCell,
  StyledTableRow,
  StyledStack,
} from "./styles";

const Constructors = ({ constructors }) => {
  return (
    <Box>
      <StyledStack direction="row">
        <Typography variant="h5">Pick a Season to see</Typography>
        <DropdownContainer />
      </StyledStack>
      <StyledPaper>
        <TableContainer>
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>
                  <Typography variant="h5">Constructor name</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h5">Nationality</Typography>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {constructors.map(({ constructorId, name, nationality }) => (
                <TableRow scope="row" key={constructorId}>
                  <StyledTableCell>{name}</StyledTableCell>
                  <StyledTableCell>{nationality}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
    </Box>
  );
};

export default Constructors;
