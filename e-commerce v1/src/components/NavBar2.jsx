import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faSignal, faBatteryFull } from '@fortawesome/free-solid-svg-icons'
import { Navigation } from '../styles/Styles1';
import {MyTime} from './MyTime.jsx';





export const NavBar2 = () => {
  return (
    <Navigation>
    <p>
        <MyTime />
    </p>
    <div  Style="margin-top:-20px; background:none">
        <i className='bx bx-signal-4' Style="margin-left:40px"></i>
        <i className='bx bx-wifi'></i>
        <i className='bx bxs-battery-full'></i>
    </div>
</Navigation>
  )
}

