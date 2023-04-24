// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJM9Uz2oJ72oOuzNKPoBNcvv8e3gDT5VA",
  authDomain: "fir-spockin.firebaseapp.com",
  projectId: "fir-spockin",
  storageBucket: "fir-spockin.appspot.com",
  messagingSenderId: "435949192957",
  appId: "1:435949192957:web:963e19e09ab46a08fb6094",
  measurementId: "G-M1SR7JJN2K"
};

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


        const signUpMail = document.querySelector("#signUpemail")
        const signUpPass = document.querySelector("#signUppassword")
        const signUpBtn = document.querySelector("#signUpBtn")


const createuser = async () => {
    let email = signUpMail.value;
    let password =  signUpPass.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
                // Signed in 
                const user = userCredential.user ;
                console.log(user, "sign Up success")
    })

.catch((error) => {
        const errorCode = error.Code ;
        const errorMessage = error.message ;
        // .. 
        console.log(errorCode , errorMessage )

    });
}


signUpBtn.addEventListener("click", createuser);


// sign in function

const signinMail = document.querySelector("#signInemail");
const signinPass = document.querySelector("#signInpassword");
const signinBtn = document.querySelector("#signInBtn");

const signIn = async () => {

    let email = signinMail.value;
    let pass = signinPass.value;


    signInWithEmailAndPassword(auth, email , pass)
    .then((userCredential) => {
    // signed in 

    const user = userCredential.user;
    // ... 
    alert("sign in success")
    location.href = "/index.html" ; 
    }).catch((error) => {
         
        const errorCode = error.code ; 
        const errorMessage = error.Message ; 

        console.log( " error: ", errorCode, errorMessage) ; 
        alert("wrong username or password")

    })

    }

signinBtn.onclick = signIn ;
