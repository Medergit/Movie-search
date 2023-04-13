/* eslint-disable no-useless-escape */
import { Box, Button, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';



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


const Authorization = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [passwordInput, setPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('')


    // функции для управения состояниями
    function email(event){
      setEmailInput(event.target.value)
    }
    function password(event){
      setPasswordInput(event.target.value)
    }


    // состояния ошибок для валидации
    const [errorEmail, setErrorEmail] = useState({statusError: false, text:''})
    const [errorPassword, setErrorPassword] = useState({statusError: false, text:''})


    // функция валидации
    const sendNewUser=()=>{

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

    }




    return (
        <> 
          <Button color="inherit" onClick={handleOpen}>Войти</Button>

          <Modal  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description">

            <Box sx={style}>
              <Box sx={{display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        mb: '20px'}}>

                  <TextField error={errorEmail.statusError}     helperText={errorEmail.text}    onChange={(event) => email(event)}    value={emailInput} id="Email"    label="Почта"   variant="outlined" />
                  <TextField error={errorPassword.statusError}  helperText={errorPassword.text} onChange={(event) => password(event)} value={passwordInput}  id="Password" label="Пароль"  variant="outlined" />
              </Box>

              <Button onClick={()=>sendNewUser()} variant="contained">Войти</Button>
            </Box>
          </Modal>
        </>
    );
}

export default Authorization;