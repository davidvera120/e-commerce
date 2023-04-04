
import React, { useState } from "react";
import { CardBoard, CardBoard2, Singupfrm,Select1, Form, Label, Input2, InputContainer, InputContainer1, Buttonfilter, Cardwork } from '../../styles/PagIntro'
import { useDispatch } from "react-redux";
import { loginGoogle, LoginWithEmail } from "../../Redux/Actions/userAction";
import styles from './auth.module.scss';
import './auth.css';
import { registerWithEmail } from "../../Redux/Actions/userAction";
import {Link, NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from "react-toastify";

const SingUp = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const reset = () => {
    setEmail(" ");
    setPassword(" ");
    setName(" ");
    setCPassword(" ");
  }  
  

  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
  e.preventDefault();
  if (password !== cPassword){
toast.error("passwords do not match.")
  }else{
  toast.success("Your account has been registered.");
  dispatch(registerWithEmail(email, password, name));
  reset();
  navigate("/login");
  }
  }


  return (
    <div className="col-12">
<ToastContainer />
    <div className="container card">
    <CardBoard>
    <Form onSubmit={handleSubmit}>
    <div className="col-12">
    <div className="container general1" Style="margin-top:20px">
    <h6 className={styles.inputwork}>Email:</h6>
    <Input2 type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="email"/>
   
    </div>
    </div>

    <div className="col-12">
    <div className="container general1" Style="margin-top:20px">
    <h6 className={styles.inputwork3}>Username:</h6>
    <Input2 type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="username"/>
   
    </div>
    </div>  

    <div className="col-12">
    <div className="container general1" Style="margin-top:20px;">  
    <h6 className={styles.inputwork2}>Password:</h6>
    <Input2 type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="password"/>
    </div>
    </div>
    
    <div className="col-12">
    <div className="container general1" Style="margin-top:20px;">  
    <h6 className={styles.inputwork2}>Confirm Password:</h6>
    <Input2 type="text" name="password" value={cPassword} onChange={(e) => setCPassword(e.target.value)} required placeholder=" confirm password"/>
    </div>
    </div>

    <button  className="custom-btn btn-1 mt-4"  type="submit">

    Log In
    
    </button>
    </Form>
    <div className="col-12 mt-5">
    <div className="container d-flex general1">
    <h5>Already an account?</h5><Link className="link1" to="/singin">Sing In</Link>
    </div>
    </div> 
    </CardBoard>
    </div>
    </div>
  )
}

export default SingUp
