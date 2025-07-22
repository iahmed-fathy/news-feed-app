import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchInput from "./SearchInput";
import SelectDropdownList from "./SelectDropdownList";

export default function NewsHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">News Feed</Typography>
        <SearchInput />
        <SelectDropdownList />
      </Toolbar>
    </AppBar>
  );
}
