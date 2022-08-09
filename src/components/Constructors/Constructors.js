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

const Constructors = ({ constructors }) => {
  const { t } = useTranslation("constructors");

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
                  <Typography variant="h5">{t("constructor_name")}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="h5">{t("nationality")}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {constructors.map(({ constructorId, name, nationality }) => (
                <TableRow scope="row" key={constructorId}>
                  <StyledTableCell>
                    <StyledLink to={`/constructors/${name}`}>{name}</StyledLink>
                  </StyledTableCell>
                  <StyledTableCell>{nationality}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
    </Box>
  );
};

export default Constructors;
