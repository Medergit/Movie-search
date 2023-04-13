import { Box, Checkbox, FormControlLabel, FormGroup, Button, TextField, ListItemText, Typography} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/store/moviesSlice';
import { Link } from "react-router-dom";
import { allGenre } from '../movies/allGenre';


const AddMovie = () => {
    const dispatch = useDispatch()

    // стейты инпутов
    const [year, setYear] = useState("");
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')

    const [check, setCheck] = useState([])

    const [add, setAdd] = useState(false)


    // функции для стейтов
    const getYear = (e) => {
        setYear(e.target.value);
    };
    const getTitle = (e) => {
        setTitle(e.target.value)
    };
    const getText = (e) => {
        setText(e.target.value);
    };
    const getImage = (e) => {
        setImage(e.target.value)
    };


    // функция для выделенных чекбоксов
    const handleChange = (event) => {
        if(event.target.checked){
            setCheck([...check, event.target.value])
        }else if(!event.target.checked){
            setCheck(check.filter(item =>{
                return item !== event.target.value
            }))
        }   
        console.log(check)
    };


    // функция для добавления новых данных в редакс
    const addNewMovie =()=>{
        const movieObj={
            id: Date.now(),
            title: title,
            text: text,
            genre: check,
            year: year,
            views: 0,
            favorite: false,
            image: image,
        }
        dispatch(addMovie(movieObj))

        setTitle('')
        setText('')
        setYear('')
        setImage('')

        setAdd(true)

        setTimeout(()=>{
            return setAdd(false)
        },3000)
    }


    
    return (
        <>
            <Box sx={{padding: '20px'}}>

                {/* {image 
                    ? <CardMedia
                        sx={{ minHeight: 240 }}
                        image={image}
                        />
                    : <div></div>
                }
                ============================= думал сделать предварительный просмотр
                
                <Button
                    variant="contained"
                    component="label"
                    >
                    Загрузить превью
                    <input
                        accept="image/*"
                        value={image}
                        onChange={(e)=>getImage(e)}
                        type="file"
                        hidden
                    />
                </Button> */}

                <Typography  variant="h5" component="h5">
                    Добавьте новый фильм
                </Typography>

                
                {/* блок инпутов */}
                <Box sx={{display: 'flex', flexDirection:'column', gap: '15px', margin: '20px 0'}}>
                    <TextField onChange={(e) => getTitle(e)} value={title} label="Название фильма" variant="outlined" />
                    <TextField onChange={(e) => getText(e)} value={text} label="Описание фильма" variant="outlined" multiline maxRows={4} />
                    <TextField onChange={(e) => getYear(e)} value={year} type='number'label="Год выпуска" variant="outlined" />
                    <TextField onChange={(e) => getImage(e)} value={image} label="URL для превью" variant="outlined" />
                </Box>


                {/* блок чекбоксов */}
                <ListItemText primary="Жанр" />
                <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}}}>
                    <FormGroup>
                        {allGenre.filter(item=>item!=='Любой Жанр').slice(0, 4).map(genr =>{
                            return <FormControlLabel onChange={handleChange} control={<Checkbox/>} value={genr} label={genr} key={genr}/>
                        })}
                    </FormGroup>

                    <FormGroup>
                        {allGenre.filter(item=>item!=='Любой Жанр').slice(4, 8).map(genr =>{
                            return <FormControlLabel onChange={handleChange} control={<Checkbox/>} value={genr} label={genr} key={genr}/>
                        })}
                    </FormGroup>
                </Box>


                {/* блок кнопок */}
                <Box sx={{display:'flex', flexWrap:'wrap', gap: '10px', margin:"20px"}}>
                    <Button onClick={addNewMovie} variant="contained" color="primary">
                        Добавить
                    </Button>
                    {add  ? <Button variant="contained" color="success">
                                Добавлено
                            </Button> 
                        : <div></div>
                    }
                    <Button variant="outlined"><Link style={{ textDecoration: 'none', color: 'black'}} to="/">На главную</Link></Button>
                </Box>
                
            </Box>
        </>
    );
}

export default AddMovie;
