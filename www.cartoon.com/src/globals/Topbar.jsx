import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddIcon from "@mui/icons-material/Add";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from '../assets/pnglogo.png';

const Topbar = () => {
  const theme = useTheme();
  const colors =
    theme.palette.mode === "dark"
      ? theme.palette.primary
      : theme.palette.secondary;
  const [selected, setSelected] = useState("Dashboard");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: colors.main }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className="logoImgTag" src={logo} alt="" />
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ mr: 2 }}
              >
                <MenuOutlinedIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  component={Link}
                  to="/"
                  onClick={handleMenuClose}
                >
                  HOME
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/cart"
                  onClick={handleMenuClose}
                >
                  CART
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/myProducts"
                  onClick={handleMenuClose}
                >
                  CATEGORIES
                </MenuItem>
                <MenuItem component={Link} to="/bar" onClick={handleMenuClose}>
                  books
                </MenuItem>
                <MenuItem component={Link} to="/pie" onClick={handleMenuClose}>
                  aparels
                </MenuItem>
                <MenuItem component={Link} to="/line" onClick={handleMenuClose}>
                  electronics
                </MenuItem>
                <MenuItem component={Link} to="/line" onClick={handleMenuClose}>
                  RECOMENDATIONS
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuItem
                component={Link}
                to="/"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  mr: 3,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HomeOutlinedIcon sx={{ mr: 1, margin:"0 0 0vw 5vw" }} />{" "}
                {/* Add margin to the right of the icon */}
                <span style={{ marginLeft: "0.5rem" }}>home</span>{" "}
                {/* Add a margin to the left of the text */}
              </MenuItem>
              <MenuItem
  component={Link}
  to="/cart"
  sx={{ color: "inherit", textDecoration: "none", mr: 3, display: 'flex', alignItems: 'center' }}
>
  <AddIcon sx={{ mr: 1 }} /> {/* Add margin to the right of the icon */}
  <span style={{ marginLeft: '0.5rem' }}>CART</span> {/* Add a margin to the left of the text */}
</MenuItem>
<MenuItem
  component={Link}
  to="/"
  sx={{ color: "inherit", textDecoration: "none", mr: 3, display: 'flex', alignItems: 'center' }}
>
  <Inventory2Icon sx={{ mr: 1 }} /> {/* Add margin to the right of the icon */}
  <span style={{ marginLeft: '0.5rem' }}>RECOMENDATIONS</span> {/* Add a margin to the left of the text */}
</MenuItem>
<MenuItem
  component={Link}
  to="/bar"
  sx={{ color: "inherit", textDecoration: "none", mr: 3, display: 'flex', alignItems: 'center' }}
>
  <BarChartOutlinedIcon sx={{ mr: 1 }} /> {/* Add margin to the right of the icon */}
  <span style={{ marginLeft: '0.5rem' }}>books</span> {/* Add a margin to the left of the text */}
</MenuItem>
<MenuItem
  component={Link}
  to="/pie"
  sx={{ color: "inherit", textDecoration: "none", mr: 3, display: 'flex', alignItems: 'center' }}
>
  <PieChartOutlineOutlinedIcon sx={{ mr: 1 }} /> {/* Add margin to the right of the icon */}
  <span style={{ marginLeft: '0.5rem' }}>aparels</span> {/* Add a margin to the left of the text */}
</MenuItem>
<MenuItem
  component={Link}
  to="/line"
  sx={{ color: "inherit", textDecoration: "none", mr: 3, display: 'flex', alignItems: 'center' }}
>
  <TimelineOutlinedIcon sx={{ mr: 1 }} /> {/* Add margin to the right of the icon */}
  <span style={{ marginLeft: '0.5rem' }}>electronics</span> {/* Add a margin to the left of the text */}
</MenuItem>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topbar;
