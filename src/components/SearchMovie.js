import React from 'react'
import {
  Typography,
  Box ,
  Chip
} from "@mui/material"
import StarIcon from '@mui/icons-material/Star';

import {styled} from "@mui/material/styles"

const SearchMovieImage = styled("img")(() => ({
  width : "50px",
  height : "50px",
}))

const SearchMovie = ({movie}) => {
  return (
    <>
      <Box sx={{p : 1}} display="flex" gap={1} alignItems="center">
        <SearchMovieImage src={movie.poster}></SearchMovieImage>
        <Typography variant="subtitle1" sx={{color : "primary.contrastText"}}>{movie.title}</Typography>
        <Chip size="small" label={movie.imdb_rating} sx={{ml : "auto"}}/>
        <StarIcon sx={{fontSize : "0.85rem"}}/>
      </Box>

    </>
  )
}

export default SearchMovie