import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.common.white,
  },
  margin: theme.spacing(2),
  width: 200,
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 5),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function SearchInput() {
  const { handleSearchChange } = useContext(AppContext);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon color="action" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        onChange={(event) => handleSearchChange(event.target.value)}
      />
    </Search>
  );
}
