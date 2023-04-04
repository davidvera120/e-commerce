import React from 'react'

import Slider from '../../components/slider/Slider';
import CardsInfo from '../../components/cards/CardsInfo';
import CardsFilter from '../../components/cards/CardsFilter';
import {Badge, Card, Navbar, Nav, Table, Container, Row, Col, Form, OverlayTrigger, Tooltip} from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
    <Row>
     <Slider/>
     <CardsInfo />
     <CardsFilter />
     </Row>
    </Container>
  )
}

export default Home
