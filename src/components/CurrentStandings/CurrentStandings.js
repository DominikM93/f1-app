import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Grid,
} from "@mui/material";
import { styles, MyTabelCell } from "./styles";

const CurrentStandings = ({ drivers, constructors, seasonRound }) => {
  const driverPoints = drivers[0].points;
  const constructorPoints = constructors[0].points;

  return (
    <>
      <Grid container spacing={4} sx={styles.grid}>
        <Grid item>
          <h1>Season {seasonRound.season}</h1>
        </Grid>
        <Grid item>
          <h1>Round {seasonRound.round}</h1>
        </Grid>
      </Grid>
      <Grid container sx={styles.grid}>
        <Grid item>
          <h1>Drivers Standings</h1>
          <TableContainer sx={styles.tableContainer}>
            <Table>
              <TableHead sx={styles.tableHead}>
                <TableRow>
                  <MyTabelCell>
                    <Typography variant="h5">Position</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Driver</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Constructor</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Points</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Difference</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Wins</Typography>
                  </MyTabelCell>
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
                    <>
                      <TableRow scope="row" key={driverId}>
                        <MyTabelCell>{position}</MyTabelCell>
                        <MyTabelCell>{`${givenName} ${familyName}`}</MyTabelCell>
                        <MyTabelCell>{Constructors[0].name}</MyTabelCell>
                        <MyTabelCell>{points}</MyTabelCell>
                        <MyTabelCell>{driverPoints - points}</MyTabelCell>
                        <MyTabelCell>{wins}</MyTabelCell>
                      </TableRow>
                    </>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item>
          <h1>Constructors Standings</h1>
          <TableContainer sx={styles.tableContainer}>
            <Table>
              <TableHead sx={styles.tableHead}>
                <TableRow>
                  <MyTabelCell>
                    <Typography variant="h5">Position</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Constructor</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Points</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Difference</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Wins</Typography>
                  </MyTabelCell>
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
                    <>
                      <TableRow scope="row" key={constructorId}>
                        <MyTabelCell>{position}</MyTabelCell>
                        <MyTabelCell>{name}</MyTabelCell>
                        <MyTabelCell>{points}</MyTabelCell>
                        <MyTabelCell>{constructorPoints - points}</MyTabelCell>
                        <MyTabelCell>{wins}</MyTabelCell>
                      </TableRow>
                    </>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default CurrentStandings;
