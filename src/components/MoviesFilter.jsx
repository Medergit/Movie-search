import { Box, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import React, {  useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import {allGenre} from '../movies/allGenre';
import {allYear} from '../movies/allYear';


const MoviesFilter = () => {
    // массив данных из редакса (фильмы)
    const allMovies = useSelector(state => state.movies.movies)
    const [allMoviesState, setAllMoviesState] = useState(allMovies)


    // стейт для поиска
    const [search, setSearch] = useState('');
    const searchInput = (e) =>{
        setSearch(e.target.value)
    }

    // states для фильтрации
    const [genre, setGenre] = React.useState("Любой Жанр");
    const [year, setYear] = React.useState("Любой Год");
    const [filter, setFilter] = React.useState("По Рекомендации");


    // фильтрация по популярности или новизне
    useEffect(()=>{
        const spreadMovies = [...allMoviesState]
        if(filter === "По Рекомендации"){
            setAllMoviesState(allMovies)

        }else if(filter === "По Популярности"){
            spreadMovies.sort(function (a, b) {
                if (a.views > b.views) {
                    return -1;
                }
                if (a.views < b.views) {
                    return 1;
                }
                return 0;
            })
            setAllMoviesState(spreadMovies)

        }else if(filter === "По Новизне"){
            spreadMovies.sort(function (a, b) {
                if (a.year > b.year) {
                    return -1;
                }
                if (a.year < b.year) {
                    return 1;
                }
                return 0;
            })
            setAllMoviesState(spreadMovies)
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[filter])
   
       
    // фильтрация по жанрам и годам
    const filterFunction = (item) =>{
        if(year === 'Любой Год' && genre === 'Любой Жанр'){
            return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search.toLowerCase())
        }
        if(item.year === year){
            if(genre === 'Любой Жанр'){
                return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search.toLowerCase())
            }
            if(item.genre.includes(genre)){
                return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search.toLowerCase())
            }
        }
        if(item.genre.includes(genre)){
            if(year === 'Любой Год'){
                return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search.toLowerCase())
            }
            if(item.year === year){
                return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search.toLowerCase())
            }
        }
    }


    return (
        <>
            {/* блок поиска */}
            <Box sx={{textAlign:'center', margin: '15px 30px'}}>
                <TextField  fullWidth 
                            label="Поиск по названию" 
                            variant="outlined" 
                            onChange={(e)=>searchInput(e)}
                            value={search}/>
            </Box>
            

            {/* блок фильтрации */}
            <Stack  sx={{   margin:'5px', 
                            display:'flex',
                            gap:'10px', 
                            justifyContent:'space-around',
                            flexDirection:{xs:'column', sm:'row'},
                            }}>
            
                <Box sx={{width:{xs:'100%', sm:'160px', md:'180px'}}}>
                    <FormControl fullWidth>
                        <InputLabel id="genre">Жанр</InputLabel>
                        <Select labelId="genre"
                                id="genre"
                                value={genre}
                                label="Жанр"
                                onChange={(event) => setGenre(event.target.value)}
                                MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                                >
                            {allGenre.map(genr =>{
                                return <MenuItem key={genr} value={genr}>{genr}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{width:{xs:'100%', sm:'160px', md:'180px'}}}>
                    <FormControl fullWidth>
                        <InputLabel id="year">Год</InputLabel>
                        <Select labelId="year"
                            id="year"
                            value={year}
                            label="Год"
                            onChange={(event) => setYear(event.target.value)}
                            MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                            >
                            {allYear.map(year =>{
                                return <MenuItem key={year} value={year}>{year}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{width:{xs:'100%', sm:'160px', md:'180px'}}}>
                    <FormControl fullWidth>
                        <InputLabel id="filter">Фильтр</InputLabel>
                        <Select labelId="filter"
                                id="filter"
                                value={filter}
                                label="Фильтр"
                                onChange={(event) => setFilter(event.target.value)}
                                >
                            <MenuItem value={"По Рекомендации"}>По рекомендации</MenuItem>
                            <MenuItem value={"По Новизне"}>По новизне</MenuItem>
                            <MenuItem value={"По Популярности"}>По популярности</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

            </Stack>

            
            {/* блок данных */}
            <Container sx={{mt: '40px', 
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: '20px',}}>
                        
                {allMoviesState.filter(filterFunction).map(movie => {
                    return(
                        <MovieList key={movie.id} movie={movie} />
                        )
                    })
                }
            </Container>
        </>
    );
}

export default MoviesFilter;
