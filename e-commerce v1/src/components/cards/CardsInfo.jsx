import React from 'react'
import './cards.css';
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import {FaPlaneDeparture, FaCoffee, FaAnchor} from 'react-icons/fa';
import{SlDiamond} from 'react-icons/sl';

const CardsInfo = () => {
  return (
    
   
    <div className="col-12 mt-0">
    <div className="cards bg-light">

    <div className="cardsInfo mt-3">
    
    <div className="col-3">
    <FaPlaneDeparture className="icons"/>
    </div>
    <div className="col-9">
    <h6>Free Shipping</h6>
    <p>On all order over</p>
    </div>
    
    </div>

    <div className="cardsInfo mt-3">
    <div className="col-3">
    <SlDiamond className="icons"/>
    </div>
    <div className="col-9">
    <h6>Join Risk Free</h6>
    <p>30 days refund</p>
    </div>
    </div>

    <div className="cardsInfo mt-3">
    <div className="col-3">
    <FaCoffee className="icons"/>
    </div>
    <div className="col-9">
    <h6>Support 24/7</h6>
    <p>Online 24 hours</p>
    </div>
    
    </div>

    <div className="cardsInfo mt-3">
   
    <div className="col-3">
    <FaAnchor className="icons"/>
    </div>
    <div className="col-9">
    <h6>100% Safe</h6>
    <p>Secure shopping</p>
    </div>
   
    </div>

    </div>
    </div>
  
  )
}

export default CardsInfo