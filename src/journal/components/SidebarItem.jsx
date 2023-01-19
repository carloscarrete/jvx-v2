import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SidebarItem = ({title, body, id, date, imageUrls = []}) => {

    const netTitle = useMemo(() => {return title.length>18 ? title.substring(0,18) + '...' : title}, [title])
    const dispatch = useDispatch()

    const onClickNote = () => {
        dispatch(setActiveNote({title, body, id, date, imageUrls}));
    };

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={netTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
