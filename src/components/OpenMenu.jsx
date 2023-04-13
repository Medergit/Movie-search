import { Box} from '@mui/material';
import React from 'react';
import MenuList from './MenuList';

const OpenMenu = ({closeMenu}) => {
    return (
        <Box  sx={{ bgcolor:'white', 
                    position: 'absolute', 
                    zIndex: '2', 
                    display:{xs:'block', md: 'none'},
                    borderRadius: '5px' }}
                onClick={()=>{closeMenu(false)}}>


            {/* блок скрытого меню */}
            <MenuList/>


            {/* скрытый блок для закрытия меню */}
            <Box sx={{position: 'fixed',
                      width: '100vh',
                      height: '100vh', 
                      transform: 'translateY(-23%)',
                      zIndex: '-3'}}></Box>
        </Box>
    );
}

export default OpenMenu;
