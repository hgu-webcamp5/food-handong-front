import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
import { SERVICE_NAME } from '../../utils/commons';
import DarkModeToggle from '../DarkModeToggle';
import logo192 from '../../assets/images/logo192.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useRecoilState } from 'recoil';
import { userState } from '../../store/atoms';
import { display } from '@mui/system';

const pages = [
  { name: '메인', path: '/' },
  { name: '로그인', path: '/login' },
  { name: '회원가입', path: '/login/addform' },
  { name: '식당', path: '/restaurant/0' },
  { name: '대시보드', path: '/dashboard' },
];

const settings = ['Profile', 'Account', 'Dashboard'];

function Header() {
  const [user, setUser] = useRecoilState(userState);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    localStorage.setItem('user', JSON.stringify(null));
    setUser(null);
    window.Kakao.Auth.logout();
    alert('로그아웃 되었습니다.');
    // window.Kakao.API.request({url:'/v1/user/unlink'})
    handleCloseUserMenu();
  };

  return (
    <AppBar position="fixed" color="inherit" sx={{ boxShadow: 3 }} enableColorOnDark>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={logo192}
            width={32}
            height={32}
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {SERVICE_NAME}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            src={logo192}
            width={32}
            height={32}
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {SERVICE_NAME}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ display: 'block', textAlign: 'center' }}
              >
                {page.name}
              </Button>
            ))} */}
          </Box>
          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={user.name}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user.profileUrl} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu} component={Link} to="/dashboard">
                  <Typography textAlign="center">대시보드</Typography>
                </MenuItem>
                <MenuItem onClick={logout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button component={Link} to="/login">
              로그인
            </Button>
          )}
          <Box sx={{ ml: 1 }}>
            <DarkModeToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
