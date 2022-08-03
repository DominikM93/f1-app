import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
} from "@mui/material";

import { styles } from "./styles";

const Circuits = ({ circuits }) => {
  return (
    <Box>
      <TableContainer sx={styles.tableContainer}>
        <Table>
          <TableHead sx={styles.tableHead}>
            <TableRow>
              <TableCell>
                <Typography variant="h5">Circuit Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5">Country</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5">Locality</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {circuits.map(({ circuitId, Location, circuitName }) => (
              <TableRow scope="row" key={circuitId}>
                <TableCell>{circuitName}</TableCell>
                <TableCell>{Location.country}</TableCell>
                <TableCell>{Location.locality}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Circuits;
