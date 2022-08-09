import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  StyledTableCell,
  places,
  StyledPaper,
  StyledStack,
  StyledPaper2,
  StyledTypography,
} from "./styles";

const CurrentStandings = ({ drivers, constructors, seasonRound }) => {
  const driverPoints = drivers[0].points;
  const constructorPoints = constructors[0].points;
  const { t } = useTranslation("standings");

  return (
    <>
      <StyledPaper>
        <StyledStack direction="row">
          <StyledTypography variant="h4">
            {t("season")} {seasonRound.season}
          </StyledTypography>
          <StyledTypography variant="h4">
            {t("round")} {seasonRound.round}
          </StyledTypography>
        </StyledStack>
      </StyledPaper>

      <StyledStack>
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

        <StyledPaper2>
          <h1>{t("constructorS")}</h1>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <Typography variant="h5">{t("position")}</Typography>
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
                    <TableRow
                      scope="row"
                      key={constructorId}
                      sx={places[index]}
                    >
                      <StyledTableCell>{position}</StyledTableCell>
                      <StyledTableCell>{name}</StyledTableCell>
                      <StyledTableCell>{points}</StyledTableCell>
                      <StyledTableCell>
                        {constructorPoints - points}
                      </StyledTableCell>
                      <StyledTableCell>{wins}</StyledTableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledPaper2>
      </StyledStack>
    </>
  );
};

export default CurrentStandings;
