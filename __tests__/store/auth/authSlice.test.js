import { authSlice, checkAuth, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('Pruebas del authSlice', () => {
    test('Estado inicial y llammada a Auth', () => {

        const state = authSlice.reducer(initialState, {});

        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);


    })

    test('Se hace la autenticación', () => {

        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoUrl: demoUser.photoUrl,
            errorMessage: null
        })
    })

    test('Logout', () => {

        const state = authSlice.reducer(authenticatedState, logout());
        expect(state).toEqual({
            status : 'not-authenticated',
            uid : null,
            email: null,
            displayName : null,
            photoUrl : null,
            errorMessage : null,
        })
    })

    test('Logout con argumentos / muestra el error', () => {

        const errorMessage = 'Credenciales no coinciden';

        const state = authSlice.reducer(authenticatedState, logout(errorMessage));
        expect(state).toEqual({
            status : 'not-authenticated',
            uid : null,
            email: null,
            displayName : null,
            photoUrl : null,
            errorMessage : errorMessage,
        })
    })

    test('Estado checking validado', () => {

        const state = authSlice.reducer(authenticatedState, checkAuth());
        expect(state.status).toBe('checking');
    })
})