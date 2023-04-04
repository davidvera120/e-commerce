import React from 'react';
import { NavBarStyled } from '../styles/StylesGlobal';
import {Link, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer } from '../styles/PagIntro'
import agro1 from '../images/agro1.png'

 const NavBar = () => {

    const uid  = useSelector( state => state.login)
    const name=uid.name;
        return (
            

            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid ms-3">
              <img src={agro1} Style="height:70px" alt="img"/>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                  
                  <li className="nav-item dropdown">
                   <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias<i className='bx bxs-chevron-down-square'></i></a>
                    <ul className="dropdown-menu mb-3">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                  <form className="d-flex" role="search">
                  <Input1 type="search" placeholder="Buscar" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit"><i className='bx bx-search'></i></button>
                </form>
                </li>
                </ul>
                <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to="/" className="nav-link">Sobre Nosotros</Link>
              </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link"><i className='bx bx-user-circle' Style="font-size:24px;"></i></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link" href="#"><i className='bx bx-bookmark-heart' Style="font-size:24px;"></i></Link>
                  </li>
                
                  <li className="nav-item">
                  <Link to="/" className="nav-link" href="#"><i className='bx bx-cart' Style="font-size:24px;"></i></Link>
                  </li>
                  </ul>
              </div>
            </div>
          </nav>

        );
    }


export default NavBar;