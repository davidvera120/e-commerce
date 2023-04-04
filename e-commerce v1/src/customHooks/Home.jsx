
import NavBar from '../components/NavBar';
import React, {useState, useEffect} from 'react';

export const Home = () => {

const [color, setColor] = useState('none');

const change = () => {

 setColor('#ababab');

  document.mark.style=`background:${color}`;

}


  return (
    <div className="col-12">
    <NavBar/>


    </div>
  )
}

export default Home



