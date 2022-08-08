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
  StyledLink,
} from "./styles";

const Circuits = ({ circuits }) => {
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
                  <Typography variant="h5">Circuit Name</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h5">Country</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h5">Locality</Typography>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {circuits.map(({ circuitId, Location, circuitName }) => (
                <TableRow scope="row" key={circuitId}>
                  <StyledTableCell>
                    <StyledLink to={`/circuits/${circuitName}`}>
                      {circuitName}
                    </StyledLink>
                  </StyledTableCell>
                  <StyledTableCell>{Location.country}</StyledTableCell>
                  <StyledTableCell>{Location.locality}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
    </Box>
  );
};

export default Circuits;
