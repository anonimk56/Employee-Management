import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LogoIcon from "../icons/LogoIcon";
import { SidebarItems } from "../../utils/Constants";

interface DashboardSidebarProps {
  onSelect: (id: number) => void;
}

const drawerWidth = 280;

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ onSelect }) => {
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width:768px)");

  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
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
            // ✅ Added shadow at the border area
            boxShadow: `
              0px 10px 15px 0px #0000001A,
              0px 4px 6px 0px #0000001A
            `,
          },
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "flex-start" : "center",
            padding: "25px",
            gap: 2,
            borderBottom: "1px solid #F3F4F6",
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
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#1F2937" }}
              >
                System Admin
              </Typography>
              <Typography variant="body2" sx={{ color: "#6B7280" }}>
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
                onClick={() => onSelect(item.id)} // ✅ when clicked, switch screen
                sx={{
                  fontFamily: "Rubik, sans-serif",
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 1.8,
                  py: 1.5,
                  mx: 1,
                  borderRadius: "4px",
                  color: "#4B5563",
                  "&:hover": {
                    backgroundColor: "#6F2D7A",
                    color: "white",
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
                    color: "inherit",
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
