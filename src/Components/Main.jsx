import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/app';

function testEmailAndPassword() {
    const email = "nnheo@example.com";
    const password = "password";
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            //...
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
            register google
        </button>
    </main>
}

export default Main;