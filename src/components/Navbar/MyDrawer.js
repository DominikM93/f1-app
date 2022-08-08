import { MenuItem, Typography } from "@mui/material";
import { StyledLink, StyledImg, StyledBox, StyledDrawer } from "./styles";

const MyDrawer = ({ mobileOpen, toggleDrawer }) => {
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
            <StyledLink to="/">Drivers</StyledLink>
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" component="div">
            <StyledLink to="/circuits">Circuits</StyledLink>
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" component="div">
            <StyledLink to="/constructors">Constructors</StyledLink>
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" component="div">
            <StyledLink to="/currentStandings">Current Standings</StyledLink>
          </Typography>
        </MenuItem>
      </StyledBox>
    </StyledDrawer>
  );
};

export default MyDrawer;
