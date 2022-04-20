import { initializeApp, getApps } from "firebase/app";
import {
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC_aqInWK6cJBP0I9FayYQnVhYLSXRzDto",
    authDomain: "next-auth-491d5.firebaseapp.com",
    projectId: "next-auth-491d5",
    storageBucket: "next-auth-491d5.appspot.com",
    messagingSenderId: "38686313902",
    appId: "1:38686313902:web:a4e5ad85a3b25c46360c3f"
};

// const app = initializeApp(firebaseConfig);


if(!getApps().length){
    initializeApp(firebaseConfig)
}

export const FirebaseAuth = getAuth()

export const Authentication =  () => {
    return FirebaseAuth
}

export const SignUp = async  (email, password) => {
    await createUserWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignIn = async (email, password) => {
    await signInWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SingOut = async () => {
    await signOut(FirebaseAuth)
}


export const GetSignInErrorMessage = (code) => {
    switch (code) {
        case 'auth/user-not-found':
            
          return 'Email tidak terdaftar!'
    
        case 'auth/wrong-password':
        default:
            return 'Email atau Password Salah!'
    }
}