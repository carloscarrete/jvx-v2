import { configureStore } from "@reduxjs/toolkit"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import LoginPage from "../../../src/auth/pages/LoginPage"
import { authSlice, startGoogleSignIn, startLoginWithEmailAndPassword } from "../../../src/store/auth"
import { notAuthenticatedState } from "../../fixtures/authFixtures"

const mockGoogleSingIn = jest.fn();
const mockLoginEmailAndPassword = jest.fn();



jest.mock('../../../src/store/auth/thunks', () => (
    {
        startGoogleSignIn: () => mockGoogleSingIn,
        startLoginWithEmailAndPassword : (email, password) => {
            return () => mockLoginEmailAndPassword({email, password});
        }
    }
))

jest.mock('react-redux', ()=> ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn()
}))

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
})

describe('Pruebas en LoginPace', () => {

    beforeEach(()=> jest.clearAllMocks());

    test('Se renderiza correctamente el componente', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    < LoginPage />
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);

    })

    test('Se inicia el startGoogleSignIn en la pantalla de Login', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    < LoginPage />
                </MemoryRouter>
            </Provider>
        )

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);
        expect(mockGoogleSingIn).toHaveBeenCalled();

    })

    test('Se llama submit con el loginPasswordEmail', () => {


        const email = 'carlos@gmail.com';
        const password = '123456';

        render(
            <Provider store={store}>
                <MemoryRouter>
                    < LoginPage />
                </MemoryRouter>
            </Provider>
        )

        const emailField = screen.getByRole('textbox', { name: 'Correo' });
        fireEvent.change(emailField, { target: { name: 'email', value: email } });

        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField, { target: { name: 'password', value: password } });

        const formField = screen.getByLabelText('submit-form');
        fireEvent.submit(formField);

        expect(mockLoginEmailAndPassword).toHaveBeenCalledWith({
            email,
            password
        })



    })
})