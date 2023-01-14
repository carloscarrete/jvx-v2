import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const CheckAuth = () => {
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

            <Grid container
                direction= 'row'
                justifyContent='center'
            >
                <CircularProgress color='warning'/>

            </Grid>
        </Grid>
    )
}
