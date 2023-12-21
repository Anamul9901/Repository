/* eslint-disable react/prop-types */
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebse.console";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const SignInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutAll = () => {
        setIsLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setIsLoading(false)
             return () =>{
                return unsubscribe;
             }
        })
    })

    const authInfo = {
        createUser,
        SignInUser,
        signOutAll,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;