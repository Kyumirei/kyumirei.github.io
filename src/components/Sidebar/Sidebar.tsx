import { useState } from "react";
import { AppBar, Avatar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Email as EmailIcon, Instagram as InstagramIcon, Menu as MenuIcon } from "@mui/icons-material";
import { DiscordIcon } from "../SvgIcons/DiscordIcon";
import avatarImg from "../../assets/avatar.jpg";
import { sideBarWidth } from "../../constants/common.constant";
import type { SidebarProps } from "./sidebar.interface";
import type { Page } from "../App/app.interface";

const navItems = Object.freeze([
  { label: "Mes travaux", page: "home" },
  { label: "À propos", page: "about" }
] as const);

const links = Object.freeze([
  {
    text: "kyumirei.contact@gmail.com",
    icon: <EmailIcon />,
    url: "mailto:kyumirei.contact@gmail.com"
  },
  {
    text: "Instagram : kyumirei",
    icon: <InstagramIcon />,
    url: "https://instagram.com/kyumirei"
  },
  {
    text: "Discord : kyumirei",
    icon: <DiscordIcon />,
    url: "https://discord.com/users/616971700763885586"
  }
] as const);

/**
 * Responsive sidebar
 */
export default function Sidebar({ currentPage, onNavigate }: SidebarProps) {
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
    if (!isClosing) setMobileOpen((prev) => !prev);
  };

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    handleDrawerClose(); // close on mobile after navigation
  };

  const drawerContent = (
    <>
      <Typography variant="h3" sx={{ textAlign: "center", fontFamily: '"Yuji Syuku", serif', color: "primary.main" }} gutterBottom>
        Kyumirei
      </Typography>
      <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Avatar src={avatarImg} alt="Kyumirei avatar" sx={{ width: 200, height: 200 }} variant="rounded" />
      </Toolbar>
      <Divider />

      <List component="nav" aria-label="Main navigation" sx={{ mt: 0.5 }}>
        {navItems.map(({ label, page }) => (
          <ListItem key={page} disablePadding>
            <ListItemButton selected={currentPage === page} onClick={() => handleNavigate(page)}>
              <ListItemText primary={label} sx={{ fontSize: "1.3rem" }} disableTypography />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ flexGrow: 1, marginBottom: 6 }} />

      <List sx={{ marginBottom: 1 }}>
        {links.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" href={item.url} target="_blank" rel="noopener noreferrer">
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <Box component="nav" sx={{ width: { sm: sideBarWidth }, flexShrink: { sm: 0 } }} aria-label="sidebar navigation">
      {/* Mobile-only AppBar with hamburger */}
      <AppBar
        position="fixed"
        sx={{
          display: { xs: "block", sm: "none" },
          backgroundColor: "primary.main"
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="Ouvrir le menu" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, color: "primary.contrastText" }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontFamily: '"Yuji Syuku", serif', color: "primary.contrastText" }}>
            Kyumirei illustration & manga
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Temporary drawer — mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }} // better mobile perf
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sideBarWidth,
            backgroundColor: "var(--bg-main)"
          }
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Permanent drawer — desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sideBarWidth,
            backgroundColor: "var(--bg-main)"
          }
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
