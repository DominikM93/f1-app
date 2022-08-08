import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Typography,
} from "@mui/material";
import {
  StyledTableCell,
  places,
  StyledPaper,
  StyledStack,
  StyledPaper2,
  StyledTypography,
} from "./styles";

const CurrentStandings = ({ drivers, constructors, seasonRound }) => {
  const driverPoints = drivers[0].points;
  const constructorPoints = constructors[0].points;

  return (
    <>
      <StyledPaper>
        <StyledStack direction="row">
          <StyledTypography variant="h4">
            Season {seasonRound.season}
          </StyledTypography>
          <StyledTypography variant="h4">
            Round {seasonRound.round}
          </StyledTypography>
        </StyledStack>
      </StyledPaper>

      <StyledStack>
        <StyledPaper2>
          <h1>Drivers Standings</h1>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <Typography variant="h5">Position</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Driver</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Constructor</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Points</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Difference</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Wins</Typography>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {drivers.map(
                  (
                    {
                      Driver: { driverId, givenName, familyName },
                      Constructors,
                      position,
                      points,
                      wins,
                    },
                    index
                  ) => (
                    <TableRow scope="row" key={driverId} sx={places[index]}>
                      <StyledTableCell>{position}</StyledTableCell>
                      <StyledTableCell>{`${givenName} ${familyName}`}</StyledTableCell>
                      <StyledTableCell>{Constructors[0].name}</StyledTableCell>
                      <StyledTableCell>{points}</StyledTableCell>
                      <StyledTableCell>{driverPoints - points}</StyledTableCell>
                      <StyledTableCell>{wins}</StyledTableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledPaper2>

        <StyledPaper2>
          <h1>Constructors Standings</h1>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <Typography variant="h5">Position</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Constructor</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Points</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Difference</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Wins</Typography>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {constructors.map(
                  (
                    {
                      position,
                      points,
                      wins,
                      Constructor: { constructorId, name },
                    },
                    index
                  ) => (
                    <TableRow
                      scope="row"
                      key={constructorId}
                      sx={places[index]}
                    >
                      <StyledTableCell>{position}</StyledTableCell>
                      <StyledTableCell>{name}</StyledTableCell>
                      <StyledTableCell>{points}</StyledTableCell>
                      <StyledTableCell>
                        {constructorPoints - points}
                      </StyledTableCell>
                      <StyledTableCell>{wins}</StyledTableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledPaper2>
      </StyledStack>
    </>
  );
};

export default CurrentStandings;
