import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { Route, Routes, useNavigate } from "react-router-dom";
const drawerWidth = 240;

export function Pages(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();
  const menus = [
    {
      name: "Dashboard",
      icon: <TableChartOutlinedIcon />,
      route: "dashboard",
    },
    {
      name: "Categories",
      icon: <DashboardOutlinedIcon />,
      route: "categories",
    },
    {
      name: "Product",
      icon: <Inventory2OutlinedIcon />,
      route: "product",
    },
    {
      name: "Orders",
      icon: <ShoppingBagOutlinedIcon />,
      route: "orders",
    },
    {
      name: "Users",
      icon: <PeopleOutlineOutlinedIcon />,
      route: "users",
    },
  ];

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

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menus.map((menu, index) => (
          <ListItem
            key={menu.name}
            disablePadding
            onClick={() => {
              navigate(menu.route);
            }}
          >
            <ListItemButton>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
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
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div>Main content</div>
        <Routes>
          <Route
            path="dashboard"
            element={<div>This is dashboard</div>}
          ></Route>
          <Route
            path="categories"
            element={<div>This is categories</div>}
          ></Route>
          <Route path="product" element={<div>This is product</div>}></Route>
          <Route path="orders" element={<div>This is orders</div>}></Route>
          <Route path="users" element={<div>This is users</div>}></Route>
        </Routes>
      </Box>
    </Box>
  );
}
