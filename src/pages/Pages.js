import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Categories } from "./categories/Categories";
import { Products } from "./products/Products";
import { Header } from "./Header";
import { OrdersList } from "./orders/Orders";
import { Dashboard } from "./dashboard/Dashboard";
const drawerWidth = 240;

export function Pages(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "inherit", 
          color: "black",
          boxShadow: 'none',
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
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
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Header
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      ></Header>
      <Sidebar
        drawerWidth={drawerWidth}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        handleDrawerClose={handleDrawerClose}
        mobileOpen={mobileOpen}
      ></Sidebar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route
            path="categories/*"
            element={<Categories></Categories>}
          ></Route>

          <Route path="products/*" element={<Products></Products>}></Route>
          <Route path="orders" element={<OrdersList></OrdersList>}></Route>
          <Route path="users" element={<div>This is users</div>}></Route>
        </Routes>
      </Box>
    </Box>
  );
}
