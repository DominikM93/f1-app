import { StyledImg } from "./styles";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const DriverInfo = ({ driverInfo, driverMedia, driver }) => {
  const { t } = useTranslation("drivers");

  return (
    <Grid container direction="column">
      <Grid item>
        <h2>{driverInfo.title}</h2>
      </Grid>
      <Grid item container direction="row">
        <Grid item xs={12} md={6}>
          <StyledImg src={driverMedia[0].srcset[0].src} alt="" />
        </Grid>
        <Grid item container xs={12} md={6} direction="column">
          <Grid item>
            <h4>
              {t("nationality")}: {driver.nationality}
            </h4>
          </Grid>
          <Grid item>
            <h4>
              {t("dob")}: {driver.dateOfBirth}
            </h4>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <p>{driverInfo.extract}</p>
      </Grid>
    </Grid>
  );
};

export default DriverInfo;
