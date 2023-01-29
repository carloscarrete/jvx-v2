import { Grid, Typography, Button, TextField, IconButton } from '@mui/material'
import React, { useRef } from 'react'
import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { ImageGallery } from '../components/ImageGallery'
import { useForms } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startDeleteNote, startSaveNote, startUploadingFiles } from '../../store/journal/thunks'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const { active, messageSaved, isSaving } = useSelector(state => state.journal);
    const dispatch = useDispatch();

    const refFiles = useRef();

    const [values, handleInputchange] = useForms(active);

    const { body, date, title } = values;

    const dateStr = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString()
    }
        , [date])

    useEffect(() => {
        dispatch(setActiveNote(values));
    }, [values])

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Su nota ha sido actualizada', messageSaved, 'success');
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSaveNote())
    };

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files));
    };

    const onDelete = (parametros) => {
        dispatch(startDeleteNote())
    };

    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} className='animae__animated animate__fadeIn animate__faster'        >
            <Grid item>
                <Typography fontSize={40} fontWeight="light">{dateStr}</Typography>
            </Grid>
            <Grid item>

                <input type="file" multiple onChange={onFileInputChange} style={{ display: 'none' }} ref={refFiles} />

                <IconButton color="primary" disabled={isSaving} onClick={() => refFiles.current.click()} >
                    <UploadOutlined />
                </IconButton>

                <Button color="primary" sx={{ paddig: 2 }} onClick={onSaveNote} disabled={isSaving}>
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

            <Grid container justifyContent='end'>
                <Button
                    onClick={onDelete}
                    sx={{ mt: 2 }}
                    color="error"
                >
                    <DeleteOutline />
                    Eliminar
                </Button>
            </Grid>

            {/* Image Gallery */}
             {
                active.imageUrls &&  <ImageGallery images={active.imageUrls} />
            }  
        </Grid>
    )
}
