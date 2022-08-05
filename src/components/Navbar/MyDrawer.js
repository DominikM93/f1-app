import { Drawer, Box, MenuItem, Typography } from "@mui/material";
import DropdownContainer from "../Dropdown/DropdownContainer";
import { styles, MyLink } from "./styles";

const MyDrawer = ({ mobileOpen, toggleDrawer }) => {
  return (
    <Box>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box onClick={() => toggleDrawer(false)} sx={styles.box}>
          <img style={styles.imgDrawer} src="/f1_icon.png" alt="f1" />
          <MenuItem>
            <Typography variant="h6" component="div">
              <MyLink to="/">Drivers</MyLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h6" component="div">
              <MyLink to="/circuits">Circuits</MyLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h6" component="div">
              <MyLink to="/constructors">Constructors</MyLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h6" component="div">
              <MyLink to="/currentStandings">Current Standings</MyLink>
            </Typography>
          </MenuItem>
          <DropdownContainer />
        </Box>
      </Drawer>
    </Box>
  );
};

export default MyDrawer;
