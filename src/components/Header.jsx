import React, { useState } from 'react';
import { IconButton, Typography, Toolbar, AppBar, Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Registration from './Registration';
import Authorization from './Authorization';
import OpenMenu from './OpenMenu';


const Header = () => {

    // стейт и функция открывающегося меню
    const[openMenu, setOpenMenu] = useState(false)
    const close = (b)=>{
        setOpenMenu(b)
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                {/* кнопка меню */}
                <IconButton
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2, display:{md:"none"} }}
                    onClick={()=>setOpenMenu(!openMenu)}
                    >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Meder App
                </Typography>

                <Registration/>
                <Authorization/>

              </Toolbar>
            </AppBar>

            {/* открывающееся меню */}
            {openMenu ? <OpenMenu closeMenu={close}/>  : <div></div>}
        </Box>   
    );
}

export default Header;
