import styled from "styled-components";
import Offcanvas from 'react-bootstrap/Offcanvas';




export const Div7 = styled.section`
                text-align: center;
                height: 100px;
                section{
                        margin:0 1em;
                        background-color: var(--shade-main);
                        width: 6.5em;
                        height: 2.5em;
                        border-radius: 1.5em;
                        display: flex;
                        justify-content: space-around;
                }
`

export const Form2 = styled.form`
                display:flex;
                flex-direction: column;
                justify-content: space-around;
                align-items:center;
                height:50vh;
                div{
                        input{
                                background-color: var(--main-bg-color);
                                border-radius: 1.5em;
                                margin-bottom: 1.5em;
                                :focus{
                                        background-color: var(--main-bg-color);
                                        color: aquamarine;
                                }
                        }
                }
                button{
                        background-color: var(--second-color);
                        width: 320px;
                        border-radius: 2em;
                        padding: 1em;
                }
`


export const DivCuenta =styled.div`
                margin-top: 5em;
                div:nth-child(2){
                        text-align: center;
                        margin: auto;
                        div{
                                width: 80px;
                                margin-top: 1.8em;
                                height: 80px;
                                border: 1px solid white;
                                border-radius: 50%;
                        }
                }
                a{
                        margin:0 10em 0 1em;
                        path{
                                color: var(--second-color);
                        }
                        
                }
                div:nth-child(3){
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        border: 1px solid white;
                        div{
                                border: 1px solid white;
                                width: 90px;
                                height: 35px;
                                border-radius: 1.5em;
                                text-align: center;
                        }
                }
`


export const DivFoto = styled.div`
                display: flex;
                align-items: center;
                margin-top:3em;
                div:nth-child(1){
                        border: 1px solid white;
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        margin-right:.5em;
                }
`



export const DivCanvas = styled.div`
                svg{
                width:2em;
                height: 1.8em;
                path{
                        color:var(--second-color);
                        font-size: 3em;
                        cursor: pointer;
                }
        }
`
export const CuerpoVentana = styled(Offcanvas)` 
        background-color: var(--main-bg-color);
        ul>li{
                list-style:none;
                font-weight:100;
                padding-bottom: 1em;
                
                svg{
                        padding-right: 1em;
                        path{
                                color:var(--second-color);
                        }
                }
        }
        button{
                background-color: var(--second-color);
        }
`


export const Textos1 = styled.div`
        line-height: 1.5em;
        text-align: center;
        width: 100%;
        height: max-content;
        margin: auto;
        position: fixed;
        bottom: 7em;
        h1{
                font-family: var(--font-2);
                font-weight:600;
                font-size: 2em;
                line-height: 1.5em;
        }
        p{
                font-family: var(--font-2);
                font-weight:200;
                font-size: 1.2em;
        }
`

export const Section = styled.div`
        display: flex;
        flex-direction:column;
        justify-content: center;
        /* align-items:center; */
        height:100fr;
        max-height: 100vh;
        width: 100%;
        margin:auto;
        background-color: var(--main-bg-color);
`

export const DivCard = styled.div`
        width: 100%;
        /* margin:auto; */
        overflow: hidden;
        img{
                display: inline-block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center center;
        }
`;
export const DivCard2 = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        div{
                max-width:15em;
                img{
                height: 100%;
                object-fit: cover;
                object-position: center center;
        }
        }
`



export const Enlace1 = styled.span`
        width: 100%;
        margin: auto;
        max-width: 600px;
        text-align: center;
        margin-bottom: 1.5em;
        position: fixed;
        bottom: 1.5em;
        left: 0; 
        right: 0;
        a{
                text-decoration: none;
                color: black;
                background-color: var(--second-color);
                padding: 1em 40%;
                border-radius:1.5em;
        }
`

export const DivPadre = styled.div`
        display: flex;
        height: 100vh;
        padding: 5em;
        flex-direction: column;
        justify-content: center;
        background-color: var(--main-bg-color);
        span{
                text-align: center;
                font-size: 2em;
                font-family:var(--font-1);
        }

`
export const LinearBarStyled = styled.div`
                width: 90%;
                padding-top: 20vh;
                max-width: 400px;
                margin: 0 auto;
`

export const DivPortada = styled.div`
                
                display: flex;
                justify-content: center;
`

export const DivLogos = styled.div`
                display: flex;
                justify-content: center;
                div{
                        width: 10em;
                }
`

export const Navigation = styled.nav`
        height: 80px;
        width: 100%;
        position: fixed;
        top: 0;
        left:0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.4em;
        font-size: 1.2em;
        background:none;
        & > div{
                width: 6em;
                display: flex;
                justify-content: space-between;
        }

`
export const Seccion1 = styled.section`
                /* border: 1px solid white; */
                display: flex;
                flex-direction: column;
                /* width: 100%; */
                max-height: 100vh;
                background-color: var(--main-bg-color);
`

export const Div1 = styled.div`
                border-bottom: 2px solid var(--second-color);
                border-top: 2px solid var(--second-color);
                display: flex;
                align-items: center;
                width:10em;
                span{
                        font-size:.8em;
                        color: gray;
                }
                input{
                        border: none;
                        font-size:2em;
                        background-color: var(--main-bg-color);
                        text-align:center;
                        :focus{
                                background-color: var(--main-bg-color);
                                color: gray;
                                font-size:2em;
                        }
                }
`

export const Form1 = styled.form`
                display:flex;
                flex-direction: column;
                justify-content: space-around;
                align-items:center;
                height:50vh;
                button{
                        background-color: var(--second-color);
                        width: 320px;
                        border-radius: 2em;
                        padding: 1em;
                }
`
export const Button12 = styled.button`
                background-color: var(--second-color);
                width: 320px;
                border-radius: 2em;
                padding: 1em;
`

export const DivDatos = styled.div`
                min-height:100vh;
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                padding-top: 3em;
                h4{
                        width: 100%;
                        text-align: center;
                        padding-bottom: 1em ;
                        font-size: 1.2em;
                }
                h5{
                        text-align: center;
                        font-size:.7em;
                }
`

export const Gender = styled.form`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 2em;
                button{
                        border: 1px solid var(--second-color);
                        width:150px;
                        height: 150px;
                        font-size: 6em;
                        border-radius: .2em;
                        color: var(--second-color);
                }
`
export const Selection = styled.form`
                width: 100%;
                color: #ffffff;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                height: 45vh;
                padding: 1em 0;
                div{
                        width: 100%;
                        max-width: 900px;
                        text-align: center;
                        button{
                                margin-bottom: .5em;
                        }
                }
                button{
                        border: .5px solid var(--second-color);
                        height: 3em;
                        border-radius: 1.5em;
                        width:100%;
                        max-width: 500px;
                        padding: 0 1em;
                        color: #ffffff;
                        span:nth-child(1){
                                float: left;
                        }
                        span:nth-child(2){
                                float: right;
                        }
                }

`
export const Boton = styled.button`
                background-color: var(--second-color);
                :hover{
                        border: 3px solid var(--second-color);
                }
`

export const DivNav2 = styled.nav`
        height: 80px;
        width: 100%;
        position: fixed;
        top: 0;
        left:0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.4em;
        font-size: 1.2em;
        transition: transform .2s;
        svg{
                cursor: pointer;
                :hover{
                        transform: scale(1.1); 
                }
        }
        svg:nth-child(2){
                font-size: 1.5em;
                
        }
        path{
                color: var(--second-color);
        }

`