
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import { sendPasswordResetEmail } from "@firebase/auth";
import {auth} from "../../firebase/config"
import React, { useState, useEffect} from 'react'
import { CardBoard, CardBoard2, Singupfrm,Select1, Form, Label, Input2, InputContainer, InputContainer1, Buttonfilter, Cardwork } from '../../styles/PagIntro'
import { useSelector, useDispatch } from 'react-redux'
import styles from './auth.module.scss';
import './auth.css';
import {IoMdCloseCircleOutline} from "react-icons/io"
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom'

const Reset = () => {


  const [abierto, setabierto]= useState(false);
  const [email, setEmail]= useState('');
  const navigate = useNavigate();
  const funcionModal = (valor) => {
  
  setabierto(valor)
  
  }


  const resetPassword = async (e) => {
    e.preventDefault()
    
    sendPasswordResetEmail(auth, email)
  .then(() => {
    toast.success("check your email for a reset link");
    setabierto(false)
  })
  .catch((error) => {
   
    toast.error(error.message)
  });
  
   
   
    }


  return (

   
    
    <div>
    <ToastContainer />
    <button className="link" onClick={()=>{funcionModal(true)}}>Forgot Password?</button>
   
  

   <Modal isOpen={abierto}>
   
    <ModalHeader>
    <div className="col-12">
    <div className="container d-flex">
   
    <button onClick={()=>{funcionModal(false)}} Style="background:none; border:none;"><IoMdCloseCircleOutline/></button>
   
    
    <h2>Reset Password</h2>
   
    </div>
    </div>
    </ModalHeader>

         <ModalBody>
    
    <Form onSubmit={resetPassword}>
   
    <div className="col-12">
    <div className="container general1 mt-2 mb-4">
    <h6 className={styles.inputwork}>Email:</h6>
    <Input2 type="text" name="name" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
   
    </div>
    </div>

<ModalFooter>
<div className="col-12">
<div className="container d-flex general1" >   
<button  className="custom-btn btn-1 mt-4"  type="submit">

Reset Password

</button>
</div>
</div>
</ModalFooter>
  </Form>
 
         </ModalBody>

   
</Modal>
    
    </div>
  )
}

export default Reset