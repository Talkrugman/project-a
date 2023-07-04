import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/app';

const email = "envkt@example.com";
const password = "abc12345";

const createUserWithEmailAndPasswordPromise = createUserWithEmailAndPassword(auth, email, password);

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