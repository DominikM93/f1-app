import { useContext } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import LanguageContext from "../Context/LanguageContext";
import { useTranslation } from "react-i18next";

const { Menu, MenuItem, IconButton } = require("@mui/material");

const LanguagePicker = ({
  open,
  anchorEl,
  handleClick,
  handleClose,
  changeLanguage,
}) => {
  const { languages } = useContext(LanguageContext);
  const { t } = useTranslation("navbar");
  return (
    <div>
      <IconButton onClick={handleClick}>
        <LanguageIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <span>{t("language")}</span>
        {languages.map(({ name, code, country_code }) => (
          <MenuItem key={country_code} onClick={() => changeLanguage(code)}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguagePicker;
