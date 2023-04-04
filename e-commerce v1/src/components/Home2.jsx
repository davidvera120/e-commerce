
  
import {Link} from 'react-router-dom';
import React, { useState, useEffect} from 'react';

import NavBar from '../components/NavBar';
import { ButtonIntro1, Container1} from '../styles/PagIntro'
import { ButtonNavBar } from './ButtonNavBar';
import {collection, getDocs, getDoc, deleteDoc, connectFirestoreEmulator, doc} from 'firebase/firestore'; 
import {db, auth} from '../firebase';
import {  signOut } from "firebase/auth";
import { ClassNames } from '@emotion/react';
import {   listaWorkoutsUser, listaWorksUser} from '../Redux/Actions/CreateWorkAction';
import { useSelector, useDispatch } from 'react-redux';



export const Home2 = () => {


  const logOut = () => {
   
    signOut(auth);
}


const {id} = useSelector(state => state.login)
console.log(id)
const {Work} = useSelector(state => state.workouts)
const dispatch = useDispatch();

useEffect(() => {
  
dispatch( listaWorkoutsUser (id))

},[dispatch])

const deleteWorkout = async (id2) => {
  const docRef=doc(db, "users", id)
  const colRef=collection(docRef, "entrenamientos")     
  const workDoc = doc(colRef, id2)
  await deleteDoc(workDoc)
  dispatch( listaWorkoutsUser (id))
}

    // const { logout, user } = useAuth();

    // console.log(user);
    // const handleLogout = async () => {
    //   try {
    //     await logout();
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // };


    //hooks
// let [ejercicios, setejercios]= useState([])
// let [ejercicios1, setejercios1] = useState([])

// //refrerenciamos a la db firestore

// const ejerciciosCollection = collection(db, "ejercicios")

// //funcion para mostrar todos los docs

// const getEjercicios = async () => {

//     const data =await getDocs(ejerciciosCollection)
//     console.log(data.docs)
//     const ejercicios1=data.docs

// const info=ejercicios1.map((doc)=> ({...doc.data(),id:doc.id}));
//     console.log(info)
//     const ejercicios=info
//     console.log(ejercicios)

// }


// useEffect( () => {
// getEjercicios()
// }, [])





  return (


<div className="col-12">
<div className="row">

<NavBar/>


{
  Work?.map(elemento=>(   
 <div className="col-12 mt-4">
 <div className="container d-flex" Style="justify-content: center;aling-items:center;">
 <Container1>
 <div className="col-12">
 <img src={elemento.img}  Style="height:150px; width:360px; margin-left:18px;"alt="cover"/>
 </div>
 <div className="col-12" Style="margin-top:150px; text-align:start; margin-left:-320px">
 <div className="row">
 <div className="col-8">
 <h1 Style="text-align: start; font-size:13px; background:none;">{elemento.name}</h1>
 </div>
 <div className="col-4">
 <h5 Style="text-align: center; font-size: 12px; background:none;">{elemento.descripcion}</h5>
 </div>
 </div>
 </div>
 <button onClick={ ()=> {deleteWorkout(elemento.id)}}><i className='bx bxs-trash' Style="margin-left:-90px; margin-right:15px;"></i></button>
 </Container1>
 </div>
 </div>
 ))
 }


<div ClassName="col-12">
<div className="container" Style="margin-top:20px;">
    <ButtonIntro1
   
    onClick={logOut}>
    Logout
   
    </ButtonIntro1>
    </div>
    </div>
</div>
</div>



   





 
  
    

  )
  }


