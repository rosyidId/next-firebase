import { Authentication } from "../services/firebase"
import { useEffect, useState } from "react"
import {InitialUserState ,useUser } from './user'

const AuthStateChangeProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const user = useUser()

    const { setUser } = user

    const InitiateAuthStateChange = () => {
        Authentication().onAuthStateChanged((user) => {
            if (user) {
                console.log('User is Authenticated')
                // console.log(user)
                setUser({ email: user.email, uid: user.uid })
            } else {
                console.log('User is Not Authenticated')
                setUser(InitialUserState)
            }
            setIsLoading(false)
        })
    }

    useEffect(() => {
        InitiateAuthStateChange()
    }, [])

    if (isLoading) {
        return (
            <div className="font-extralight text-sm">
                Loading.....
            </div>

        )
    }

    return children

}

export default AuthStateChangeProvider;


