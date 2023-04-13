import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../redux/store/moviesSlice';

const Favorite = () => {
    const dispatch = useDispatch()

    const favoriteMovies = useSelector(state => state.movies.favoriteMovies)
    
    const removeToFavorite=(movie)=>{
        dispatch(removeFavorite(movie))
    }


    return (
        <Box margin='20px 10px'>
            <Typography textAlign='center' variant="h5" component="h5">
                Избранное
            </Typography>

            {favoriteMovies.length
                ? <div></div>
                : <Typography textAlign='center' variant="h5" component="h5">
                    Пусто
                  </Typography>
            }
           

           {/* блок с избранным списком */}
            <Container sx={{mt: '40px', 
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}>
            
                {favoriteMovies.map(movie => {
                    return(
                        <Card key={movie.id} 
                              sx={{ display:'flex', 
                                    justifyContent:'space-between', 
                                    alignItems:'center',
                                    flexDirection:{xs:'column', sm:'row'} }}>

                            <Link   to={`/OneMovie/${movie.id}`} style={{textDecoration: 'none', color:'black'}}>

                                <Box sx={{  display:'flex', 
                                            justifyContent:'space-between', 
                                            alignItems:'center',
                                            flexDirection:{xs:'column', sm:'row'},
                                            textAlign:{xs:'center', sm:'left'}}} >

                                    <CardMedia  component="img"
                                                image={movie.image}
                                                alt={movie.title}
                                                sx={{   width:{xs:'200px', sm:'250px'}, 
                                                        height:{xs:'150px', sm:'200px'}}}
                                            />
                                        
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {movie.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{display:{xs:'none', sm: 'block'}}} color="text.secondary">
                                            {movie.text}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Link>

                            <CardActions>
                                <Button onClick={()=>removeToFavorite(movie)} size="small" color="primary">
                                    Удалить из избранных
                                </Button>
                            </CardActions>
                        </Card>
                        )
                    })
                }
            </Container>
        </Box>
    );
}

export default Favorite;
