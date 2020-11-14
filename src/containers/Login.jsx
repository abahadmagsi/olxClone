import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

class Login extends React.Component{
    render(){
        return(
            <>
             <Header/>
            <Navbar/>
            <h1>Login</h1>
            </>
        )
    }
}

export default Login;