import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = ''
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = ''

        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.messageSaved = `${action.payload.title}, se ha actualizado`
            state.notes = state.notes.map((note)=>{
                if(note.id===action.payload.id){
                    console.log('Igual...', action.payload)
                    return action.payload;
                }
                return note;
            })
        },
        deleteNoteById: (state, action) => {
            
        },
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        
    },
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNewNote  } = journalSlice.actions;

