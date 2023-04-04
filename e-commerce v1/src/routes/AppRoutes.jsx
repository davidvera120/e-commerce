import { ChakraProvider } from '@chakra-ui/react';
import '../Global.scss'
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


import "bootstrap/dist/css/bootstrap.min.css";

import { loginProvider } from "../Redux/Actions/userAction";
import { useDispatch } from "react-redux";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"
import { ViewAgendaTwoTone } from '@mui/icons-material';

//pages
import {Home, Contact, Login, SingUp, Admin, Cart, Check} from "../pages"
//components
import {Header, Footer} from "../components"

 


 export const AppRoutes =() => {
    const [auth1, setAuth] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
       
        onAuthStateChanged( auth, (user) => {
            if (user?.uid) {
                dispatch(loginProvider(user.uid,user.displayName))
                setAuth(true)
                console.log(user)
            } else {
                setAuth(false)
            }
        } )
    }, [dispatch, setAuth])

            return (
            <>
                    <BrowserRouter>
                    <Header /> 
                        <Routes>
                        <Route path='/login' element={<PublicRoutes isAutentication={auth1}> <Login /> </PublicRoutes>} />
                        <Route path='/singup' element={<PublicRoutes isAutentication={auth1}> <SingUp /> </PublicRoutes>} />
                        
                        <Route path="/home" element={<PrivateRoutes isAutentication={auth1}><Home /></PrivateRoutes>} />
                        <Route path="/cart" element={<PrivateRoutes isAutentication={auth1}><Cart /></PrivateRoutes>} />
                        <Route path="/check" element={<PrivateRoutes isAutentication={auth1}><Check /></PrivateRoutes>} />
                            <Route path='/' element={<PrivateRoutes isAutentication={auth1}> <Home /> </PrivateRoutes>} />
                            
                           
                           
                            <Route path="/admin" element={<PrivateRoutes isAutentication={auth1}><Admin/></PrivateRoutes>} />
                            <Route path="*" element={<Navigate to="/login"/>}/> 
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                    
                 
                        </Routes>
                
                    </BrowserRouter>
                
           </> 
            
            );
    }

export default AppRoutes;