import { createContext, useContext, useState } from "react"

// MEMBUAT GLOBAL CONTEXT
export const InitialUserState = {
    email: null,
    uid: null,
}

const userContext = createContext()

export const useUser = () => {
    return useContext(userContext)
}

export const UserProvider = (props) => {
    const [userState, setUserState] = useState(InitialUserState)

    // console.log(userState)

    const setUser = (userCredential) => {
        setUserState({...userCredential})
    }

    const ResetUser = () => {
        setUserState(InitialUserState)
    }

    const value = {...userState, setUser, ResetUser}
    return <userContext.Provider value={value} {...props}/>
}