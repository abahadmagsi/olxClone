import React from 'react'
import './Header.css'
import logo from '../Images/olxLogo.png'
import Search from '../Images/Icons/search2.png'
import {Link} from "react-router-dom";
class Header extends React.Component{
    render(){
        return(
            <>
                <nav>
                    <Link to="/"><img src={logo} alt=""/></Link>
                    <input value="Pakistan" className="search1" type="search"/>
                    <input placeholder="Find Cars, Mobile Phones and more...." className="search2" type="search"/>
                    {/* <div className="imgSearch"><img src={Search} alt=""/></div> */}
                    <Link to={{pathname:"/login"}} className="Link">Login</Link>
                    <button>+ SELL</button>
                </nav>
            </>
        )
    }
}

export default Header;