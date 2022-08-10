import { useTranslation } from "react-i18next";
import {
  StyledPaper,
  StyledStack,
  StyledTypography,
  StyledStackCharts,
  StyledButton,
} from "./styles";
import DriverStandingContainer from "../DriverStanding/DriverStandingContainer";
import ConstructorStandingContainer from "../ConstructorStanding/ConstructorStanding";
import CustomPieChart from "../ConstructorStanding/CustomPieChart";

const CurrentStandings = ({
  drivers,
  constructors,
  seasonRound,
  setStandings,
  standings,
}) => {
  const { t } = useTranslation("standings");

  return (
    <>
      <StyledPaper>
        <StyledStack direction="row">
          <StyledTypography variant="h5">
            {t("season")} {seasonRound.season}
          </StyledTypography>
          <StyledTypography variant="h5">
            {t("round")} {seasonRound.round}
          </StyledTypography>
          <StyledTypography variant="h5">
            {standings ? (
              <StyledButton
                disableRipple
                onClick={() => setStandings(!standings)}
              >
                {t("show_constructor")}
              </StyledButton>
            ) : (
              <StyledButton
                disableRipple
                onClick={() => setStandings(!standings)}
              >
                {t("show_driver")}
              </StyledButton>
            )}
          </StyledTypography>
        </StyledStack>
      </StyledPaper>

      <StyledStack>
        {standings ? (
          <StyledStackCharts direction="row">
            <DriverStandingContainer drivers={drivers} />
            <CustomPieChart data={drivers} type="drivers" />
          </StyledStackCharts>
        ) : (
          <StyledStackCharts direction="row">
            <ConstructorStandingContainer constructors={constructors} />
            <CustomPieChart data={constructors} type="constructors" />
          </StyledStackCharts>
        )}
      </StyledStack>
    </>
  );
};

export default CurrentStandings;
