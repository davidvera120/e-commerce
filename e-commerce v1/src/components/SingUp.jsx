import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Alert } from "./Pag3";
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer } from '../styles/PagIntro'
import { auth, createUserDocument } from "../firebase";
import logogoogle from '../images/logogoogle.png'
import logofb from '../images/logofb.png'
import portada from '../images/portada.png'
import { registerWithEmail } from "../Redux/Actions/userAction";
import {NavBar2} from "./NavBar2";

export function SingUp() {
  // const { singup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    name:"",
    password: "",
  });

const reset = () => {
  setUser(" ")
}  

const dispatch = useDispatch();

const handleSubmit = (e) => {
e.preventDefault();
dispatch(registerWithEmail(user.email, user.password, user.name))
reset();
}

  // const [error, setError] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await singup(user.email, user.password, user.displayName, user.phoneNumber);
  //     navigate("/");
  //     console.log(user)
     
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }



console.log(user);
  return (
    <section>
    <div className="col-12">
    <div className="row">
    <div className="container">
 <NavBar2 />
      
      <div className="col-12" Style="margin-top:-100px">
      <div className="container d-flex" Style="justify-content: center;aling-items:center;">
     <img Style="height:450px; width:450px;" src={portada} alt=""/>
      </div>
      </div>

      <div className="col-12">
      <div className="container" Style="text-align:center">
      <TextIntro>
      <div className="col-12">
      <h2>Create New Account</h2>
      </div>
      <div className="col-12">
     <h5>Create a new account by filling in all the
     fields or log in to an existing account</h5>
     </div>
     </TextIntro>
     </div>
     </div>
    

      <div className="col-12">
      <div className="row">
      <div className="col-12">
      <Singupfrm>

      <Form onSubmit={handleSubmit}>

      <InputContainer className="mb-2 mt-3">
      <Label htmlFor="email">Email</Label>
      <Input1 type="email" name="email"   onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="youremail@gmail.com"/>
    </InputContainer>
    <InputContainer className="mb-3 mt-3">
      <Label htmlFor="name">Name</Label>
      <Input1 type="text" name="name"   onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder="username"/>
    </InputContainer>
    <InputContainer className="mb-2">
      <Label htmlFor="password">Password</Label>
      <Input1 type="password" name="password"  onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="*************"/>
    </InputContainer>
    <div className="col-12">
    <div className="row">
    <div className="container d-flex" Style="justify-content:center;">
    <ButtonIntro1>
    Register
    </ButtonIntro1>
  </div>
    </div>
    </div>
    </Form>
    </Singupfrm>
  </div>
</div>
</div>

      

     
    <div className="col-12">
    <div className="row">
    <div className="col-12" Style="margin-top:20px; font-weight:400; font-size:14px; text-align:center">
        Already have an Account?
        <Link to="/login" Style="color:#2BE7E8; margin-left:20px;">
          Login
        </Link>
      </div>
    </div>
    </div>
     
    </div>
</div>
</div>
</section>
  );
}

