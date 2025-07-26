import {auth, googleProvider} from "../src/App.jsx";
import {useState} from "react";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'; // Correct

function Auth() {


    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")


    console.log(auth?.currentUser?.email)
    console.log(auth?.currentUser?.photoURL)

    const googlePhotoUrl = auth?.currentUser?.photoURL

    const signIn = async (e)=> {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password);

        } catch (err) {
            console.error(err)

        }
    }



        const signInWithGoogle = async (e)=> {
            e.preventDefault()
            try {
                await signInWithPopup(auth, googleProvider);


            } catch (err) {
                console.error(err)

            }
        }


        const logOut = async (e)=> {
            e.preventDefault()
            try {
                await signOut(auth, googleProvider);


            } catch (err) {
                console.error(err)

            }
        }












    return (
        <div className={'flex flex-row justify-center gap-5 mt-2'}>

            <input type="text" placeholder={'Under Your Email Here'} className={'bg-gray-400'} onChange={(e) => setEmail(e.target.value)}/>

            <input type="text" placeholder={'Enter Your Password Here'} className={'bg-gray-400'} onChange={(e) => setPassword(e.target.value)} />
            <button type={"submit"} onClick={signIn} > Submit</button>
                <button type={"submit"}  onClick={signInWithGoogle}> Sign in with Google</button>
            <button type={"submit"}  onClick={logOut}> Sign Out</button>
            <img src={googlePhotoUrl} alt=""/>

        </div>
    );
}

export default Auth