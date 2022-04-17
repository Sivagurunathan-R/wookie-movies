import React from "react";
import { styled } from "@mui/material/styles";
import useResponsive from "../hooks/useResponsive";
import { Box, TextField, Typography, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const NavabarWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: theme.palette.primary.main,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(3),
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

const NavbarHeader = () => {
  const isDesktop = useResponsive("up", "sm");

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
            <Box display={"flex"} gap={1} alignItems="center">
              <SearchIcon />
              <TextField label="Search" variant="outlined" size="small" />
            </Box>
          </>
        ) : (
          <MenuIcon sx={{ color: "text.main", cursor: "pointer" }} />
        )}
      </Box>
    </>
  );
};
