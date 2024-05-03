import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';



export const AuthContaxt = createContext(null)
const auth = getAuth(app);




const AuthProviders = ({children}) => {
    const [user, setUser] = useState([]);

    const createUser =(email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
        });
        return() => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
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