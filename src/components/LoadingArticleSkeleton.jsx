import { Skeleton } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { StyledCard } from "./StyledCard";
import Box from "@mui/material/Box";

export default function LoadingArticleSkeleton() {
  return (
    <StyledCard>
      <CardActionArea>
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: "5rem" }}></Skeleton>
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }}></Skeleton>
        </CardContent>
      </CardActionArea>
      <Box p={2}>
        <Skeleton
          variant="text"
          width={200}
          sx={{ fontSize: "1.5rem" }}
        ></Skeleton>
        <Skeleton
          variant="text"
          width={200}
          sx={{ fontSize: "1.5rem" }}
        ></Skeleton>
      </Box>
    </StyledCard>
  );
}
