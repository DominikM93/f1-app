import React from "react";
import { AppBar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MyDrawer from "./MyDrawer";
import {
  StyledImg,
  StyledLink,
  StyledStack,
  StyledIconButton,
  StyledToolbar,
  StyledMenuItem,
} from "./styles";
import LanguagePicker from "./LanguagePicker";
import { useTranslation } from "react-i18next";

const Navbar = ({
  mobileOpen,
  toggleDrawer,
  open,
  anchorEl,
  setAnchorEl,
  handleClick,
  handleClose,
  changeLanguage,
}) => {
  const { t } = useTranslation("navbar");
  return (
    <>
      <AppBar>
        <StyledToolbar>
          <StyledStack direction="row">
            <IconButton disabled>
              <StyledImg src="/f1_icon.png" alt="f1" />
            </IconButton>
            <StyledMenuItem>
              <StyledLink to="/">
                <Typography variant="h6">{t("drivers")}</Typography>
              </StyledLink>
            </StyledMenuItem>
            <StyledMenuItem>
              <Typography variant="h6">
                <StyledLink to="/circuits">{t("circuits")}</StyledLink>
              </Typography>
            </StyledMenuItem>
            <StyledMenuItem>
              <Typography variant="h6">
                <StyledLink to="/constructors">{t("constructors")}</StyledLink>
              </Typography>
            </StyledMenuItem>
            <StyledMenuItem>
              <Typography variant="h6">
                <StyledLink to="/currentStandings">{t("standings")}</StyledLink>
              </Typography>
            </StyledMenuItem>
          </StyledStack>
          <StyledIconButton onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </StyledIconButton>
          <LanguagePicker
            open={open}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
            changeLanguage={changeLanguage}
          />
        </StyledToolbar>
      </AppBar>
      <MyDrawer mobileOpen={mobileOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
