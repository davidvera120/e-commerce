
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { cardsTypes } from '../Types/cardsTypes';

//create card 
export const addCart = (card) => {

    return async (dispatch) => {
        const colRef=collection(db, "ejercicios");
        await addDoc(colRef);
       
            dispatch( addCardSync( card ) )           
    }
}

const addCardSync = ( card ) => {
    return{
    type: cardsTypes.add,
    payload: card
}}


//read cards
export const listaCards = (id) =>{
    return async (dispatch)=>{
        
        const colRef=collection(db, "cards");
         await onSnapshot(colRef, (snapshot)=>{
            const cards2=snapshot.docs
            const info=cards2.map((doc)=> ({...doc.data(),id:doc.id}));
            const cards=info;
            console.log(cards);
dispatch(listCards(cards))
            })
            
         } 
    }

export const listCards = (cards)=>{
        return{
            type: cardsTypes.read,
            payload: cards
        }
}


//edit workout
export const editWorkout = (editcard, id1) => {
    return( dispatch) => {

        const colRef=collection(db, "ejercicios");    
        const cardDoc = doc(colRef, id1)
        setDoc(cardDoc, editcard)
        .then(resp => {
            dispatch(editCard(editcard))
        })
        .catch(error => {
            console.log(error);
        })
    }
 }
 
 export const editCard = (editcard) => {
     return{
         type: cardsTypes.edit,
         payload: editcard
     }
 
 }
