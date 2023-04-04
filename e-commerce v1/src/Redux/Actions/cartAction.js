import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import{cartTypes} from '../Types/cartTypes'



//create subcolection cart 
export const addCart = ( product,  uid ) => {
    return async (dispatch) => {
        const docRef=doc(db, "users", uid)
        const colRef=collection(docRef, "cart")
        await addDoc(colRef, product);
       
            dispatch( addCartSync( product ) )           
    }
}

const addCartSync = ( product ) => {
    return{
    type: cartTypes.addCart,
    payload: product
}}


//read cart subcolections
export const listaCartUser = (id) =>{
    return async (dispatch)=>{
        
        const docRef=doc(db, "users", id)
        const colRef=collection(docRef, "cart")
         await onSnapshot(colRef, (snapshot) =>{ 
       
        const cart2=snapshot.docs
        const info=cart2.map((doc)=> ({...doc.data(),id:doc.id}));
        const cart=info;
        dispatch(listCartUser(cart))
    })
    }
}
export const listCartUser = (cart)=>{
        return{
            type: cartTypes.readCart,
            payload: cart
        }
}




//edit workout
// export const editUserCart = (counter, id1, id2) => {
//     return async(dispatch) => {
//     const docRef=doc(db, "users", id1)
//     const colRef=collection(docRef, "cart")     
//     const workDoc = doc(colRef, id2)
//      updateDoc(workDoc, {counter})
//     .then(() => {
//         dispatch(editCartP(counter));
//       })
//       .catch((error) => {
//        console.log('error');
//       });
   
//     }
//  }

export const editUserCart = (counter, id1, id2) => {
    return async (dispatch) => {
     
        const cartRef = collection(db, "users", id1, "cart");
        const workDoc = doc(cartRef, id2);
        await updateDoc(workDoc, counter );
        dispatch(editCartP(counter));
      
    }
  }
 
 export const editCartP = (counter) => {
     return{
         type: cartTypes.editCart,
         payload: counter
     }
 
 }