import { Select, MenuItem } from "@mui/material";
import { StyledFormControl } from "./styles";

const Dropdown = ({ items, changeSeason }) => {
  return (
    <StyledFormControl variant="standard">
      <Select
        displayEmpty
        defaultValue=""
        onChange={(e) => changeSeason(e.target.value)}
        MenuProps={{
          PaperProps: {
            sx: { maxHeight: 400 },
          },
        }}
      >
        {items.map((item) => {
          return (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </StyledFormControl>
  );
};

export default Dropdown;
