import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Curosel from '../components/Curosel'
import MoreOn from '../components/MoreOn'
import Section from '../components/Section'
import Footer from '../components/Footer'
class Home extends React.Component{
    render(){
        return(
            <>
            <Header/>
            <Navbar/>
            <Curosel/>
            <MoreOn/>
            <Section/>
            <Footer/>
            </>
        )
    }
}

export default Home;