import { Box, Stack, Typography } from "@mui/material";
import {
  StyledPaper,
  StyledImage,
  StyledImageMobile,
  StyledStack,
} from "./style";

const Constructor = ({ constructor }) => {
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
                <Typography variant="h6">Base: {constructor.base}</Typography>
                <Typography variant="h6">
                  First Team Entry:{constructor.first_team_entry}
                </Typography>
                <Typography variant="h6">
                  President: {constructor.president}
                </Typography>
                <Typography variant="h6">
                  Director: {constructor.director}
                </Typography>
                <Typography variant="h6">
                  Technical Manager: {constructor.technical_manager}
                </Typography>
                <Typography variant="h6">
                  World Championships: {constructor.world_championships}
                </Typography>
                <Typography variant="h6">
                  Engine: {constructor.engine}
                </Typography>
                <Typography variant="h6">
                  Chassis: {constructor.chassis}
                </Typography>
                <Typography variant="h6">
                  Fastest Laps:{constructor.fastest_laps}
                </Typography>
                <Typography variant="h6">
                  Pole Positions:{constructor.pole_positions}
                </Typography>
                <Typography variant="h6">Highest Race Finish</Typography>
                <Typography variant="h6">
                  Position: {constructor.highest_race_finish.position}
                </Typography>
                <Typography variant="h6">
                  Number: {constructor.highest_race_finish.number}
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
