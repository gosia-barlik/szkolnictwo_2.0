import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExploreIcon from "@mui/icons-material/Explore";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = () => {
  const getQualifications = async () => {
    const response = await MainInfoAPI.create()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("działam");
      });
    console.log(response);
  };

  return (
    <ElevationScroll>
      <AppBar color="default" className="main-nav">
        <Container maxWidth="xl">
          <Toolbar>
            <ExploreIcon
              color="primary"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              onClick={getQualifications}
            />
            <NavLink to="/" className="nav-link" >
              <Typography color="primary" variant="h6" component="div">
                Kompas
              </Typography>
            </NavLink>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, pl:10 }}>
            
              <NavLink to="/about" className="nav-link">
                <Typography sx={{mr: 1}} component="div">Powiązane narzędzia</Typography>
                
              </NavLink>
              <NavLink to="/newsletter" className="nav-link">
              <Typography sx={{mr: 1}}></Typography>
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>

    // <AppBar color="default" className="main-nav">
    //   <Toolbar disableGutters>
    //     <div className="nav-center">
    //       <span className="logo">Kompas</span>
    //
    //     </div>
    //   </Toolbar>
    // </AppBar>
  );
};

export default Navbar;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { NavLink } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { MainInfoAPI } from '../api/Qualifications/mainInfoApi';
// import './Navbar.css'

// const pages = ['Kompas', 'Rejestr', ];
// const settings = ['Profil', 'Dashboard', 'Logout'];

// const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#FFFFF',
//     },
//   },
// });

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <ThemeProvider theme={lightTheme}>
//     <AppBar position="static" className='main-nav'>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="black"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'black', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//     </ThemeProvider>
//   );
// }
// export default ResponsiveAppBar;
