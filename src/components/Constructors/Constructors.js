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

const Constructors = ({ constructors }) => {
  return (
    <Box>
      <TableContainer sx={styles.tableContainer}>
        <Table>
          <TableHead sx={styles.tableHead}>
            <TableRow>
              <TableCell>
                <Typography variant="h5">Constructor name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5">Nationality</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {constructors.map(({ constructorId, name, nationality }) => (
              <TableRow scope="row" key={constructorId}>
                <TableCell>{name}</TableCell>
                <TableCell>{nationality}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Constructors;
