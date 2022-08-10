import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { places, StyledPaper2, StyledTableCell } from "./styles";
const ConstructorStanding = ({ constructors }) => {
  const constructorPoints = constructors[0].points;
  const { t } = useTranslation("standings");

  return (
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
                <TableRow scope="row" key={constructorId} sx={places[index]}>
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
  );
};

export default ConstructorStanding;
