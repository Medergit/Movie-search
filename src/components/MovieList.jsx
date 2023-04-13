import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { addFavorite, addViewsCount, removeFavorite } from '../redux/store/moviesSlice';

const MovieList = ({movie}) => {
    const dispatch = useDispatch()


    // проверка избранности элемента
    const [favoriteState, setFavoriteState] = useState(false)
    useEffect(()=>{
        if(movie.favorite === false){
            setFavoriteState(false)
        }else if(movie.favorite === true){
            setFavoriteState(true)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    
    // функция открывания одного элемента
    const openOneMovie=(id)=>{
        dispatch(addViewsCount(id))
    }


    // функции добавления и удаления из избранного списка
    const addToFavorite=(movie)=>{
        dispatch(addFavorite(movie))
        setFavoriteState(true)
    }
    const removeToFavorite=(movie)=>{
        dispatch(removeFavorite(movie))
        setFavoriteState(false)
    }


    return (
        <>
            <Card sx={{ width: {xs:'200px', lg:'250px'} }}>

                {/* переход по заданному адресу при клике */}
                <Link to={`/OneMovie/${movie.id}`} 
                      style={{ textDecoration: 'none', color:'black' }} 
                      onClick={()=>openOneMovie(movie.id)}>


                    {/* картинка элемента */}
                    {movie.image 
                        ? <CardMedia
                            sx={{ height: {xs:120, sm:240}}}
                            image={movie.image}
                            title={movie.title}
                            />
                        : <CardMedia
                            sx={{ height: {xs:120, sm:240} }}
                            />
                    }


                    {/* инфо об элементе */}
                    <CardContent>
                        <Typography  variant="h5" noWrap component="h5">
                        {movie.title}
                        </Typography>
                        <Typography variant="body1" noWrap color="text.secondary">
                        {movie.text}
                        </Typography>
                        <Typography variant="subtitle2" noWrap color="text.secondary">
                        {movie.year}, {movie.genre.map(genr => {
                            return(
                                <span key={genr}>{genr} </span>
                            )
                        })}
                        </Typography>
                        <Typography variant="caption" noWrap color="text.secondary">
                        Просмотров: {movie.views}
                        </Typography>
                    </CardContent>
                </Link>

                    
                {/* кнопки элемента */}
                <CardActions>
                    {favoriteState
                        ? <Button onClick={()=>removeToFavorite(movie)} size="small">Добавлено</Button>
                        : <Button onClick={()=>addToFavorite(movie)} size="small">Добавить В Избранное</Button>}
                </CardActions>
            </Card>
        </>   
    );
}

export default MovieList;
