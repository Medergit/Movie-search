import { Card, CardActionArea, CardContent, CardMedia, Typography, Container, Button, CardActions } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../redux/store/moviesSlice';

const OneMovie = () => {

    // данные из URL 
    const params = useParams()

    const dispatch = useDispatch()

    // нахождение элемента из массивав
    const movies = useSelector(state => state.movies.movies)
    const oneMovie = movies.find(item=>{
        return item.id === Number(params.id)
    })


    // функции добавления и удаления из избранного списка
    const addToFavorite=(movie)=>{
        dispatch(addFavorite(movie))
    }
    const removeToFavorite=(movie)=>{
        dispatch(removeFavorite(movie))
    }


    return (
        <>
            <Container maxWidth="xl">
                <Card sx={{ margin: '30px 0',
                            padding: '20px'}}>
                

                    {/* блок плеера элемента */}
                    <CardActionArea>
                        <CardMedia
                        sx={{opacity: '0.8', maxHeight:{ xs:'200px', sm:'300px', md:'400px', lg:"500px"}}}
                        component="img"
                        image={oneMovie.image}
                        alt={oneMovie.title}
                        />
                    </CardActionArea>


                    {/* блок информации данного элемента */}
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {oneMovie.title}
                        </Typography>
                        <Typography variant="caption" noWrap color="text.secondary">
                            {oneMovie.year}, {oneMovie.genre.map(genr => {
                                return(
                                    <span key={genr}>{genr} </span>
                                )
                            })}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            {oneMovie.text}
                        </Typography>
                        <Typography variant="caption" noWrap color="text.secondary">
                            Просмотров: {oneMovie.views}
                        </Typography>
                    </CardContent>


                    {/* кнопки данного элемента */}
                    <CardActions>
                    {oneMovie.favorite 
                        ? <Button onClick={()=>removeToFavorite(oneMovie)} size="small">Добавлено</Button>
                        : <Button onClick={()=>addToFavorite(oneMovie)} size="small">Добавить В Избранное</Button>}
                    </CardActions>
                </Card>
                

                {/* кнопки данного элемента для добавления и удаления из избранного списка*/}
                <CardActions>
                    <Button variant="outlined"><Link style={{ textDecoration: 'none', color: 'black'}} to="/">На главную</Link></Button>
                    <Button variant="outlined"><Link style={{ textDecoration: 'none', color: 'black'}} to="/Favorite">В избранное</Link></Button>
                </CardActions>
                
            </Container>  
        </>
    );
}

export default OneMovie;
