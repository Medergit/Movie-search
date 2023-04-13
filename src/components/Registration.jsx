/* eslint-disable no-useless-escape */
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';
import React, { useState } from 'react';


// стиль модалки
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };


const Registration = () => {

    // состояния для управения модальным окном
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // состояния инпуты для заполнения данных о пользователе
    const [firstNameInput, setFirstNameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [ageInput, setAgeInput] = useState(18)
    const [genderInput, setGenderInput] = useState('Мужчина')


    // функции для управения состояниями
    function firstName(event){
      setFirstNameInput(event.target.value)
    }
    function email(event){
      setEmailInput(event.target.value)
    }
    function password(event){
      setPasswordInput(event.target.value)
    }
    function age(event){
      setAgeInput(event.target.value)
    }
    function gender(event){
      setGenderInput(event.target.value)
    }


    // состояния ошибок для валидации
    const [errorName, setErrorName] = useState({statusError: false, text:''})
    const [errorEmail, setErrorEmail] = useState({statusError: false, text:''})
    const [errorPassword, setErrorPassword] = useState({statusError: false, text:''})
    const [errorAge, setErrorAge] = useState({statusError: false, text:''})


    // функция валидации
    const sendNewUser=()=>{

      // проверка имени
      if(firstNameInput.trim()){
        setErrorName({statusError:false, text:''})
      }else{
        setErrorName({statusError:true, text:'Слишком коротко'})
      }


      // проверка почты рег.выражения
      const mail = emailInput
      const regEx = /^\w+(([\.-])?[!#$%&'*+-/=?^_`{|}~]+\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/
      const errorSymbols = /(\w*[<>()@,;:\/"*]+\w*)\@/
      const cyrillic = /[а-яА-Я]/
    
      if(mail.match(cyrillic)){
        setErrorEmail({statusError:true, text:"Введите на латиннице"})
      }else{
        if(mail.match(regEx)){
          setErrorEmail({statusError:false, text:""})
        }else if(mail.match(errorSymbols)){
          setErrorEmail({statusError:true, text:"Недопустимые символы"})
        }else{
          setErrorEmail({statusError:true, text:"Введите полностью"})
        }
      }


      // проверка пароля
      if(passwordInput.trim()){
        setErrorPassword({statusError:false, text:''})
      }else{
        setErrorPassword({statusError:true, text:'Введите пароль'})
      }


      // проверка возраста
      if(passwordInput.trim()){
        setErrorAge({statusError:false, text:''})
      }else{
        setErrorAge({statusError:true, text:'Введите возраст'})
      }
    }

    

    return (
        <>
          <Button color="inherit" onClick={handleOpen}>Регистрация</Button>


          {/* модальное окно */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        mb: '20px'}}>


                {/* инпуты для ввода */}
                <TextField error={errorName.statusError}      helperText={errorName.text}     onChange={(event) => firstName(event)}  value={firstNameInput} id="FirstName" label="Имя"     variant="outlined" type='text'/>
                <TextField error={errorEmail.statusError}     helperText={errorEmail.text}    onChange={(event) => email(event)}      value={emailInput}     id="Email"     label="Почта"   variant="outlined" type='email'/>
                <TextField error={errorPassword.statusError}  helperText={errorPassword.text} onChange={(event) => password(event)}   value={passwordInput}  id="Password"  label="Пароль"  variant="outlined" type='text'/>
                <TextField error={errorAge.statusError}       helperText={errorAge.text}      onChange={(event) => age(event)}        value={ageInput}       id="Age"       label="Возраст" variant="outlined" type='number' />
              

                {/* выбор пола */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Пол</InputLabel>
                  <Select labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={genderInput}
                          label="age"
                          onChange={(event) => gender(event)}>

                    <MenuItem value={'Мужчина'}>Мужчина</MenuItem>
                    <MenuItem value={'Женщина'}>Женщина</MenuItem>
                  </Select>

                </FormControl>

              {/* кнопка отрпавки формы */}
              </Box>
                <Button onClick={()=>sendNewUser()} variant="contained">Регистрация</Button>
              </Box>
          </Modal>
      </>
    );
}

export default Registration;
