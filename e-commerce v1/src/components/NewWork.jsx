import React, {useState} from 'react'
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer } from '../styles/PagIntro'
import { collection, addDoc, setDoc, doc,} from '@firebase/firestore';
import {db} from '../firebase'



export const NewWork = () => {

const [descripcion, setDescription]= useState('')
const [name, setName]=useState('')
const [video, setVideo] = useState('')
const [img, setImg] = useState('')
const [categoria, setCategoria] = useState('')
const [peso, setPeso] = useState([])
const [sets, setSets] = useState([])
const [duracion, setDuracion] = useState('')

// const [work, setwork] = useState({
//     name: "",
//     descripcion:"",
//     duracion:"",
//     video: "",
//     img:"",
//     categoria:""
//   });



// const ejerciciosCollection = collection(db, "users")

// const  ejercicioCollection= doc(db, 'users', 'prueba', '' )
// const ejercicios1=collection(db, 'entrenamiento');
const refejercicios = collection(db, 'users')
const coluser=collection(db, 'users')


// crear documento con el id del usuario logeado
const docuser=doc(db,"users", 'abc123')
 
// crear documento en la subcolecciion del usuario
const docRef=doc(db, "users", "abc123")
const colRef=collection(docRef, "entrenamientos")


const NewWorkout = async (e) => {
e.preventDefault()
// await addDoc (ejerciciosCollection,{name: name, video: video, descripcion: descripcion, img: img, categoria: categoria, duracion: duracion } )

await addDoc(colRef, {name: name, video: video, descripcion: descripcion, img: img, categoria: categoria, duracion: duracion });

}

  return (

    
    <div className="col-12">
    <div className="row">
    <div className="col-12">
    <Singupfrm>

    <Form onSubmit={NewWorkout}>

    <InputContainer className="mb-2 mt-3">
    <Label htmlFor="namel">title</Label>
    <Input1 type="text" name="name"   onChange={(e) => setName(e.target.value)} placeholder="title"/>
  </InputContainer>
  <InputContainer className="mb-3 mt-3">
    <Label htmlFor="descripcion">descripcion</Label>
    <Input1 type="text" name="descripcion"   onChange={(e) => setDescription(e.target.value)} placeholder="description"/>
  </InputContainer>
  <InputContainer className="mb-3 mt-3">
    <Label htmlFor="duracion">Duracion</Label>
    <Input1 type="text" name="duracion"   onChange={(e) => setDuracion(e.target.value)} placeholder="duracion"/>
  </InputContainer>
  <InputContainer className="mb-3 mt-3">
  <Label htmlFor="video">Videoe</Label>
  <Input1 type="text" name="video"   onChange={(e) => setVideo(e.target.value)} placeholder="video"/>
</InputContainer>
<InputContainer className="mb-3 mt-3">
<Label htmlFor="imagen">Imagen</Label>
<Input1 type="text" name="imagen"   onChange={(e) => setImg(e.target.value)} placeholder="image"/>
</InputContainer>
<InputContainer className="mb-3 mt-3">
<Label htmlFor="categoria">categoria</Label>
<Input1 type="text" name="categoria"   onChange={(e) => setCategoria(e.target.value)} placeholder="image"/>
</InputContainer>
<ButtonIntro1
    type="submit">
    
    Create

</ButtonIntro1>
  </Form>
  </Singupfrm>
</div>
</div>
</div>
  )
}

