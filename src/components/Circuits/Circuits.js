import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import DropdownContainer from "../Dropdown/DropdownContainer";

import {
  StyledPaper,
  StyledTableCell,
  StyledTableRow,
  StyledStack,
  StyledLink,
} from "./styles";

const Circuits = ({ circuits }) => {
  const { t } = useTranslation("circuits");

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
                  <Typography variant="h5">{t("circuit_name")}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h5">{t("country")}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h5">{t("locality")}</Typography>
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
