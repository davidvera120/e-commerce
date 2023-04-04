import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {collection, getDocs, getDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore'; 
import {db} from '../../firebase';
import { listaCartUser, editUserCart } from '../../Redux/Actions/cartAction';
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
import './cart.css';
import {TiDeleteOutline} from "react-icons/ti";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user  = useSelector( state => state.login);
  const id1=user.id; 
  const {Cart} = useSelector(state => state.readCart)




  const [cart, setCart] = useState([]);
   const [counter, setCounter] = useState();
   const [shipping, setShipping] = useState();
   const [tax, setTax] = useState(0);
   const [total, setTotal] = useState(0);
   const [name, setName]=useState('');
   const [description, setDescription] = useState('')
   const [img, setImg] = useState('')
   const [pics, setPics] = useState([])
   const [subTotal, setSubTotal] = useState();

   const checkoutCart = async () => {
    const subTotal = Cart?.map((task) => (task.price*task.amount));
    let subtotal=0;
    for (let i = 0; i < subTotal.length; i++) {
     subtotal += subTotal[i];
    }
  let shipping1=parseInt(subtotal*0.05);
  let tax1=parseInt(subtotal*0.1);
  setSubTotal(subtotal);
  setShipping(shipping1);
  setTax(tax1);
  setTotal(subtotal+shipping1+tax1); 
  }

const Checkout = async () => {

  navigate("/check")

  }

const DeleteCart = async (id2) => {
  const cartRef = collection(db, "users", id1, "cart");
  const workDoc = doc(cartRef, id2);
  await deleteDoc(workDoc);
}

const Increment = async (id2, amount1) => {
    let sum=amount1;
    sum++;
    dispatch(editUserCart({amount:sum}, id1, id2 ));   
}

const Decrement = async (id2, amount1) => {
  if(amount1>1){
  let sum=amount1;
  sum--;
  dispatch(editUserCart({amount:sum}, id1, id2 ));
  }   
}

useEffect(() => { 
  checkoutCart(Cart);
  },[Cart])
   
useEffect(() => {
    dispatch( listaCartUser(id1))
  },[dispatch])
  

  return (
   
    <div className="infocart mb-5">
    <div  className="box">
    <h2>Shopping Cart</h2>
    {
      
      Cart?.map((item)=>{
        return(  
          <div key={item.id}>  
        <button className="button-delete"  onClick={ ()=> {DeleteCart(item.id)}}><TiDeleteOutline size={20}/></button>
    <div className="boxcart mt-4 m-auto">
    <img src={item.img} className="img-cart" alt="imqcart"/>
    <div>
    <div className="infoCart">
    <h6>{item.name}</h6>
    <p>${item.price}</p>
    </div>
    <div className="wrapper">
    <button className="button-counter" onClick={ ()=> {Decrement(item.id, item.amount)}}>-</button>
    <span className="counter">{item.amount}</span>
    <button className="button-counter" onClick={ ()=> {Increment(item.id, item.amount)}}>+</button>
   
    </div>
    </div>
   
    </div>
   </div>
    )})
  }
  </div>
  
  <div className="checkout bg-light">
  <div className="checkout1">
  <h2>Order Summary</h2>
  </div>
  <div className="checkout2">
  <h5>Subtotal</h5>
  <h5>${subTotal}</h5>
  </div>
  <div className="checkout2">
  <h5>Shippinng estimate</h5>
  <h5>${shipping}</h5>
  </div>
  <div className="checkout2">
  <h5>Tax estimate</h5>
  <h5>${tax}</h5>
  </div>
  <div className="checkout3">
  <h5>Order Total</h5>
  <h5>${total}</h5>
  </div>
  <button className="button-checkout" onClick={ ()=> {Checkout()}}>Checkout</button>
  </div>
 
    </div>
  
  )
}

export default Cart