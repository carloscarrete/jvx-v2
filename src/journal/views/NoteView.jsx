import { Grid, Typography, Button, TextField } from '@mui/material'
import React from 'react'
import {SaveOutlined} from '@mui/icons-material'
import { ImageGallery } from '../components/ImageGallery'

export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} className='animae__animated animate__fadeIn animate__faster'        >
            <Grid item>
                <Typography fontSize={40} fontWeight="light">31 de Febrero del 2022</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{paddig: 2}}>
                    <SaveOutlined sx={{fontSize: 30, mr:1}}/>
                        Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrege un título'
                    label='Título'
                    sx={{border: 'none', mb: 1}}
                />
                <TextField 
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='Cuéntame un poco de tú vida, crack.'
                    minRows={5}
                />
            </Grid>

            {/* Image Gallery */}
            <ImageGallery />
        </Grid>
    )
}
