import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { StyledPaper2, StyledTableCell, places } from "./styles";

const DriverStanding = ({ drivers }) => {
  const { t } = useTranslation("standings");
  const driverPoints = drivers[0].points;

  return (
    <StyledPaper2>
      <h1>{t("driverS")}</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <Typography variant="h5">{t("position")}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">{t("driver")}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">{t("constructor")}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">{t("points")}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">{t("difference")}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="h5">{t("wins")}</Typography>
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
  );
};

export default DriverStanding;
