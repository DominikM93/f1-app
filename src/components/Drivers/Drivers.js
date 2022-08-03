import React from "react";
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

const Drivers = ({ drivers }) => {
  return (
    <Box>
      <TableContainer sx={styles.tableContainer}>
        <Table>
          <TableHead sx={styles.tableHead}>
            <TableRow>
              <TableCell>
                <Typography variant="h5">Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5">Driver number</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5">Nationality</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5">Date Of Birth</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drivers.map(
              ({
                driverId,
                familyName,
                givenName,
                nationality,
                dateOfBirth,
                permanentNumber,
              }) => (
                <TableRow scope="row" key={driverId}>
                  <TableCell>{`${givenName} ${familyName}`}</TableCell>
                  <TableCell>{permanentNumber}</TableCell>
                  <TableCell>{nationality}</TableCell>
                  <TableCell>{dateOfBirth}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Drivers;
