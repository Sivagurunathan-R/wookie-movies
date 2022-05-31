import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import useResponsive from "../hooks/useResponsive";
import { Box, TextField, Typography, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SearchMovie from "../components/SearchMovie";

const NavabarWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: theme.palette.primary.main,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(3),
}));

const SearchBarWrapper = styled(Box)(() => ({
  position: "relative",
}));

const SearchResultWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: "0",
  width: "100%",
  padding: theme.spacing(1),
  boxShadow: theme.shadows[1],
  zIndex: 99,
  backgroundColor: theme.palette.primary.main,
}));

const BackDrop = styled(Box)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width : "100vw",
  height : "100vh",
  zIndex : "98"
}));

const Header = () => {
  const isDesktop = useResponsive("up", "sm");

  return (
    <>
      <NavabarWrapper>
        <Container maxWidth={true}>
          <NavbarHeader />
        </Container>
      </NavabarWrapper>
    </>
  );
};

export default Header;

//queue : value

const NavbarHeader = () => {
  const isDesktop = useResponsive("up", "sm");

  const token = "Wookie2019";

  const [query, setQuery] = useState(null);

  const [searchedMovies, setSearchedMovies] = useState([]);

  const [searchFetchStatus, setSearchFetchStatus] = useState({
    loading: false,
    is_searched: false,
  });

  const handleInputChange = (value) => {
    setQuery(value);
    setSearchFetchStatus({
      loading: false,
      is_searched: false,
    });
  };

  const handleSearch = async () => {
    setSearchFetchStatus({
      loading: true,
      is_searched: true,
    });
    await fetch(`https://wookie.codesubmit.io/movies?q=${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSearchedMovies(res.movies);
        setSearchFetchStatus({
          loading: false,
          is_searched: true,
        });
      });
  };

  const handleClose = () => {
    setSearchFetchStatus({
      loading: false,
      is_searched: false,
    });
    setSearchedMovies([]);
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Typography variant="h4" sx={{ color: "text.main" }}>
          Wookie Movies
        </Typography>
        {isDesktop ? (
          <>
            <SearchBarWrapper>
              <Box display={"flex"} gap={1} alignItems="center">
                <SearchIcon onClick={handleSearch} />
                <TextField
                  label="Search"
                  variant="outlined"
                  size="small"
                  onChange={(event) => handleInputChange(event.target.value)}
                />
              </Box>
              {!searchFetchStatus.loading && searchFetchStatus.is_searched && (
                <>
                  <SearchResultWrapper>
                    {searchedMovies.length > 0 ? (
                      searchedMovies.map((movie, index) => (
                        <>
                          <SearchMovie
                            movie={movie}
                            key={`search-movie-card-${index}`}
                          />
                        </>
                      ))
                    ) : (
                      <Box sx={{ px: 1, py: 3 }}>
                        <Typography variant="h6">No Data dound</Typography>
                      </Box>
                    )}
                  </SearchResultWrapper>
                  <BackDrop onClick={handleClose} />
                </>
              )}
            </SearchBarWrapper>
          </>
        ) : (
          <MenuIcon sx={{ color: "text.main", cursor: "pointer" }} />
        )}
      </Box>
    </>
  );
};
