import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';



export const AuthContaxt = createContext(null)
const auth = getAuth(app);

const createUser =(email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}


const AuthProviders = ({children}) => {



    const authInfo = {
        createUser,
        signIn
    }

    return (
        <AuthContaxt.Provider value={authInfo}>
            {children}
        </AuthContaxt.Provider>
    );
};

export default AuthProviders;