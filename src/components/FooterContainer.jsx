import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { styled } from "@mui/material/styles";

const Footer = styled("div")(({ theme }) => ({
  margin: theme.spacing(2, 0),
  display: "flex",
  justifyContent: "space-between",
}));

export default function FooterContainer() {
  const {
    articles,
    loading,
    handleNextButton,
    handlePreviousButton,
    pageNumber,
  } = useContext(AppContext);

  return (
    <Footer>
      <Button
        disabled={!loading && pageNumber === 1}
        variant="outlined"
        onClick={handlePreviousButton}
      >
        Previous
      </Button>
      <Button
        disabled={!loading && !articles?.length}
        variant="outlined"
        onClick={handleNextButton}
      >
        Next
      </Button>
    </Footer>
  );
}
