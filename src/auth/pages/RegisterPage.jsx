import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'

const RegisterPage = () => {
  return (
    <AuthLayout title="Crear una cuenta">
      <form>
        <Grid container>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Nombre" placeholder="nombre-completo" type="text" fullWidth />
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Correo" placeholder="tucorreo@gmail.com" type="email" fullWidth />
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Contraseña" placeholder="tu-contraseña" type="password" fullWidth />
          </Grid>
        </Grid>


        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={12}>
            <Button variant='contained' fullWidth>
              Crear cuenta
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent='end'>
          <Typography sx={{mr:1}}>
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