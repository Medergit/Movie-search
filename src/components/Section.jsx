
import React from 'react';
import MoviesFilter from './MoviesFilter';
import { Box, Stack } from '@mui/material';
import LeftMenu from './LeftMenu';
import RightBlock from './RightBlock';
import { Route, Routes } from "react-router-dom";
import AddMovie from './AddMovie';
import Favorite from './Favorite';
import OneMovie from './OneMovie';



const Section = () => {
    return (
        <Stack direction="row" justifyContent='space-between'>


            {/* левый бок навигации */}
            <LeftMenu/>


            {/* компоненты вывода */}
            <Box flex={7}>
                <Routes>
                    <Route path="/" element={<MoviesFilter/>}/>
                    <Route path="/AddMovie" element={<AddMovie/>}/>
                    <Route path="/Favorite" element={<Favorite/>}/>
                    <Route path="/OneMovie/:id" element={<OneMovie/>}/>
                </Routes>
            </Box>


            {/* доп. правый блок */}
            <RightBlock/>
        </Stack>
    );
}

export default Section;
