import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';



export const AuthContaxt = createContext(null)
const auth = getAuth(app);




const AuthProviders = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)

    const createUser =(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser);
            setLoading(false);
        });
        return() => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        logout,
        createUser,
        signIn,
        loading
    }

    return (
        <AuthContaxt.Provider value={authInfo}>
            {children}
        </AuthContaxt.Provider>
    );
};

export default AuthProviders;