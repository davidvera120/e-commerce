import React from 'react'
import {Link} from 'react-router-dom'

export const ButtonNavBar = () => {
  return (
    <div className="col-12 mt-1">
    <div className="row">
    <div className="container fixed-bottom">
        <nav className="navbar-custom">
            <ul className="navbar-nav-custom">
                <li className="nav-item">
                <Link className="nav-link" to="/home2"><i className='bx bx-home-alt' Style="font-size:24px; "></i></Link>  
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/test"><i className='bx bx-spreadsheet' Style="font-size:24px; "></i></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/test"><i className='bx bx-bar-chart-square'Style="font-size:24px; "></i></Link>   
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/user"><i className='bx bx-user'Style="font-size:24px; "></i></Link>  
                </li>
    
            </ul>
        </nav>
    </div>
    </div>
    </div>
  )
}

