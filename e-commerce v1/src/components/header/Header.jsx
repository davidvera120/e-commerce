
import React, {useState, useEffect} from 'react';
import styles from './Header.module.scss'
import logoShopping from '../../images/logoShopping.png'
import {Link, NavLink} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer } from '../../styles/PagIntro'
import {AiOutlineShoppingCart} from "react-icons/ai";
import {FiChevronDown} from "react-icons/fi";
import {Fav} from "../../pages/fav/Fav";
import { listaCartUser, editUserCart } from '../../Redux/Actions/cartAction';


const Header = () => {

const [products, setProducts]=useState()
const dispatch = useDispatch();
const user  = useSelector( state => state.login);
const id1=user.id; 
const {Cart} = useSelector(state => state.readCart)


function renderData(){
  let products1=Cart.length;
  setProducts(products1)
  }

  useEffect(() => {
    renderData();
  },[dispatch])

useEffect(() => {
  dispatch( listaCartUser(id1))
 
   },[dispatch])

  return (
  
    <nav className="navbar  navbar-expand-lg bg-light  fixed-top">
    <div className="container-fluid ms-3">
     <img src={logoShopping} Style="height:70px" alt="img"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse"  id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
          
          <li className="nav-item dropdown">
           <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias<FiChevronDown/></a>
            <ul className="dropdown-menu mb-3">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/home" className="nav-link">Contact Us</Link>
      </li>
        </ul>
        
        <ul className="navbar-nav me-5 mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          
          <li className="nav-item">
            <Link to="/order-history" className="nav-link" href="#">My Orders</Link>
          </li> 
          <li className="nav-item">
         
          <Fav />
          
          </li> 
          <li className="nav-item">
         
          <Link to="/cart" className="nav-link"  href="#">Cart<AiOutlineShoppingCart size={20} /><p Style="margin-top:-2rem; margin-left:3rem;font-weight: 500;">{products}</p></Link>
          
          </li>
    
          </ul>
        
          </div> 
         
      
    </div>
   
  </nav>
    
   
  )
}

export default Header