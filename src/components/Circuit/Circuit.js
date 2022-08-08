import { Box, Stack, Typography } from "@mui/material";
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
  return (
    <>
      <Box>
        <StyledPaper>
          <Stack direction="row">
            <Stack>
              <Typography variant="h3">{name}</Typography>
              <StyledImageMobile src={image} alt={name} />
              <Stack direction="column">
                <Typography variant="h6">Country: {country}</Typography>
                <Typography variant="h6">City: {city}</Typography>
                <Typography variant="h6">
                  {`First Grand Prix: ${
                    first_grand_prix === null ? "No info" : first_grand_prix
                  }`}
                </Typography>
                <Typography variant="h6">
                  Opened: {opened === null ? "No info" : opened}
                </Typography>
                <Typography variant="h6">
                  Owner: {owner === null ? "No info" : owner}
                </Typography>
                <Typography variant="h6">Capacity: {capacity}</Typography>
                <Typography variant="h6">Number of Laps: {laps}</Typography>
                <Typography variant="h6">Length: {length}</Typography>
                <Typography variant="h6">
                  Race Distance: {race_distance}
                </Typography>
                <Typography variant="h6">
                  Lap Record: {`${driver}: ${time}  Year:${year}`}
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
