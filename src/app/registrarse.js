import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from './firebase.js';


const formRegistrarse= document.querySelector('#formRegistrarse')

formRegistrarse.addEventListener('submit',(e)=>{
    e.preventDefault()
    const email =formRegistrarse['email'].value
    const password=formRegistrarse['password'].value

    console.log(email, password)
})