import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "../../../src/store/journal/journalSlice";
import { startNewNote } from "../../../src/store/journal/thunks";

describe('Pruebas en los thunks', () => { 

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(()=>jest.clearAllMocks());

    test('Crea nueva nota vacia', async () => { 

        const uid = 'TEST-UID';
        getState.mockReturnValue({auth:{uid:uid}})
        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number),
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number),
        }));

        /* Borrar DB */
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const deleteAllInfoNotes = [];
        docs.forEach(doc => deleteAllInfoNotes.push(deleteDoc(doc.ref)));

        await Promise.all(deleteAllInfoNotes);

     })
 })