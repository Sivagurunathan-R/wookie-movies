import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack, Grid } from "@mui/material";
import MovieCard from "./MovieCard";
import { styled } from "@mui/material/styles";

const GridContainer = styled(Grid)(({ theme }) => ({
  overflowX: "auto",
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(3),
  paddingBottom: theme.spacing(1),
}));

const MoviesGeners = ({ title, movies }) => {
  return (
    <>
      <Box mb={3}>
        <Typography variant="h6" mb={1}>
          {title}
        </Typography>
        <GridContainer>
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={`moviecard-${index}`} />
          ))}
        </GridContainer>
      </Box>
    </>
  );
};

MoviesGeners.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};
export default MoviesGeners;
