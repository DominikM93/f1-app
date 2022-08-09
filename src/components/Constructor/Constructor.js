import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  StyledPaper,
  StyledImage,
  StyledImageMobile,
  StyledStack,
} from "./style";

const Constructor = ({ constructor }) => {
  const { t } = useTranslation("constructors");

  return (
    <>
      <Box>
        <StyledPaper>
          <StyledStack direction="row">
            <Stack>
              <Typography variant="h3">{constructor.name}</Typography>
              <StyledImageMobile
                src={constructor.logo}
                alt={constructor.name}
              />
              <Stack direction="column">
                <Typography variant="h6">
                  {t("base")}: {constructor.base}
                </Typography>
                <Typography variant="h6">
                  {t("first_team_entry")}:{constructor.first_team_entry}
                </Typography>
                <Typography variant="h6">
                  {t("president")}: {constructor.president}
                </Typography>
                <Typography variant="h6">
                  {t("director")}: {constructor.director}
                </Typography>
                <Typography variant="h6">
                  {t("technical_manager")}:{constructor.technical_manager}
                </Typography>
                <Typography variant="h6">
                  {t("world_championships")}:{constructor.world_championships}
                </Typography>
                <Typography variant="h6">
                  {t("engine")}: {constructor.engine}
                </Typography>
                <Typography variant="h6">
                  {t("chassis")}: {constructor.chassis}
                </Typography>
                <Typography variant="h6">
                  {t("fastest_laps")}:{constructor.fastest_laps}
                </Typography>
                <Typography variant="h6">
                  {t("pole_positions")}:{constructor.pole_positions}
                </Typography>
                <Typography variant="h6">
                  {t("highest_race_finish")}{" "}
                </Typography>
                <Typography variant="h6">
                  {t("position")}: {constructor.highest_race_finish.position}
                </Typography>
                <Typography variant="h6">
                  {t("number")}: {constructor.highest_race_finish.number}
                </Typography>
              </Stack>
            </Stack>
            <StyledImage src={constructor.logo} alt={constructor.name} />
          </StyledStack>
        </StyledPaper>
      </Box>
    </>
  );
};

export default Constructor;
