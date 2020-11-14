import React from 'react'
import Image from '../Images/hero_bg_pk.jpg'
import './Curosel.css'
class Curosel extends React.Component{
    render(){
        return(
            <>
                <img className="img" src={Image} alt=""/>
            </>
        )
    }
}

export default Curosel;