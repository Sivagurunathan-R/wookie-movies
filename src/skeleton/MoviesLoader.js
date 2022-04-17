import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Stack, Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const GridContainer = styled(Grid)(({ theme }) => ({
  overflowX: "hidden",
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(3),
  paddingBottom: theme.spacing(1),
}));

const MoviesLoader = (props) => {
  const { cardCount } = props;

  const cardArray = Array.from(Array(cardCount).keys());

  return (
    <>
      <GridContainer mb={3}>
        {cardArray.map((value, index) => (
          <>
            <Grid item>
              <Skeleton
                variant="rectangular"
                width={320}
                height={320}
                key={`loader-${index}`}
                animation="wave"
                sx={{borderRadius : "0.5rem"}}
              />
            </Grid>
          </>
        ))}
      </GridContainer>
    </>
  );
};

export default MoviesLoader;
