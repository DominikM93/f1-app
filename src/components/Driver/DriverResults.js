import { StyledTableCell, StyledTableRow, StyledStack } from "./styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const DriverResults = ({ driverResults }) => {
  return (
    <StyledStack direction="column">
      <Typography variant="h3">Race Results</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>
                <Typography variant="h5">Season</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">Race Name</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">Position</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">Constructor</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">Laps</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">Grid</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">Points</Typography>
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {driverResults.map(({ season, raceName, Results }, index) => (
              <TableRow key={index}>
                <StyledTableCell>{season}</StyledTableCell>
                <StyledTableCell>{raceName}</StyledTableCell>
                <StyledTableCell>{Results[0].position}</StyledTableCell>
                <StyledTableCell>{Results[0].Constructor.name}</StyledTableCell>
                <StyledTableCell>{Results[0].laps}</StyledTableCell>
                <StyledTableCell>{Results[0].grid}</StyledTableCell>
                <StyledTableCell>{Results[0].points}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledStack>
  );
};

export default DriverResults;
