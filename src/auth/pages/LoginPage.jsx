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
  email: 'carloscarrete.sc@gmail.com',
  password: '123Polita'
}

const LoginPage = () => {

  const { status, errorMessage} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const [values, handleInputchange] = useForms(formData);

  const isAuthenticated = useMemo(()=> status==='checking', [status]);

  const { email, password } = values;

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailAndPassword(email, password));
  }

  const onGoogleLogin = () => {
    console.log('google login');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Iniciar sesión">
      <form onSubmit={onLogin}>
        <Grid container>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Correo" placeholder="tucorreo@gmail.com" type="email" fullWidth name='email' onChange={handleInputchange} value={email} />
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Contraseña" placeholder="tu-contraseña" type="password" fullWidth name="password" onChange={handleInputchange} value={password} />
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
            <Button variant='contained' fullWidth onClick={onGoogleLogin} disabled={isAuthenticated}>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent='end'>
          <Link component={RouterLink} to='/auth/register' color='inherit'>
            Crear una cuenta
          </Link>
        </Grid>

      </form>
    </AuthLayout>
  )
}

export default LoginPage