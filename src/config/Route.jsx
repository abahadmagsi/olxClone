import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import Home from '../containers/Home'
import Login from '../containers/Login'
import Items from '../containers/Items'
class Routers extends React.Component{
    render(){
        return(
            <>
                <Router>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/items" component={Items}/>
                </Router>
            </>
        )
    }
}

export default Routers;