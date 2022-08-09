import React from "react";
import {
  StyledPaper,
  StyledTableCell,
  StyledTableRow,
  StyledTableRowData,
  StyledStack,
  StyledLink,
} from "./styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Typography,
  Box,
} from "@mui/material";
import DropdownContainer from "../Dropdown/DropdownContainer";
import { useTranslation } from "react-i18next";

const Drivers = ({ drivers, goToDriver }) => {
  const { t } = useTranslation("drivers");

  return (
    <Box>
      <StyledStack direction="row">
        <Typography variant="h5">{t("pick_season")}</Typography>
        <DropdownContainer />
      </StyledStack>
      <StyledPaper>
        <TableContainer>
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>
                  <Typography variant="h4">{t("name")}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h4">{t("driver_number")}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h4">{t("nationality")}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h4">{t("dob")}</Typography>
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
                      <StyledLink
                        to={`/drivers/${givenName}_${familyName}`}
                      >{`${givenName} ${familyName}`}</StyledLink>
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
