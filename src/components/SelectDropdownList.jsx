import { MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.action,
  backgroundColor: theme.palette.common.white,
  "&:before": {
    borderColor: theme.palette.action,
  },
  "&:after": {
    borderColor: theme.palette.action,
  },
  "& .MuiSelect-icon": {
    color: theme.palette.action,
  },
  marginLeft: "auto",
  width: 200,
  height: 40,
}));
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export default function SelectDropdownList() {
  const { category, onCategoryChange } = useContext(AppContext);

  return (
    <StyledSelect
      value={category}
      onChange={(event) => {
        onCategoryChange(event.target.value);
      }}
    >
      <StyledMenuItem value="general">General</StyledMenuItem>
      <StyledMenuItem value="business">Business</StyledMenuItem>
      <StyledMenuItem value="entertainment">Entertainment</StyledMenuItem>
      <StyledMenuItem value="health">Health</StyledMenuItem>
      <StyledMenuItem value="science">Science</StyledMenuItem>
      <StyledMenuItem value="sports">Sports</StyledMenuItem>
      <StyledMenuItem value="technology">Technology</StyledMenuItem>
    </StyledSelect>
  );
}
