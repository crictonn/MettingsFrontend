import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Groups2Icon from '@mui/icons-material/Groups2';
import {deepOrange} from "@mui/material/colors";

function Appbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    const redirectToProfilePage =() =>{
        window.location.replace("http://localhost:3000/account")
    }

    const exitAccount = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        window.location.replace("http://localhost:3000/")
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Groups2Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="http://localhost:3000/home"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        GatherHub
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', mt: 0 } }}>
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
                            <MenuItem>
                                <Typography textAlign="center" href="http://localhost:3000/createOrder">Заказать перевозку</Typography>
                            </MenuItem>
                            {
                                localStorage.getItem("role") === 'ADMIN' ?
                                    <MenuItem>
                                        <Typography textAlign="center" href="http://localhost:3000/createOrder">Компании</Typography>
                                    </MenuItem>
                                    :
                                    <MenuItem>
                                        <Typography textAlign="center" href="http://localhost:3000/createOrder">Пошел нахуй</Typography>
                                    </MenuItem>
                            }
                        </Menu>
                    </Box>
                    <Groups2Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        GatherHub
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/*    <Button*/}
                        {/*        onClick={handleCloseNavMenu}*/}
                        {/*        sx={{ my: 2, ml: 3, color: 'white', display: 'block' }}*/}
                        {/*        href="http://localhost:3000/createOrder"*/}
                        {/*    >*/}
                        {/*        Заказать перевозку*/}
                        {/*    </Button>*/}
                        {/*{*/}
                        {/*    localStorage.getItem("role") === 'ADMIN' ?*/}
                        {/*        <ButtonGroup>*/}
                        {/*            <Button*/}
                        {/*                onClick={handleCloseNavMenu}*/}
                        {/*                sx={{ my: 2, ml: 3, color: 'white', display: 'block' }}*/}
                        {/*                href="http://localhost:3000/companies"*/}
                        {/*            >*/}
                        {/*                Компании*/}
                        {/*            </Button>*/}

                        {/*            <Button*/}
                        {/*                onClick={handleCloseNavMenu}*/}
                        {/*                sx={{ my: 2, ml: 3, color: 'white', display: 'block' }}*/}
                        {/*                href="http://localhost:3000/users"*/}
                        {/*            >*/}
                        {/*                Пользователи*/}
                        {/*            </Button>*/}
                        {/*        </ButtonGroup>*/}
                        {/*        :*/}
                        {/*        <div/>*/}
                        {/*}*/}
                        {/*{*/}
                        {/*    localStorage.getItem("role") === 'EMPLOYEE' ?*/}
                        {/*        <Button*/}
                        {/*            onClick={handleCloseNavMenu}*/}
                        {/*            sx={{ my: 2, ml: 3, color: 'white', display: 'block' }}*/}
                        {/*            href="http://localhost:3000/orders"*/}
                        {/*        >*/}
                        {/*            Все заказы*/}
                        {/*        </Button>*/}
                        {/*    :*/}
                        {/*    <div/>*/}
                        {/*}*/}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Настройки">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
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
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" onClick={redirectToProfilePage}>Аккаунт</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" onClick={exitAccount}>Выход</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Appbar;