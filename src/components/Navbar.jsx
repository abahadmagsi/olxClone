import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'
class Navbar extends React.Component{
    
    render(){
        return(
            <div className="nav">
                <div className="items">
                    <div className="drop" id="drop">
                <h4>ALL CATEGORIES</h4>
                
                </div>
                <div className="links">
                <Link className='link' to='/'>Cars</Link>
                <Link className='link' to='/'>Mobile Phones</Link>
                <Link className='link' to='/'>Motorcycles</Link>
                <Link className='link' to='/'>Houses</Link>
                <Link className='link' to='/'>TV-Video-Audio</Link>
                <Link className='link' to='/'>Tablets</Link>
                <Link className='link' to='/'>Land and Plots</Link>
                <div id="dropDown">
                    
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Navbar;