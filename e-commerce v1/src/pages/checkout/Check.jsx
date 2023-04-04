
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
import { ButtonIntro1, TextIntro, Singupfrm, Select1, Label, Form, Input4, InputContainer, InputContainer1, Buttonfilter, Cardwork } from '../../styles/PagIntro';
import React, { useState, useEffect} from 'react';
import {collection, getDocs, getDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore'; 
import {db} from '../../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { listaCartUser, editUserCart } from '../../Redux/Actions/cartAction';
import { useNavigate } from 'react-router';
import './check.css';
import visa1 from "../../images/visa1.png";
import master1 from "../../images/master1.png";
import diners1 from "../../images/diners1.png";
import american1 from "../../images/american1.png";
import {TiDeleteOutline} from "react-icons/ti";

export const Check = () => {

  const user  = useSelector( state => state.login )
  console.log(user)
  const id1=user.id; 

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {Cart} = useSelector(state => state.readCart);
 
    const [Email, setEmail]=useState('');
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
  },[Cart]);

  useEffect(() => {
    dispatch( listaCartUser(id1))
  },[dispatch])
  const NewOrder = async (e) => {
    e.preventDefault()

  }


  return (
    <div className="check">
    <div className="card2 mb-5">
    
      <h5 className="card-title mb-3">Guest checkout</h5>
      <div className="guest">
        <div className="">
          <h6 className="mb-0 title1">First Name</h6>
            <input type="text"  placeholder="Type here" className="form-input" />
        </div>

        <div className="">
          <h6 className="mb-0 title1">Last name</h6>
         
            <input type="text"  placeholder="Type here" className="form-input" />
         
        </div>

        <div className="">
          <h6 className="mb-0 title1">Phone</h6>
          
            <input type="tel"  value="+48" className="form-input" />
         
        </div>

        <div className="">
          <h6 className="mb-0 title1">Email</h6>
          
            <input type="email"  placeholder="example@gmail.com" className="form-input" />
          
        </div>
      </div>

      <div className="form-check mt-2">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" forhtml="flexCheckDefault">Keep me up to date on news</label>
      </div>

      <hr className="my-4" />

      <h5 className="card-title mb-3">Payment Details</h5>

      <div className="col-12 credit">

<label className="radio-button">
  <input value="VISA" name="example-radio" type="radio"/>
  <span className="radio"></span>
  <img src={visa1}alt="imgcard"/>
</label>

<label className="radio-button">
  <input value="Master Card" name="example-radio" type="radio"/>
  <span className="radio"></span>
  <img src={master1}alt="imgcard"/>
</label>

<label className="radio-button">
  <input value="Diners Club" name="example-radio" type="radio"/>
  <span className="radio"></span>
  <img src={diners1}alt="imgcard"/>
</label>

<label className="radio-button">
  <input value="AMERICAN EXPRESS" name="example-radio" type="radio"/>
  <span className="radio"></span>
  <img src={american1}alt="imgcard"/>
</label>

</div>

      <div className="row">
      <div classNam="col-12 mb-3">
        <h6 className="mb-0 title1">Card Number</h6>
          <input type="text"  placeholder="XXX-XXXXX-XXX" className="form-input1 w-100"/>   
      </div>
      </div>
      <div className="ship mt-2">
      <div className="mb-3">
      <h6 className="mb-0 title1">Expiration Date</h6>
      <input type="text"  placeholder="Type here" className="form-input2" />
    </div>

    <div className="mb-3">
      <h6 className="mb-0 title1">CV CODE</h6>
        <input type="text"  placeholder="Type here" className="form-input2" />
    </div>

    </div>

      <h5 className="card-title mb-3">Shipping info</h5>

      <div className="guest mb-3">
        
          
          <div className="form-check h-100 border rounded-3">
            <div className="p-3">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" forhtml="flexRadioDefault1">
                Express delivery <br />
                <small className="text-muted">3-4 days via Fedex </small>
              </label>
            </div>
          </div>
       

        
          <div className="form-check h-100 border rounded-3">
            <div className="p-3">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" forhtml="flexRadioDefault2">
                Post office <br />
                <small className="text-muted">20-30 days via post </small>
              </label>
            </div>
          </div>
       

      
       
          <div className="form-check h-100 border rounded-3">
            <div className="p-3">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
              <label className="form-check-label" forhtml="flexRadioDefault3">
                Self pick-up <br />
                <small className="text-muted">Come to our shop </small>
              </label>
            </div>
          </div>
        

      </div>

      <div className="row">
        <div classNam="col-12 mb-3">
          <h6 className="mb-0 title1">Address</h6>
          
            <input type="text"  placeholder="Type here" className="form-input1 w-100" />
          
        </div>
        </div>
    <div className="ship mt-2">
        <div className="mb-3">
          <h6 className="mb-0 title1">District</h6>
          <input type="text"  placeholder="Type here" className="form-input2" />
        </div>

        <div className="mb-3">
          <h6 className="mb-0 title1">City</h6>
          
            <input type="text"  placeholder="Type here" className="form-input2" />
         
        </div>

        <div className="mb-3">
          <h6 className="mb-0 title1">Postal Code</h6>
          
            <input type="text"  className="form-input2" placeholder="0000"/>
          
        </div>
        </div>
     
        

      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
        <label className="form-check-label" forhtml="flexCheckDefault1">Save this address</label>
      </div>

       <div className="row">
      <div className="col-12 mb-3">
        <h5 classNam="mb-0">Message to seller</h5>
        
          <textarea className="form-text1 w-100" id="textAreaExample1" rows="2"></textarea>
       
      </div>
      </div>

      <div className="guest">
        <button className="button-checkout2">${total}</button>
      </div>

   
  </div>
<div className="check2 mb-0">
<div className="checkout-final">
<div className="checkout1">
<h2 className="title-cart">Order Summary</h2>
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
<div className="checkout-total">
<h5>Order Total</h5>
<h5>${total}</h5>
</div>

</div>
<div className="checkout-final2">
<h2 className="title-cart mt-2">Items in Cart</h2>
<div className="cart-list">
{
      
  Cart?.map((item)=>{
    return(  
      <div key={item.id}>  
      <button className="button-checkout3"  onClick={ ()=> {DeleteCart(item.id)}}>Remove</button>
<div className="boxcart mt-4 m-auto">
<img src={item.img} className="img-cart" alt="imqcart"/>
<div>
<div className="infoCart">
<h6 className="namep">{item.name}</h6>
<p className="price">${item.price}</p>
<div className="wrapper2">
<button className="button-counter" onClick={ ()=> {Decrement(item.id, item.amount)}}>-</button>
<span className="counter">{item.amount}</span>
<button className="button-counter" onClick={ ()=> {Increment(item.id, item.amount)}}>+</button>
</div>

</div>

</div>

</div>
</div>
)})
}
</div>
</div>

</div>
  </div>
  )
}

export default Check