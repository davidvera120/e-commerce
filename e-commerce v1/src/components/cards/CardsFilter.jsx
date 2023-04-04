import './cards.css';
import { addCart } from '../../Redux/Actions/cartAction';
import { addFav } from '../../Redux/Actions/favAction';
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import {FaPlaneDeparture, FaCoffee, FaAnchor} from 'react-icons/fa';
import { ButtonIntro1, TextIntro, Singupfrm,Select1, Label, Input2, InputContainer, InputContainer1, Buttonfilter, Cardwork } from '../../styles/PagIntro';
import{HiChevronRight} from 'react-icons/hi';
import {BsSliders} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {listaCards} from '../../Redux/Actions/cardsAction';
import { useSelector, useDispatch } from 'react-redux';
import React, {useState, useEffect} from 'react';
import {MdOutlineFavoriteBorder} from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

const CardsFilter = () => {

  const [name, setName]=useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [pics, setPics] = useState([]);
  const [price, setPrice] = useState();
  const [counter, setCounter] = useState();
  const [brand, setBrand] = useState([]);
  const [rangeprice, setRangeprice] = useState('');

  const user  = useSelector( state => state.login )
  const id1=user.id; 
  const {Cards} = useSelector(state => state.read)
  const dispatch = useDispatch();

  const ProductCart = async (id2) => {
    const filtrado1 = Cards.filter((item) =>{
      return item.id===id2; 
  });
  setName(filtrado1[0].name)
  setImg(filtrado1[0].img)
  setPrice(filtrado1[0].price)
  setDescription(filtrado1[0].description)
  setPics(filtrado1[0].pics)
  setCounter(filtrado1[0].amount)
  dispatch(addCart({name:name, img: img, price: price, description: description, pics:pics, amount: counter}, id1));
  }

  const ProductFav = (id2) => {
    const filtrado1 = Cards.filter((item) =>{
      return item.id===id2; 
  });
  setName(filtrado1[0].name)
  setImg(filtrado1[0].img)
  setPrice(filtrado1[0].price)
  setDescription(filtrado1[0].description)
  setPics(filtrado1[0].pics)
  
  dispatch(addFav({name:name, img: img, price: price, description: description, pics:pics}, id1));
  }

  useEffect(() => {
    dispatch(listaCards())        
},[dispatch])


  return (
<div className="mt-0 container-cards">

<div className="button-filter navbar-expand-lg">
<button className="navbar-toggler icon-filter" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<BsSliders size={27}/> <span>Filters</span>
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
<div className="sidebar bg-light">
  <h6 className="mt-2">Categories</h6>
  <button><HiChevronRight/>All</button>
  <button><HiChevronRight/>Sports</button>
  <button><HiChevronRight/>Electronics</button>
  <button><HiChevronRight/>Fashion</button>
  <button><HiChevronRight/>home</button>

  <h6 className="mt-2">Brand</h6>
  <Select1  onChange={(e) => setBrand(e.target.value)} name="categoria">
  <option value="Triceps">Triceps</option>
  <option value="Biceps">Biceps</option>
  <option value="Shoulders">Shoulders</option>
  <option value="Legs">Legs</option>
  <option value="Forearm">Forearm</option>
  <option value="Cardio">Cardio</option>
  <option value="Full Body">Full Body</option>
  <option value="Brest">Brest</option>
  <option value="Back">Back</option>
  <option value="Buttocks">Buttocks</option>
  <option value="Abs">Abs</option>
  <option value="Stretching">Stretching</option>
  </Select1>

  <h6 className="mt-2">Price</h6>
  <div className="slidecontainer">
  <p>{rangeprice}</p>
  <input type="range" min="1" max="10000" value={rangeprice}  onChange={(e) => setRangeprice(e.target.value)}/>
  </div>
 </div>
</div>
</div>

<div className="content mt-5">
{
  Cards?.map((item) => {
   
    return (
<div className="cardP"  key={uuidv4()}>
<div className="contaier1">
<div className="container2">
<button className="fav" onClick={()=>{ProductFav(item.id)}}><MdOutlineFavoriteBorder size={18} /></button>
</div>
  <img className="imgcard" src={item.img} alt="imgP"/>
  </div>
  <span className="price">${item.price}</span>
    <p className="name">{item.name}</p>
     <button className="button-cart" onClick={()=>{ProductCart(item.id)}}><AiOutlineShoppingCart className="mb-1"/> Add to cart</button>
</div>
)})            
}
</div>
</div>



    )
}

export default CardsFilter;