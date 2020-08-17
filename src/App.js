import React from 'react';
import './App.css';
import {Home} from './components/Home'

import Appbar from "./components/Appbar"
import Register from './components/auth/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import Product from './components/products/Product'
import Newproduct from './components/products/Newproduct'
import Updateproduct from './components/products/Updateproduct'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import  Admin  from './components/Admin';
import Orders from './components/order/Orders';
import Allorders from './components/order/Allorders';
 

function App() {
  return (
    <BrowserRouter>
          <h1> Shopping Mall</h1>
        <div className="container">
            <Appbar/>
          <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/product/newproduct' component={Newproduct}/>
              <Route path='/product/updateproduct/:id' component={Updateproduct}/>
              <Route path='/product' component={Product}/>
              <Route path='/admin' component={Admin}/>
              <Route path='/allorder' component={Allorders}/>


              <Route path='/register' component={Register}/>
              <Route path='/login' component={Login}/>
              
              
          </Switch>

        </div>
        </BrowserRouter>

  );
}

export default App;
