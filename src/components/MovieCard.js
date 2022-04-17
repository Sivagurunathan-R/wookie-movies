import React from "react";
import PropTypes from "prop-types";
import { Card, Grid, Typography, Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import GradeIcon from "@mui/icons-material/Grade";

const CardWrapper = styled(Card)(() => ({
  width: "320px",
  height: "320px",
  cursor: "pointer",
  position: "relative",

  "&:hover": {
    "& #hided-details": {
      display: "block",
    },
  },
}));

const Image = styled("img")(() => ({
  maxWidth: "100%",
  objectFit: "cover",
  transition: "1s all ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const CardInfo = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  padding: theme.spacing(3),
  backgroundColor: alpha(theme.palette.primary.main, 0.5),
  width: `calc(100% - ${theme.spacing(6)})`,
  maxHeight: `calc(100% - ${theme.spacing(6)})`,
  overflowY: "auto",
}));

const ShowOnHover = styled(Box)(() => ({
  display: "none",
}));

const MovieCard = ({ movie }) => {
  return (
    <>
      <Grid item>
        <CardWrapper>
          <Image src={movie.poster} />
          <CardInfo>
            <Typography variant="body1">{movie.title}</Typography>
            <ShowOnHover id="hided-details">
              <Box display={"flex"} alignItems="center">
                <Typography>
                  IMDB : <GradeIcon /> {movie.imdb_rating}
                </Typography>
              </Box>
              <Typography>{movie.overview}</Typography>
            </ShowOnHover>
          </CardInfo>
        </CardWrapper>
      </Grid>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
