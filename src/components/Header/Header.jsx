import React from "react";
import { Search } from "@mui/icons-material";
import {
  AppBar,
  Autocomplete,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: { xs: 0, sm: "3vw" },
  width: { xs: "100%", sm: "auto" },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
          <Wrapper>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <InputBase
              placeholder="Search..."
              classes={{
                root: {
                  color: "inherit",
                },
                input: {
                  padding: (theme) => theme.spacing(1, 1, 1, 0),
                  paddingLeft: (theme) => `calc(1em + ${theme.spacing(4)}px)`,
                  transition: (theme) => theme.transitions.create("width"),
                  width: { xs: "100%", md: "20ch" },
                },
              }}
            />
          </Wrapper>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
