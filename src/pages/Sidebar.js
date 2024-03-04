import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useState } from "react";
export function Sidebar({
  drawerWidth,
  handleDrawerTransitionEnd,
  handleDrawerClose,
  mobileOpen,
}) {
  const navigate = useNavigate();
  const [menuMapping, setMenuMapping] = useState({
    Categories: true,
    Product: true,
  });
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
      children: [
        {
          name: "Main Category",
          icon: <TableChartOutlinedIcon />,
          route: "categories",
        },
        {
          name: "Sub Category",
          icon: <TableChartOutlinedIcon />,
          route: "sub-categories",
        },
      ],
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

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menus.map((menu, index) => (
          <>
            <ListItem
              key={menu.name}
              disablePadding
              onClick={() => {
                navigate(menu.route);
              }}
            >
              <ListItemButton
                onClick={() => {
                  menuMapping[menu.name] = !menuMapping[menu.name];
                  setMenuMapping({ ...menuMapping });
                }}
              >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.name} />
                {menu.children &&
                  (menuMapping[menu.name] ? (
                    <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
                  ) : (
                    <KeyboardArrowUpOutlinedIcon></KeyboardArrowUpOutlinedIcon>
                  ))}
              </ListItemButton>
            </ListItem>
            {menu.children &&
              menuMapping[menu.name] &&
              menu.children.map((child) => {
                return (
                  <ListItem
                    key={child.name}
                    disablePadding
                    onClick={() => {
                      navigate(child.route);
                    }} 
                  >
                    <ListItemButton>
                      {/* <ListItemIcon>{child.icon}</ListItemIcon> */}
                      <ListItemText primary={child.name} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
          </>
        ))}
      </List>
    </div>
  );
  return (
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
  );
}
