import { MenuItem, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { StyledLink, StyledImg, StyledBox, StyledDrawer } from "./styles";

const MyDrawer = ({ mobileOpen, toggleDrawer }) => {
  const { t } = useTranslation("navbar");
  return (
    <StyledDrawer
      anchor="left"
      open={mobileOpen}
      onClose={() => toggleDrawer(false)}
    >
      <StyledBox onClick={() => toggleDrawer(false)}>
        <StyledImg src="/f1_icon.png" alt="f1" />
        <MenuItem>
          <Typography variant="h6" component="div">
            <StyledLink to="/">{t("drivers")}</StyledLink>
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" component="div">
            <StyledLink to="/circuits">{t("circuits")}</StyledLink>
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" component="div">
            <StyledLink to="/constructors">{t("constructors")}</StyledLink>
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" component="div">
            <StyledLink to="/currentStandings">{t("standings")}</StyledLink>
          </Typography>
        </MenuItem>
      </StyledBox>
    </StyledDrawer>
  );
};

export default MyDrawer;
