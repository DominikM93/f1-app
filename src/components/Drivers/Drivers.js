import React from "react";
import { MyLink } from "../UI/MyLink";
import {
  StyledPaper,
  StyledTableCell,
  StyledTableRow,
  StyledTableRowData,
  StyledStack,
} from "./styles";
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

const Drivers = ({ drivers, goToDriver }) => {
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
                  <Typography variant="h4">Name</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h4">Driver number</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h4">Nationality</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h4">Date Of Birth</Typography>
                </StyledTableCell>
              </StyledTableRow>
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
                  <StyledTableRowData
                    scope="row"
                    key={driverId}
                    onClick={() =>
                      goToDriver(`/drivers/${givenName}_${familyName}`)
                    }
                  >
                    <StyledTableCell>
                      <MyLink
                        to={`/drivers/${givenName}_${familyName}`}
                      >{`${givenName} ${familyName}`}</MyLink>
                    </StyledTableCell>
                    <StyledTableCell>{permanentNumber}</StyledTableCell>
                    <StyledTableCell>{nationality}</StyledTableCell>
                    <StyledTableCell>{dateOfBirth}</StyledTableCell>
                  </StyledTableRowData>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
    </Box>
  );
};

export default Drivers;
