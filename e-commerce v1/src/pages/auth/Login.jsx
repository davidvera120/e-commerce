
import { useState } from "react";
import { CardBoard, CardBoard2, Singupfrm,Select1, Form, Label, Input2, InputContainer, InputContainer1, Buttonfilter, Cardwork } from '../../styles/PagIntro'
import { useDispatch } from "react-redux";
import { loginGoogle, LoginWithEmail } from "../../Redux/Actions/userAction";
import styles from './auth.module.scss';
import './auth.css';
import logogoogle from '../../images/logogoogle.png';
import logofb from '../../images/logofb.png';
import neon2 from '../../images/neon2.png';
import {Link, NavLink} from 'react-router-dom'
import Reset from "./Reset"

const Login = () => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(LoginWithEmail(email,password))  
    }
  
    const handleGoogle = () => {
        dispatch(loginGoogle())
    }
  

  return (
    <div className="col-12">


   
<div className="container card">

    <CardBoard>
    <Form onSubmit={handleSubmit}>
    <div className="col-12">
    <div className="container general1" Style="margin-top:20px">
    <h6 className={styles.inputwork}>Email:</h6>
    <Input2 type="text" name="name"   onChange={(e) => setEmail(e.target.value)} required placeholder="email"/>
   
    </div>
    </div>

    <div className="col-12">
    <div className="container general1" Style="margin-top:20px;">  
    <h6 className={styles.inputwork2}>Password:</h6>
    <Input2 type="text" name="name"   onChange={(e) => setPassword(e.target.value)} required placeholder="password"/>
    </div>
    </div>
    
    <button  className="custom-btn btn-1 mt-4"  type="submit">

    Log In
    
    </button>
    </Form>


<div className="col-12">
<div className="container general1">
<Reset/>
    </div>
    </div>


    <div className="col-12 mt-4">
    <div className="container general1">
    <h3>Log In With</h3>
    </div>
    <div className={styles.login1}>
    <button className="button1"><img src={logofb}  Style="width:80px"alt="fb"/></button>
    <span>|</span>
    <button className="button1"  onClick={handleGoogle} ><img src={logogoogle} alt="go"/></button>
    </div>
    </div>

    <div className="col-12 mt-4">
    <div className="container d-flex general1">
    <h5>Dont have a account?</h5><Link className="link1" to="/singup">Sing Up</Link>
    </div>
    </div>  
</CardBoard>
</div>
</div>
    
  )
}

export default Login
