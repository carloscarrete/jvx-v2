import { journalSlice } from "../../../src/store/journal/journalSlice"
import { exampleNote, initialState } from "../../fixtures/journalFixtures"

describe('Pruebas en journalSlice', () => { 
    test('Estado inicial y llamada a journal', () => { 
        
        const state  = journalSlice.reducer(initialState, {});
        
        expect(journalSlice.name).toBe('journal');
        expect(state).toEqual(initialState);

     })
 })