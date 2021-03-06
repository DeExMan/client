import React, { useContext } from 'react'
import { Context } from '..'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { SHOP_ROUTE } from '../utils/consts';
import { observe } from 'mobx';
import { observer } from "mobx-react-lite"
import { useNavigate } from 'react-router-dom';
import {ADMIN_ROUTE, LOGIN_ROUTE} from '../utils/consts'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Nav.Link style={{color:'white'}} href={SHOP_ROUTE}>BuyDevice</Nav.Link>
            {user.isAuth ? 
                <Nav className={"ml-auto"} style={{color: "white"}}>
                    <Button 
                    variant={"outline-light"} 
                    className={"ml-4"} 
                    onClick={() => navigate(ADMIN_ROUTE)}
                    >
                        Админ панель
                    </Button>
                    <Button 
                    variant={"outline-light"} 
                    className={"ml-4"} 
                    onClick={() => navigate(LOGIN_ROUTE)}
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: "white"}}>
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(!user.isAuth)}>Авторизация</Button>
                </Nav>
            }
        </Container>
      </Navbar>
  )
})

export default NavBar