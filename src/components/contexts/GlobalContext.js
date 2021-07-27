import React, { createContext,  useState, useEffect } from 'react'
import { auth } from '../firebase'



export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    async function login(email, password) {
        let value = await auth.signInWithEmailAndPassword(email, password)
        return value
    }

    async function signup(email, password) {
        return await auth.createUserWithEmailAndPassword(email, password)
    }

    async function logout() {
        return await auth.signOut()
    }

    async function resetPassword(email) {
        return await auth.sendPasswordResetEmail(email)

    }

    async function updateEmail(email) {
        return await auth.currentUser.updateEmail(email)
    }

    async function updatePassword(password) {
        return await auth.currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    })

    return (
        <GlobalContext.Provider value={{
            currentUser,
            login,
            signup, 
            logout,
            resetPassword,
            updateEmail,
            updatePassword,
        }}>
             {!loading && children}
        </GlobalContext.Provider>
    );
}