import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/app';

function test() {
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

function Main() {
    return <main>
        <button onClick={test}>
            register
        </button>
    </main>
}

export default Main;