import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';
import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from "react-router-dom";


// массив адресов и элементов для меню
const Pages = [
    { "Home": ['/', <HomeIcon />] },
    {"Favorite": ["/Favorite", <BookmarkIcon />]},
    {"Add Movie": ["/AddMovie", <AddBoxIcon />]},
]


const MenuList = () => {
    return (
        <>
            <Paper evalation={6}>
                <List>

                    {/* список меню */}
                    {Pages.map(page =>{
                        return <Link key={Object.keys(page)[0]} style={{ textDecoration: 'none', color:'black' }} to={Object.values(page)[0][0]}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                        <ListItemIcon>
                                            {Object.values(page)[0][1]}
                                        </ListItemIcon>
                                        <ListItemText primary={Object.keys(page)[0]} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>      
                    })}
                </List>
            </Paper>
        </>
    );
}

export default MenuList;
