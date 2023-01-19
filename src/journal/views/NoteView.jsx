import { Grid, Typography, Button, TextField } from '@mui/material'
import React from 'react'
import { SaveOutlined } from '@mui/icons-material'
import { ImageGallery } from '../components/ImageGallery'
import { useForms } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startSaveNote } from '../../store/journal/thunks'

export const NoteView = () => {

    const { active } = useSelector(state => state.journal);
    const dispatch = useDispatch();

    const [values, handleInputchange] = useForms(active);

    const { body, date, title } = values;

    const dateStr = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString()}
        , [date])

    useEffect(() => {
        dispatch(setActiveNote(values));
    }, [values])
    
    const onSaveNote = () => {
        dispatch(startSaveNote())
    };

    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} className='animae__animated animate__fadeIn animate__faster'        >
            <Grid item>
                <Typography fontSize={40} fontWeight="light">{dateStr}</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ paddig: 2 }} onClick={onSaveNote}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
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
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={title}
                    onChange={handleInputchange}
                />
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='Cuéntame un poco de tú vida, crack.'
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={handleInputchange}
                />
            </Grid>

            {/* Image Gallery */}
            <ImageGallery />
        </Grid>
    )
}
