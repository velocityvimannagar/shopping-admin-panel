import {
  AppBar,
  Breadcrumbs,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header({ drawerWidth, handleDrawerToggle }) {
  let location = useLocation();
  const [breadCrums, setBreadCrumbs] = useState([]);

  const routeMap = {
    pages: "Dashboard",
    categories: "Categories",
    products: "Products",
    "main-categories": "Main Categories",
    "sub-categories": "Sub Categories",
    add: "Add",
  };

  useEffect(() => {
    //"/pages/categories/main-categories"
    const routes = location.pathname.split("/").filter((route) => route !== "");
    setBreadCrumbs(routes.map((route) => routeMap[route]));
  }, [location]);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "inherit",
        color: "black",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="body" noWrap component="div">
          <Breadcrumbs aria-label="breadcrumb" separator=".">
            {breadCrums.map((item) => (
              <div>{item}</div>
            ))}
          </Breadcrumbs>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
