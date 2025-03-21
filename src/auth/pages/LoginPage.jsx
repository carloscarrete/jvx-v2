import { useMemo } from 'react'
import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'

import { useForms } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth'

const formData = {
  email: '',
  password: ''
}

const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const [values, handleInputchange] = useForms(formData);

  const isAuthenticated = useMemo(() => status === 'checking', [status]);

  const { email, password } = values;

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailAndPassword(email, password));
  }

  const onGoogleLogin = () => {
    dispatch(startGoogleSignIn());
  }

  const loginTestUser = () => {
    dispatch(startLoginWithEmailAndPassword('usuario@prueba.com', '12345678'));
  }

  return (
    <AuthLayout title="Iniciar sesión">
      <form aria-label='submit-form' onSubmit={onLogin}>
        <Grid container>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Correo" placeholder="tucorreo@gmail.com" type="email" fullWidth name='email' onChange={handleInputchange} value={email} />
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Contraseña" placeholder="tu-contraseña" type="password" fullWidth name="password" onChange={handleInputchange} value={password} inputProps={{ 'data-testid': 'password' }} />
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
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth type="submit" disabled={isAuthenticated}>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button aria-label='google-btn' variant='contained' fullWidth onClick={onGoogleLogin} disabled={isAuthenticated} >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid spacing={2} >
          {/* <Button variant='outlined' size='small' onClick={loginTestUser}>
            Ingresar como invitado
          </Button> */}
          <Grid xs={12}>
            <Button xs={2} variant='outlined' size='small' onClick={loginTestUser} fullWidth={true}>
              Ingresar como invitado
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent='center' alignItems='center' sx={{ display: 'flex', gap: 2, mt: 1 }}>
          <Link component={RouterLink} to='/auth/register' color='inherit'>
            Crear una cuenta
          </Link>
          {/*  <Button variant='outlined' size='small' onClick={loginTestUser}>
            Ingresar como invitado
          </Button> */}

        </Grid>

      </form>
    </AuthLayout>
  )
}

export default LoginPage