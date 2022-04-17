import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import MoviesGeners from "../components/MoviesGeners";
import MoviesLoader from "../skeleton/MoviesLoader";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const token = "Wookie2019";

const Dashboard = () => {
  const [movies, setMovies] = useState([]);

  const [fetchStatus, setFetchStatus] = useState({
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      setFetchStatus({
        ...fetchStatus,
        loading: true,
      });
      await fetch("https://wookie.codesubmit.io/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((res) => {
          let tempMoviesByGenres = [];
          let uniqueTempGenres = [];
          res.movies.map((movie) =>
            movie.genres.map((gener) => {
              if (!uniqueTempGenres.includes(gener)) {
                uniqueTempGenres = [...uniqueTempGenres, gener];
              }
              return null;
            })
          );
          uniqueTempGenres.map(
            (temp) =>
              (tempMoviesByGenres = [
                ...tempMoviesByGenres,
                {
                  gener: temp,
                  movies: res.movies.filter((movies) =>
                    movies.genres.includes(temp)
                  ),
                },
              ])
          );
          setMovies(tempMoviesByGenres);
          setFetchStatus({
            ...fetchStatus,
            loading: false,
          });
        })
        .catch((error) => {
          setFetchStatus({
            ...fetchStatus,
            loading: false,
            error: true,
          });
        });
    };

    fetchMovies();
  }, []);

  if (fetchStatus.loading) {
    const cardArray = Array.from(Array(4).keys());

    return (
      <Container maxWidth={true}>
        {cardArray.map((value, index) => (
          <MoviesLoader cardCount={5} key={`gener-loader${index}`} />
        ))}
      </Container>
    );
  }

  if (fetchStatus.error) {
    return (
      <>
        <Container>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            something went wrong
          </Alert>
        </Container>
      </>
    );
  }

  if (!fetchStatus.loading && movies) {
    return (
      <>
        {movies
          .filter((genre) => genre.movies.length > 0)
          .map((genre, index) => (
            <Container maxWidth={true}>
              <MoviesGeners
                title={genre.gener}
                movies={genre.movies}
                key={`gener-card ${index}`}
              />
            </Container>
          ))}
      </>
    );
  }
};

export default Dashboard;
