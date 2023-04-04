import { typesUser, userTypes, typesUser1 } from "../Types/userTypes";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider } from "firebase/auth";
// import { google } from "../../Firebase/firebaseConfig";
import  {googleProvider} from '../../firebase';
import {auth} from "../../firebase"
import { ViewAgendaOutlined } from "@mui/icons-material";
import { Unstable_Grid2 } from "@mui/material";
import { db } from '../../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";

// Inicio y registro con  Google
export const loginGoogle = () => {
    return (dispatch) => {
        
        signInWithPopup( auth, googleProvider )
        .then( ({user}) => dispatch(loginProvider(user.uid,user.displayName)) )
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
}

export const loginProvider = ( id, displayName ) => {
    return {
        type: userTypes.login,
        payload:{ id, displayName}
    }
}


// Registro de usuario con email y contraseña
// export const registerWithEmail = ( email, password, name ) => {
//     return(dispatch) => {
       
//         createUserWithEmailAndPassword( auth, email, password )
//         .then(async ({user})=> {
//             await updateProfile(auth.currentUser, { displayName: name })
//             dispatch(registerSync(user.email, user.displayName, user.uid))
//         } )
//     }
// }

export const registerWithEmail = ( email, password, name ) => {
    return(dispatch) => {
createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    await updateProfile(auth.currentUser, { displayName: name })
    dispatch(registerSync({email, name}))
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    }
}


const registerSync = ( user ) => {
    return {
        type: userTypes.register,
        payload: user
    }
}




export const LoginWithEmail = (email, password) => {
    return(dispatch) => {
signInWithEmailAndPassword(auth, email, password)
  .then(({user:{displayName, email, photoURL}}) => {
   
    dispatch(loginSync(email, displayName, photoURL))
  })
  .catch((error) => {
    console.log("Usuario o contraseña invalida");
  });

    }
}


const loginSync = (user) => {
    
    return {
    type: userTypes.login,
    payload: user
    }
}



// Inicio de sesion con email
// export const LoginWithEmail = (email, password) => {
//     return(dispatch) => {
       
//         signInWithEmailAndPassword(auth, email, password)
//         .then(({user}) => {dispatch(loginSync(user.uid, user.displayName))})
//         .catch(() =>{ console.log("Usuario o contraseña invalida")})
//     }
// }




// Registro de genero
// export const addGender = ( gender, uid ) => {
//     return (dispatch) => {
//         setDoc(doc(db, "users", uid), {gender:gender})
//         .then( (resp) => {
//             dispatch( addGender1( {gender} ) )
//             alert('cita agendada con exito')
//         })
//     }
// }

// const addGender1 = ( gender ) => ({
//     type: userTypes.addg,
//     payload: gender
// })


//registro de edad
// export const addAge = ( age, uid ) => {
//     return (dispatch) => {
//         setDoc(doc(db, "users", uid), {age:age})
//         .then( (resp) => {
//             dispatch( addAge1( {age} ) )
//             alert('registro exitoso')
//         })
//     }
// }

// const addAge1 = ( age ) => ({
//     type: userTypes.adda,
//     payload: age
// })



//registrar altura
// export const addHeight = ( height, uid ) => {
//     return (dispatch) => {
//         setDoc(doc(db, "usuarios", uid), {height:height})
//         .then( (resp) => {
//             dispatch( addHeight1( {height} ) )
//             alert('registro exitoso')
//         })
//     }
// }

// const addHeight1 = ( height ) => ({
//     type: userTypes.addh,
//     payload: height
// })


//registrar peso
// export const addWeight = ( weight, uid ) => {
//     return (dispatch) => {   
//     setDoc(doc(db, "users", uid), {weight:weight})
//         .then( (resp) => {
//             dispatch( addWeight1( {weight} ) )
//             alert('registro exitoso')
//         })
//     }
// }

// const addWeight1 = ( weight ) => ({
//     type: userTypes.addw,
//     payload: weight
// })






