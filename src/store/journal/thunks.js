import {collection, deleteDoc, doc, setDoc} from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { fileUpload } from '../../helpers/fileUpload';
import { loadNotes } from '../../helpers/loadNotes';
import { addNewEmptyNote, deleteNoteById, imagesUploaded, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from './journalSlice';

export const startNewNote = () => {
    return async(dispatch, getState)=>{

    const {uid} = getState().auth;

        dispatch(savingNewNote());
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            
        }
        
        const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notes`) );
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));

    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState)=>{

        const {uid} = getState().auth;

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));

    }
}

export const startSaveNote = () =>{
    return async(dispatch, getState) =>{
        
        dispatch(setSaving());

        const {uid} = getState().auth;
        const {active} = getState().journal;

        const noteToFirebase = {
            ...active
        }

        delete noteToFirebase.id;

        const docRef = doc(FirebaseDB,`${uid}/journal/notes/${active.id}`);
        await setDoc(docRef, noteToFirebase, {merge: true});
        
        dispatch(updateNote(active));

    }
}


export const startUploadingFiles = (files=[]) =>{
    return async(dispatch) =>{
        
        dispatch(setSaving());

        const imagesPromises = [];

        for (const file of files) {
            imagesPromises.push(fileUpload(file));
        }

        const allPhotosuploaded = await Promise.all(imagesPromises);
        dispatch(imagesUploaded(allPhotosuploaded));

    }
}

export const startDeleteNote = () =>{
    return async (dispatch, getState) =>{
        const {uid} = getState().auth;
        const {active} = getState().journal; 

        const docRef = doc(FirebaseDB,`${uid}/journal/notes/${active.id}`);
        await deleteDoc(docRef);

        dispatch(deleteNoteById(active.id));

    }
}