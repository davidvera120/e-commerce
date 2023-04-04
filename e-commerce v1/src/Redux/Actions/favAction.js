import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import{favTypes} from '../Types/favTypes'



//create subcolection favorites 
export const addFav = ( product,  uid ) => {
    return async (dispatch) => {
        const docRef=doc(db, "users", uid)
        const colRef=collection(docRef, "favorites")
        await addDoc(colRef, product);
       
        dispatch( addFavSync( product ) )           
    }
}

const addFavSync = ( product ) => {
    return{
    type: favTypes.addFav,
    payload: product
}}


//read favorites subcolections
export const listaFavUser = (id) =>{
    return async (dispatch)=>{
        
        const docRef=doc(db, "users", id)
        const colRef=collection(docRef, "favorites")
         await onSnapshot(colRef, (snapshot) =>{ 
       
        const fav2=snapshot.docs
        const info=fav2.map((doc)=> ({...doc.data(),id:doc.id}));
        const fav=info;
        dispatch(listFavUser(fav))
    })
    }
}
export const listFavUser = (fav)=>{
        return{
            type: favTypes.readFav,
            payload: fav
        }
}