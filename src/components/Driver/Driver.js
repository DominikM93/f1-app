import { styles, MyTabelCell } from "./styles";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Typography,
  TableBody,
  Grid,
} from "@mui/material";

const Driver = ({ driver, driverMedia, driverResults }) => {
  return (
    <>
      <Grid
        container
        spacing={1}
        direction="row"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item container md={4}>
          <Grid item sx={styles.grid}>
            <h1>{driver.title}</h1>
          </Grid>
          <Grid item container direction="column" sx={styles.grid}>
            <Grid item>
              <img
                style={styles.img}
                src={driverMedia[0].srcset[0].src}
                alt=""
              />
            </Grid>
            <Grid item>
              <p>{driver.extract}</p>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={8}>
          <TableContainer sx={styles.tableContainer}>
            <h1>Race Results</h1>
            <Table>
              <TableHead sx={styles.tableHead}>
                <TableRow>
                  <MyTabelCell>
                    <Typography variant="h5">Season</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Race Name</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Position</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Constructor</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Laps</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Grid</Typography>
                  </MyTabelCell>
                  <MyTabelCell>
                    <Typography variant="h5">Points</Typography>
                  </MyTabelCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {driverResults.map(({ season, raceName, Results }, index) => (
                  <TableRow key={index}>
                    <MyTabelCell>{season}</MyTabelCell>
                    <MyTabelCell>{raceName}</MyTabelCell>
                    <MyTabelCell>{Results[0].position}</MyTabelCell>
                    <MyTabelCell>{Results[0].Constructor.name}</MyTabelCell>
                    <MyTabelCell>{Results[0].laps}</MyTabelCell>
                    <MyTabelCell>{Results[0].grid}</MyTabelCell>
                    <MyTabelCell>{Results[0].points}</MyTabelCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Driver;
