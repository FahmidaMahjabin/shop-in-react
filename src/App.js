
import './App.css';

import React from 'react';
import Header from './components/Header/Header';
import Container from './components/container/Container';
import { Route, Routes } from 'react-router-dom';
import OrderDetail from "./components/orderDetail/OrderDetail";
import LogIn from './LogIn/LogIn';
import SignIn from './SignIn/SignIn';

import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        
        <Route path = "/" element = {<Container></Container>}></Route>
        <Route path = "/order" element = {
          <RequireAuth>
            <OrderDetail></OrderDetail>
          </RequireAuth>
        
        }></Route>
        {/* <Route path = "/cart" element = {<Cart></Cart>}></Route> */}
        <Route path = "/logIn" element = {<LogIn></LogIn>}></Route>
        <Route path = "/signIn" element = {<SignIn></SignIn>}></Route>
        <Route path = "/shipment" element = {
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
};

export default App;