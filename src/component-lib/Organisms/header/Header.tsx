import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {
  bottomDirectionArrow,
  eventEHRLogo,
  messagingIcon,
  notificationIcon,
} from "../../../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../../screens/login-screen/LoginSlice";

const pages = ["Dashboard", "Patient", "Reports", "Settings"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface HandlePageChangeProps {
  handlePageChange: (event: any) => void;
}

function EventEMRResponsiveAppBar({ handlePageChange }: HandlePageChangeProps) {
  const dispatch = useDispatch();
  const path = window.location.pathname.split("/")[1];
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [selectedPage, setSelectedPage] = React.useState<string>(
    path ? path?.charAt(0)?.toUpperCase() + path?.slice(1) : "Dashboard"
  ); // Track selected page

  useEffect(() => {
    setSelectedPage(
      path ? path?.charAt(0)?.toUpperCase() + path?.slice(1) : "Dashboard"
    );
  }, [path]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (value: any) => {
    switch (value) {
      case "Logout":
        localStorage.clear();
        dispatch(setIsLoggedIn(false));
        navigate("/login");
    }
    setAnchorElUser(null);
  };

  const handlePageClick = (page: string) => {
    handlePageChange(page);
    setSelectedPage(page); // Set the selected page
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #F4F4F4",
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            onClick={() => {
              navigate("/dashboard");
              setSelectedPage("Dashboard");
            }}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={eventEHRLogo} alt="logo" style={{ height: "29px" }} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageClick(page)}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => {
              navigate("/dashboard");
              setSelectedPage("Dashboard");
            }}
          >
            <img src={eventEHRLogo} alt="logo" style={{ height: "50px" }} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", marginLeft: "22px" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)} // Update selected page on click
                sx={{
                  my: 2,
                  gap: "10px",
                  marginRight: "14px",
                  fontSize: "16px",
                  fontWeight: page === selectedPage ? 600 : 500,
                  textTransform: "none",
                  color: page === selectedPage ? "#005596" : "#979797", // Set color dynamically
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            aria-label="show new notifications"
            color="inherit"
          >
            <img src={messagingIcon} alt="messaging-icon" />
          </IconButton>

          <IconButton
            size="large"
            aria-label="show new notifications"
            color="inherit"
            sx={{ marginRight: "24px" }}
          >
            <img src={notificationIcon} alt="notification-icon" />
          </IconButton>

          <Box sx={{ flexGrow: 0 }}>
            <div className="flex justify-center items-center gap-2">
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    style={{ background: "#795a5a" }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <img
                className="cursor-pointer"
                onClick={handleOpenUserMenu}
                src={bottomDirectionArrow}
                alt="bottom-arrow"
              />
            </div>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default EventEMRResponsiveAppBar;
