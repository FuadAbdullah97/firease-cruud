import './App.css'
import Auth from "../components/Auth.jsx";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import {useEffect, useState} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBnY5OnSD0VtvV0OaZpq4wJC9di1a4KrRE",
    authDomain: "react-auth1-e2923.firebaseapp.com",
    projectId: "react-auth1-e2923",
    storageBucket: "react-auth1-e2923.firebasestorage.app",
    messagingSenderId: "627606777713",
    appId: "1:627606777713:web:d49303b29d4522027ad0d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)

function App() {
    const [movieList, setMovieList] = useState([])
    const movieCollectionRef = collection(db, "movies")


    useEffect(()=> {
        const getMovieList =  async () => {

            try{
                    const data = await getDocs(movieCollectionRef)
                    const filteredData = data.docs.map((doc)=>({...doc.data(), id: doc.id}))
                    console.log(filteredData)
                }catch(err){
                console.error(err)
            }


        }
        getMovieList()
    },[])
    //Test



  return (
    <>
      <Auth />
    </>
  )
}

export default App
