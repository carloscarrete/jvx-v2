import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForms } from '../../hooks'
import { startCreatingWithEmailAndPassword } from '../../store/auth/thunks'
import AuthLayout from '../layouts/AuthLayout'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidation = {
  email: [(value) => value.includes('@'), 'Verifique que haya introducido un correo válido'],
  password: [(value) => value.length >= 6, 'La contraseña debe ser mayor a 6 dígitos'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

const RegisterPage = () => {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);

  const isCheckingAuth = useMemo(() => status === 'checking', [status]);

  const [values, handleInputchange, formValid, isFormValid] = useForms(formData, formValidation);
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { email, password, displayName } = values;
  const { displayNameValid, emailValid, passwordValid } = formValid;

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    //if(!isFormValid()) return;
    dispatch(startCreatingWithEmailAndPassword(values));
  }


  return (
    <AuthLayout title="Crear una cuenta">
      <form onSubmit={onSubmit}     className='animae__animated animate__fadeIn animate__faster'
>
        <Grid container>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Nombre" placeholder="nombre-completo" type="text" fullWidth name="displayName" value={displayName} onChange={handleInputchange} error={!!displayNameValid && formSubmitted} helperText={displayNameValid} />
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Correo" placeholder="tucorreo@gmail.com" type="email" fullWidth name="email" value={email} onChange={handleInputchange} error={!!emailValid && formSubmitted} helperText={emailValid} />
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Contraseña" placeholder="tu-contraseña" type="password" fullWidth name="password" value={password} onChange={handleInputchange} error={!!passwordValid && formSubmitted} helperText={passwordValid} />
          </Grid>
        </Grid>



        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
            <Alert severity='error'>
              {errorMessage}
            </Alert>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={12}>
            <Button variant='contained' fullWidth type='submit' disabled={isCheckingAuth}>
              Crear cuenta
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent='end'>
          <Typography sx={{ mr: 1 }}>
            ¿Ya tienes cuenta?
          </Typography>
          <Link component={RouterLink} to='/auth/login' color='inherit'>
            Ingresar
          </Link>
        </Grid>

      </form>
    </AuthLayout>
  )
}

export default RegisterPage