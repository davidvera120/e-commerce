import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {TiDeleteOutline} from "react-icons/ti";
import './fav.css';
import { useSelector, useDispatch } from 'react-redux';
import { listaFavUser} from '../../Redux/Actions/favAction';
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore';
import {db} from '../../firebase'
import { v4 as uuidv4 } from 'uuid';


export const Fav = () => {

    const dispatch = useDispatch();
    const user  = useSelector( state => state.login);
    const id1=user.id; 
    const {Fav} = useSelector(state => state.readFav)
    console.log(Fav)
  
   

    useEffect(() => {
      dispatch( listaFavUser(id1))
       },[dispatch])


    const DeleteFav = async (id2) => {
        const docRef=doc(db, "users", id1)
        const colRef=collection(docRef, "favorites")     
        const workDoc = doc(colRef, id2)
        await deleteDoc(workDoc)
      }

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
      dispatch( listaFavUser(id1))
    };

  return (
    <>
    
    <div ref={ref}>
      <button className="button-pop" onClick={handleClick}><MdOutlineFavoriteBorder size={20}/></button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}>

        <Popover id="popover-contained" className="w-100">
          <Popover.Header><h3>Favorites</h3></Popover.Header>
          <Popover.Body className="popover1">
          
          {
           Fav?.map((item)=>{
              return(
                <div key={uuidv4()}>  
          <button className="button-pop"  onClick={ ()=> {DeleteFav(item.id)}}><TiDeleteOutline size={20}/></button>
          <div className="boxFav mt-4">
          <img src={item.img} className="imgPop" alt="imqcart"/>
          <div>
          <h6>{item.name}</h6>
          <p>${item.price}</p>
          </div>
          </div>
          </div>
         
          )})
        }
       
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
    
    
    </>
  )
}

export default Fav