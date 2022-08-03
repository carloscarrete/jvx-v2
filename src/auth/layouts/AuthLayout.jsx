import { Grid, Typography } from '@mui/material'
import React from 'react'

const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{         //Style
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 4,
      }}>

      <Grid item
        className='box-shadow'
        xs={3}  //Number of positions
        sx={{ backgroundColor: 'white', borderRadius: 5, padding: 3, width: {xs:450} }} //style
      >

        <Typography variant='h5' xs={{ mb: 1 }}>{title}</Typography>

        {children}
      </Grid>
    </Grid>
  )
}

export default AuthLayout