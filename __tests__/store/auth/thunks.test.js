import { checkingAuth, startLoginWithEmailAndPassword, startGoogleSignIn, startLogout } from "../../../src/store/auth/thunks";
import { checkAuth, login, logout } from "../../../src/store/auth/authSlice";
import { demoUser } from "../../fixtures/authFixtures";
import { signInWithGoogle, loginWithEmailAndPassword, logoutFirebase } from "../../../src/firebase/providers";
import { logoutClearData } from "../../../src/store/journal/journalSlice";

jest.mock('../../../src/firebase/providers');

describe('Pruebas del Thunks de Auth', () => {

    const dispatch = jest.fn()

    test('Llamada a checkingAuth', async () => {
        await checkingAuth()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkAuth());
    })

    test('Verifica crendenciales y se logea con GoogleSignIn', async () => {
        
        const loginData = {ok: true, ...demoUser};
        await signInWithGoogle.mockResolvedValue(loginData);
        
        await startGoogleSignIn()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkAuth());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    })
    
    test('Verifica credenciales y se desloguea - Error', async ()=>{

        const loginData = {ok: false, errorMessage: 'Credenciales incorrectas'};
        await signInWithGoogle.mockResolvedValue(loginData);


        await startGoogleSignIn()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkAuth());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));

    })

    test('startLoginWithEmailAndPassword ejecuta elcheckAuth y el Login', async () => { 

        const loginData = {ok:true, ...demoUser};
        const formData = {email: loginData.email, password: '123456'}

        await loginWithEmailAndPassword.mockResolvedValue(loginData);
        await startLoginWithEmailAndPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkAuth())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))

     })

    test('startLogout, limpieza de notas y logout', async () => { 

        await startLogout()(dispatch);
        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(logout())
        expect(dispatch).toHaveBeenCalledWith(logoutClearData())

     })
})