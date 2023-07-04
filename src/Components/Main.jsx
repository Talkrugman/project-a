import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/app';

function testEmailAndPassword() {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

function testGoogleProvider() {
    signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
            // Signed in 
            const user = result.user;
            //...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //..
        });
}

function Main() {
    return <main>
        <button onClick={testEmailAndPassword}>
            register user
        </button>
        <button onClick={testGoogleProvider}>
            register
        </button>
    </main>
}

export default Main;