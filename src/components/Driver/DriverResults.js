import { StyledTableCell, StyledTableRow, StyledStack } from "./styles";
import {
  Pagination,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const DriverResults = ({ driverResults, changePage, totalPages }) => {
  const { t } = useTranslation("drivers");
  return (
    <StyledStack direction="column">
      <Typography variant="h3">{t("race_results")}</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>
                <Typography variant="h5">{t("season")}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">{t("race_name")}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">{t("position")}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">{t("constructor")}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">{t("laps")}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">{t("grid")}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">{t("points")}</Typography>
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {driverResults.map(({ season, raceName, Results }, index) => (
              <TableRow sx={{ color: "red" }} key={index}>
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
      <Pagination count={totalPages} onChange={changePage} />
    </StyledStack>
  );
};

export default DriverResults;
