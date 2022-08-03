import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { styles } from "./styles";

const Dropdown = ({ items, changeSeason }) => {
  return (
    <FormControl variant="standard" sx={styles.formControl}>
      <InputLabel sx={styles.text}>Season</InputLabel>
      <Select
        displayEmpty
        defaultValue=""
        onChange={(e) => changeSeason(e.target.value)}
        MenuProps={{
          PaperProps: {
            sx: styles.menuPaper,
          },
        }}
        sx={styles.text}
      >
        {items.map((item) => {
          return (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
