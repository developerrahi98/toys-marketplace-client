import { children, createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import app from "../FIrebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [users,setUsers]= useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        users,
        loading,
        createUser,
        signIn
    }

    useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUsers(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProviders;