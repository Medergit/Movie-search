import { Box} from '@mui/material';
import React from 'react';
import MenuList from './MenuList';

const LeftMenu = () => {
    return (
        <>
            <Box mt={5} flex={2} sx={{display: {xs:"none", md: "block" }}}>
                <MenuList/>
            </Box>
        </>
    );
}

export default LeftMenu;
