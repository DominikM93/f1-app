import { useContext } from "react";
import LanguageContext from "../Context/LanguageContext";
import { useTranslation } from "react-i18next";
import { MenuItem, IconButton, Box } from "@mui/material";
import { StyledLanguageIcon, StyledMenu } from "./styles";

const LanguagePicker = ({
  open,
  anchorEl,
  handleClick,
  handleClose,
  changeLanguage,
}) => {
  const { languages, currentLanguageCode } = useContext(LanguageContext);
  const { t } = useTranslation("navbar");

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <StyledLanguageIcon />
      </IconButton>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <span>{t("language")}</span>
        {languages.map(({ name, code, country_code }) => (
          <MenuItem
            key={country_code}
            onClick={() => changeLanguage(code)}
            disabled={currentLanguageCode === code}
          >
            {name}
          </MenuItem>
        ))}
      </StyledMenu>
    </Box>
  );
};

export default LanguagePicker;
