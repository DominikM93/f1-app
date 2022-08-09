import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  StyledPaper,
  StyledBoxText,
  StyledImage,
  StyledImageMobile,
} from "./styles";

const Circuit = ({
  data,
  circuit,
  circuit: {
    name,
    image,
    capacity,
    laps,
    length,
    opened,
    owner,
    race_distance,
    first_grand_prix,
    competition: {
      location: { country, city },
    },
    lap_record: { driver, year, time },
  },
}) => {
  const { t } = useTranslation("circuits");

  return (
    <>
      <Box>
        <StyledPaper>
          <Stack direction="row">
            <Stack>
              <Typography variant="h3">{name}</Typography>
              <StyledImageMobile src={image} alt={name} />
              <Stack direction="column">
                <Typography variant="h6">
                  {t("country")}: {country}
                </Typography>
                <Typography variant="h6">
                  {t("city")}: {city}
                </Typography>
                <Typography variant="h6">
                  {t("first")}:
                  {first_grand_prix === null ? t("no_info") : first_grand_prix}
                </Typography>
                <Typography variant="h6">
                  {t("opened")}: {opened === null ? t("no_info") : opened}
                </Typography>
                <Typography variant="h6">
                  {t("owner")}: {owner === null ? t("no_info") : owner}
                </Typography>
                <Typography variant="h6">
                  {t("capacity")}: {capacity === null ? t("no_info") : capacity}
                </Typography>
                <Typography variant="h6">
                  {t("number_laps")}:{laps === null ? t("no_info") : laps}
                </Typography>
                <Typography variant="h6">
                  {t("length")}: {length === null ? t("no_info") : length}
                </Typography>
                <Typography variant="h6">
                  {t("race_distance")}: {race_distance}
                </Typography>
                <Typography variant="h6">{t("lap_record")}</Typography>
                <Typography variant="h6">
                  {t("driver")}: {driver === null ? t("no_info") : driver}
                </Typography>
                <Typography variant="h6">
                  {t("time")}: {time === null ? t("no_info") : time}
                </Typography>
                <Typography variant="h6">
                  {t("year")}: {year === null ? t("no_info") : year}
                </Typography>
              </Stack>
              <StyledBoxText>
                <Typography variant="body1">{data.extract}</Typography>
              </StyledBoxText>
            </Stack>

            <StyledImage src={image} alt={name} />
          </Stack>
        </StyledPaper>
      </Box>
    </>
  );
};

export default Circuit;
