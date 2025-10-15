import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoIcon from "../icons/LogoIcon"; // your logo icon component
import { SidebarItems } from "./SidebarItems";

const drawerWidth = 240;

const DashboardSidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width:768px)");

  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Toggle button for mobile */}
      {isMobile && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "fixed",
            top: 10,
            left: 10,
            zIndex: 1201,
            color: open ? "white" : "black",
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={toggleDrawer}
        sx={{
          width: open ? drawerWidth : 70,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 70,
            boxSizing: "border-box",
            transition: "width 0.3s ease",
            backgroundColor: "white",
            color: "black",
            overflowX: "hidden",
          },
        }}
      >
        {/* Header / Logo Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "flex-start" : "center",
            padding: "16px",
            gap: 2,
            borderBottom: "1px solid #ddd",
          }}
        >
          <LogoIcon />
          {open && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                System Admin
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Control Panel
              </Typography>
            </Box>
          )}
        </Box>

        {/* Sidebar Items */}
        <List sx={{ mt: 1 }}>
          {SidebarItems.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#4B5563", // grey by default
                  "&:hover": {
                    backgroundColor: "#6F2D7A",
                    color: "white", // text + icon turn white
                    "& .MuiListItemIcon-root": {
                      color: "white",
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "inherit", // inherits from parent (so hover works)
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {open && (
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default DashboardSidebar;
