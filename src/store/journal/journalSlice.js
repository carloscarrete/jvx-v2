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
        imagesUploaded: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        logoutClearData: (state)=> {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        }
        
    },
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNewNote, imagesUploaded, logoutClearData} = journalSlice.actions;

